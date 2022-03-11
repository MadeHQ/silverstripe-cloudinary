<?php

namespace MadeHQ\Cloudinary\UserForms\Controllers;

use MadeHQ\Cloudinary\UserForms\EditableFileField as UserFormsEditableFileField;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\Control\HTTPResponse_Exception;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\Form;
use SilverStripe\Forms\FormAction;
use SilverStripe\Forms\HiddenField;
use SilverStripe\Forms\LiteralField;
use SilverStripe\Forms\RequiredFields;
use SilverStripe\Forms\Schema\FormSchema;
use SilverStripe\Security\Permission;
use SilverStripe\Security\PermissionFailureException;
use SilverStripe\UserForms\Control\UserDefinedFormAdmin;
use SilverStripe\UserForms\Model\EditableFormField;
use SilverStripe\UserForms\Model\EditableFormField\EditableFileField;
use SilverStripe\Versioned\Versioned;

class FormAdmin extends UserDefinedFormAdmin
{
    private static $allowed_actions = [
        'confirmfolderformschema',
        'ConfirmFolderForm',
        'confirmfolder',
    ];

    /**
     * @inheritdoc
     */
    public function confirmfolderformschema(HTTPRequest $request)
    {
        // Retrieve editable form field by its ID
        $id = $request->requestVar('ID');

        if (!$id) {
            throw new HTTPResponse_Exception(_t(__CLASS__.'.INVALID_REQUEST', 'This request was invalid.'), 400);
        }
        $editableFormField = EditableFormField::get()->byID($id);
        if (!$editableFormField) {
            $editableFormField = Versioned::get_by_stage(EditableFormField::class, Versioned::DRAFT)
                ->byID($id);
        }
        if (!$editableFormField) {
            throw new HTTPResponse_Exception(_t(__CLASS__.'.INVALID_REQUEST', 'This request was invalid.'), 400);
        }

        // Retrieve the editable form fields Parent
        $userForm = $editableFormField->Parent();
        if (!$userForm) {
            throw new HTTPResponse_Exception(_t(__CLASS__.'.INVALID_REQUEST', 'This request was invalid.'), 400);
        }
        if (!$userForm->canEdit()) {
            throw new PermissionFailureException();
        }

        // Convert the EditableFormField to an EditableFileField if it's not already one.
        if (!$editableFormField instanceof EditableFileField) {
            $editableFormField = $editableFormField->newClassInstance(EditableFileField::class);
            $editableFormField->write();
        }

        $form = $this->buildConfirmFolderForm();

        $loadData = [
            'ID' => $id,
            'UploadFolder' => $editableFormField->UploadFolder,
        ];
        $form->loadDataFrom($loadData);

        // create the schema response
        $parts = $this->getRequest()->getHeader(static::SCHEMA_HEADER);
        // $parts = 'auto,schema,state,errors';
        $schemaID = $this->getRequest()->getURL();
        $data = FormSchema::singleton()->getMultipartSchema($parts, $schemaID, $form);

        // return the schema response
        $response = HTTPResponse::create(json_encode($data));
        $response->addHeader('Content-Type', 'application/json');
        return $response;
    }

    /**
     * Return the ConfirmFolderForm. This is only exposed so the treeview has somewhere to direct it's AJAX calss.
     * @return Form
     */
    public function ConfirmFolderForm(): Form
    {
        return $this->buildConfirmFolderForm();
    }

    /**
     *
     *
     * @inheritdoc
     */
    protected function buildConfirmFolderForm()
    {
        $fields = FieldList::create(
            LiteralField::create(
                'LabelA',
                _t(__CLASS__.'.CONFIRM_FOLDER_LABEL_A', 'Files that your users upload should be stored carefully to reduce the risk of exposing sensitive data. Ensure the folder you select can only be viewed by appropriate parties.')
            )->addExtraClass(' mb-2'),
            LiteralField::create(
                'LabelB',
                _t(__CLASS__.'.CONFIRM_FOLDER_LABEL_B', 'The folder selected will become the default for this form. This can be changed on an individual basis in the <i>File upload field.</i>')
            )->addExtraClass(' mb-3'),
            UserFormsEditableFileField::getUploadFolderField()
                ->setSchemaData([
                    'attributes' => [
                        'placeholder' => static::getDefaultSubmissionFolder(),
                    ]
            ]),
            HiddenField::create('ID')
        );

        $actions = FieldList::create(
            FormAction::create('confirmfolder', _t(__CLASS__.'.FORM_ACTION_CONFIRM', 'Save and continue'))
                ->setUseButtonTag(false)
                ->addExtraClass('btn btn-primary'),
            FormAction::create("cancel", _t(__CLASS__ . '.CANCEL', "Cancel"))
                ->addExtraClass('btn btn-secondary')
                ->setUseButtonTag(true)
        );

        return Form::create($this, 'ConfirmFolderForm', $fields, $actions, RequiredFields::create('ID'))
            ->setFormAction($this->Link('ConfirmFolderForm'))
            ->addExtraClass('form--no-dividers');
    }

    /**
     * Sets the selected folder as the upload folder for an EditableFileField
     * @param array $data
     * @param Form $form
     * @param HTTPRequest $request
     * @return HTTPResponse
     * @throws ValidationException
     */
    public function confirmfolder(array $data, Form $form, HTTPRequest $request)
    {
        if (!Permission::checkMember(null, "CMS_ACCESS_AssetAdmin")) {
            throw new PermissionFailureException();
        }

        // retrieve the EditableFileField
        $id = $data['ID'];
        if (!$id) {
            throw new HTTPResponse_Exception(_t(__CLASS__.'.INVALID_REQUEST', 'This request was invalid.'), 400);
        }
        /** @var EditableFileField $editableFileField */
        $editableFormField = EditableFormField::get()->byID($id);
        if (!$editableFormField) {
            $editableFormField = Versioned::get_by_stage(EditableFormField::class, Versioned::DRAFT)->byID($id);
        }
        if (!$editableFormField) {
            throw new HTTPResponse_Exception(_t(__CLASS__.'.INVALID_REQUEST', 'This request was invalid.'), 400);
        }
        // change the class if it is incorrect
        if (!$editableFormField instanceof EditableFileField) {
            $editableFormField = $editableFormField->newClassInstance(EditableFileField::class);
        }
        if (!$editableFormField) {
            throw new HTTPResponse_Exception(_t(__CLASS__.'.INVALID_REQUEST', 'This request was invalid.'), 400);
        }
        $editableFileField = $editableFormField;
        if (array_key_exists('UploadFolder', $data) && $data['UploadFolder']) {
            $editableFileField->UploadFolder = $data['UploadFolder'];
        } else {
            $editableFileField->UploadFolder = static::getDefaultSubmissionFolder();
        }

        $editableFileField->write();

        // respond
        return HTTPResponse::create(json_encode([]))->addHeader('Content-Type', 'application/json');
    }

    public static function getDefaultSubmissionFolder()
    {
        return static::config()->get('form_submissions_folder') . '/';
    }
}
