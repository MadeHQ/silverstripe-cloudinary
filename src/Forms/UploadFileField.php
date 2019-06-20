<?php

namespace MadeHQ\Cloudinary\Forms;

use MadeHQ\Cloudinary\Model\FileLink;

use SilverStripe\AssetAdmin\Controller\AssetAdmin;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Assets\Upload_Validator;

use SilverStripe\Core\Injector\Injector;

use SilverStripe\ORM\SS_List;
use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\DataObjectInterface;

use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\FileUploadReceiver;
use SilverStripe\Forms\FormField;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;

use SilverStripe\View\Requirements;

use SilverStripe\Control\{
    HTTPRequest,
    HTTPResponse
};

class UploadFileField extends FormField
{
    use FileUploadReceiver;

    private $fields;

    private $uploadField;

    /**
     * @config
     * @var array
     */
    private static $allowed_actions = [
        'upload'
    ];

    /**
     * {@inheritdoc}
     */
    public function __construct($name, $title = null, $value = null)
    {
        $this->constructFileUploadReceiver();

        // When creating new files, rename on conflict
        $this->getUpload()->setReplaceFile(false);

        $this->uploadField = new CustomUploadField(sprintf('%s[File]', $name), 'File');

        $this->fields = [
            $this->uploadField->setAllowedMaxFileNumber(1),
            TextField::create(sprintf('%s[Title]', $name), 'Title'),
            TextareaField::create(sprintf('%s[Description]', $name), 'Description'),
        ];

        parent::__construct($name, $title, $value);

        $this->setTemplate('UploadFileField');

        $this->extend('init');
    }

    /**
     * Inserts the given field to the list of fields to show in the CMS
     *
     * @param FormField $field
     * @return UploadFileField
     */
    public function addField(FormField $field)
    {
        array_push($this->fields, $field);
        return $this;
    }

    /**
     * Creates a single file based on a form-urlencoded upload.
     *
     * @param HTTPRequest $request
     * @return HTTPResponse
     */
    public function upload(HTTPRequest $request)
    {
        if ($this->isDisabled() || $this->isReadonly()) {
            return $this->httpError(403);
        }

        // CSRF check
        $token = $this->getForm()->getSecurityToken();
        if (!$token->checkRequest($request)) {
            return $this->httpError(400);
        }

        $tmpFile = $request->postVar('Upload');
        /** @var File $file */
        $file = $this->saveTemporaryFile($tmpFile, $error);

        // Prepare result
        if ($error) {
            $result = [
                'message' => [
                    'type' => 'error',
                    'value' => $error,
                ]
            ];
            $this->getUpload()->clearErrors();
            return (new HTTPResponse(json_encode($result), 400))
                ->addHeader('Content-Type', 'application/json');
        }

        // We need an ID for getObjectFromData
        if (!$file->isInDB()) {
            $file->write();
        }

        // Return success response
        $result = [
            AssetAdmin::singleton()->getObjectFromData($file)
        ];

        // Don't discard pre-generated client side canvas thumbnail
        if ($result[0]['category'] === 'image') {
            unset($result[0]['thumbnail']);
        }
        $this->getUpload()->clearErrors();
        return (new HTTPResponse(json_encode($result)))
            ->addHeader('Content-Type', 'application/json');
    }

    /**
     * Removes the field with the given name from the list of fields
     * to show in the CMS
     *
     * @param string $name
     * @return UploadFileField
     */
    public function removeField($name)
    {
        foreach ($this->fields as $i => $field) {
            if ($field->getName() === sprintf('%s[%s]', $this->getName(), $name)) {
                array_splice($this->fields, $i, 1);
            }
        }

        return $this;
    }

    /**
     * @return FieldList
     */
    public function getFieldList()
    {
        return new FieldList($this->fields);
    }

    /**
     * @return FieldList
     */
    public function setForm($form)
    {
        foreach ($this->fields as $field) {
            $field->setForm($form);
        }

        parent::setForm($form);
    }

    /**
     * {@inheritdoc}
     */
    public function saveInto(DataObjectInterface $record)
    {
        $linkRecord = $record->{$this->getName()}();
        $fields = $this->getFieldList();
        $fileField = $fields->dataFieldByName(sprintf('%s[File]', $this->getName()));
        foreach ($fields as $field) {
            if ($field->getName() === sprintf('%s[File]', $this->getName())) {
                $linkRecord->setCastedField('FileID', $field->dataValue()['Files'][0]);
            } else {
                $linkRecord->setCastedField(preg_replace('/^.*\[(\w+)\]$/', '$1', $field->getName()), $field->dataValue());
            }
        }
        $this->extend('saveIntoBeforeWrite', $record, $linkRecord);
        $linkRecord->write(true, false, true);
        $record->{$this->getName() . 'ID'} = $linkRecord->ID;
        $this->extend('saveIntoAfterWrite', $record, $linkRecord);
    }

    /**
     * {@inheritdoc}
     */
    public function setValue($value, $record = null)
    {
        if(empty($value) && $record) {
            if (($record instanceof DataObject) && $record->hasMethod($this->getName())) {
                $data = $record->{$this->getName()}();
                if($data && $data->exists()) {
                    $fields = $this->getFieldList();
                    foreach ($fields as $field) {
                        $fieldSubName = preg_replace('/^.+\[(\w+)\]$/', '$1', $field->getName());
                        if ($fieldSubName === 'File') {
                            $field->setValue($data->File());
                        } else {
                            $field->setValue($data->$fieldSubName);
                        }
                    }
                }
            }
        } elseif (!empty($value)) {
            // Load field values from Object
            $fields = $this->getFieldList();
            foreach ($fields as $field) {
                $fieldSubName = preg_replace('/^.+\[(\w+)\]$/', '$1', $field->getName());
                if ($fieldSubName === 'File') {
                    if (is_object($value) && $value instanceof DataObject && $value->hasMethod('File')) {
                        $field->setValue($value->File());
                    } else {
                        $field->setValue($value);
                    }
                } else {
                    $field->setValue($value->$fieldSubName);
                }
            }
        }
        return parent::setValue($value, $record);
    }

    /**
     * {@inheritdoc}
     */
    public function setSubmittedValue($value, $data = NULL)
    {
        $fields = $this->getFieldList();
        if (!array_key_exists('File', $value)) {
            foreach ($fields as $field) {
                $field->setValue(false);
            }
        } else {
            foreach ($fields as $field) {
                $valueKey = preg_replace('/^.+\[(\w+)\]$$/', '$1', $field->getName());
                $field->setValue($value[$valueKey]);
            }
        }
    }

    /**
     * @return boolean
     */
    public function isComposite()
    {
        return true;
    }

    /**
     * @return Upload_Validator
     */
    public function getValidator()
    {
        return Upload_Validator::create();
    }

    /**
     * Gets the foreign class that needs to be created, or 'File' as default if there
     * is no relationship, or it cannot be determined.
     *
     * @param string $default Default value to return if no value could be calculated
     * @return string Foreign class name.
     */
    public function getRelationAutosetClass($default = File::class)
    {
        // Don't autodetermine relation if no relationship between parent record
        if (!$this->getRelationAutoSetting()) {
            return $default;
        }

        // Check record and name
        $name = $this->getName();
        $record = $this->getRecord();
        if (empty($name) || empty($record)) {
            return $default;
        } else {
            $class = $record->getRelationClass($name);
            if (is_subclass_of($class, FileLink::class)) {
                $class = Injector::inst()->create($class)->getRelationClass('File');
            }

            return empty($class) ? $default : $class;
        }
    }
}

/**
 * This is a nasty hack so that the child Upload Field ends up pointing to this field
 */
class CustomUploadField extends UploadField
{
    public function Link($action = null)
    {
        $link = parent::Link($action);
        $link = str_replace('[File]', '', $link);
        return $link;
    }
}
