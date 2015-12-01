<?php
/**
 * represents a field in a form
 *
 * @package    cloudinary
 * @author     Nivanka Fonseka <nivanka@silverstripers.com>
 * @copyright  Copyright (c) 2014, Made Media Ltd.
 */

class CloudinaryUploadField extends UploadField
{
	/**
	 * @var string
	 */
	protected $templateFileButtons = 'CloudinaryUploadField_FileButtons';

    /**
     * @var null
     */
    private $sort_column = null;

	/**
	 * @var array
	 */
	private static $allowed_actions = array(
		'upload',
		'reorder',
		'attach',
		'handleItem',
		'handleSelect',
		'fileexists'
	);

    /**
     * @param string $name
     * @param null $title
     * @param SS_List $items
     * @param null $sortColumn
     */
    public function __construct($name, $title = null, SS_List $items = null, $sortColumn = null) {
        parent::__construct($name, $title, $items);
        $this->setSortColumn($sortColumn);
        $arrExtensions = array_merge(array_filter($this->getExtensionsAllowed()), array('svg'));
        $this->getValidator()->setAllowedExtensions(
            $arrExtensions
        );
    }

    /**
     * @param array $properties
     * @return HTMLText
     */
    public function Field($properties = array()) {
        $field = parent::Field($properties);
        Requirements::css('cloudinary/css/CloudinaryUploadField.css');
        Requirements::javascript('cloudinary/javascript/CloudinaryUploadField.js');
        $this->extend('updateFieldJs');
        return $field;
    }

    /**
     * @return array|scalar
     * allowed file extensions
     */
    public function getExtensionsAllowed() {
        return Config::inst()->get('File', 'allowed_extensions');
    }

    /**
     * @return null
     */
    public function getSortColumn() {
        return $this->sort_column;
    }

    /**
     * @param $sortColumn
     * @return $this
     * set the name of the sort column
     */
    public function setSortColumn($sortColumn) {
        $this->sort_column = $sortColumn;
        return $this;
    }

	/**
	 * @param SS_HTTPRequest $request
	 * @return SS_HTTPResponse|void
	 */
	public function upload(SS_HTTPRequest $request) {
		if($this->isDisabled() || $this->isReadonly() || !$this->canUpload()) {
			return $this->httpError(403);
		}

		// Protect against CSRF on destructive action
		$token = $this->getForm()->getSecurityToken();
		if(!$token->checkRequest($request)) return $this->httpError(400);

		// Get form details
		$name = $this->getName();
		$postVars = $request->postVar($name);

		// Save the temporary file into a File object
		$uploadedFiles = $this->extractUploadedFileData($postVars);

		$return = array('error' => 'The file upload was not successful');
		$uploadedFile = reset($uploadedFiles);

		$strClass = CloudinaryFile::GetCloudinaryFileForFile($uploadedFile['name']);
		$arrOptions = array();
		if($strClass == 'CloudinaryVideo'){
			$arrOptions['resource_type'] = 'video';
		}elseif($strClass == 'CloudinaryFile'){
			$arrOptions['resource_type'] = 'raw';
			$arrOptions['format'] = File::get_file_extension($uploadedFile['name']);
		}

		$arrUploaderDetails = \Cloudinary\Uploader::upload($uploadedFile['tmp_name'], $arrOptions);
		if($arrUploaderDetails && is_array($arrUploaderDetails)){

            if($strClass == 'CloudinaryFile'){
                $arrPieces = explode('.', $arrUploaderDetails['public_id']);
                $strPublicID = isset($arrPieces[0]) ? $arrPieces[0] : '';
                $strFormat = isset($arrPieces[1]) ? $arrPieces[1] : '';
            }else{
                $strPublicID = $arrUploaderDetails['public_id'];
                $strFormat = $arrUploaderDetails['format'];
            }
			$arrData = array(
				'Title'				=> $uploadedFile['name'],
				'FileName'			=> $uploadedFile['name'],
				'PublicID'			=> $strPublicID,
				'Version'			=> $arrUploaderDetails['version'],
				'Signature'			=> $arrUploaderDetails['signature'],
				'URL'				=> $arrUploaderDetails['url'],
				'SecureURL'			=> $arrUploaderDetails['secure_url'],
				'FileType'			=> $arrUploaderDetails['resource_type'],
				'FileSize'			=> $arrUploaderDetails['bytes'],
				'Format'			=> $strFormat,
			);

			if($strClass == 'CloudinaryImage'){
				$arrData = array_merge($arrData, array(
					'Width'				=> $arrUploaderDetails['width'],
					'Height'			=> $arrUploaderDetails['height']
				));
			}
			else if($strClass == 'CloudinaryVideo'){
				$arrData = array_merge($arrData, array(
					'Width'				=> $arrUploaderDetails['width'],
					'Height'			=> $arrUploaderDetails['height'],
					'Duration'			=> $arrUploaderDetails['duration'],
					'BitRate'			=> $arrUploaderDetails['bit_rate'],
					'FrameRate'			=> $arrUploaderDetails['frame_rate'],
				));
			}

			$file = new $strClass($arrData);
			$file->write();
			$return = $this->encodeCloudinaryAttributes($file);
		}

		$response = new SS_HTTPResponse(Convert::raw2json(array($return)));
		$response->addHeader('Content-Type', 'text/plain');
		if(!empty($return['error'])) $response->setStatusCode(403);

		return $response;
	}

	/**
	 * @param SS_HTTPRequest $request
	 * @return SS_HTTPResponse|void
	 */
	public function attach(SS_HTTPRequest $request) {
		if(!$request->isPOST()) return $this->httpError(403);
		if(!$this->canAttachExisting()) return $this->httpError(403);

		// Retrieve file attributes required by front end
		$return = array();
		$files = CloudinaryFile::get()->byIDs($request->postVar('ids'));
		foreach($files as $file) {
			$return[] = $this->encodeCloudinaryAttributes($file);
		}

		$response = new SS_HTTPResponse(Convert::raw2json($return));
		$response->addHeader('Content-Type', 'application/json');
		return $response;
	}

	/**
	 * @param SS_HTTPRequest $request
	 * @return SS_HTTPResponse
	 */
	public function fileexists(SS_HTTPRequest $request) {
		$originalFile = $request->requestVar('filename');
		$existingImage = CloudinaryFile::get()->filter(array(
			'FileName'		=> $originalFile
		))->first();
		$exists = $existingImage ? true : false;
		$response = new SS_HTTPResponse(Convert::raw2json(array('exists' => $exists)));
		$response->addHeader('Content-Type', 'application/json');
		return $response;
	}

	/**
	 * @return ArrayList|SS_List
	 */
	public function getCustomisedItems() {
		$customised = new ArrayList();
        $items = $this->getItems();
        $items = $this->CanReorder() ? $items->sort($this->sort_column) : $items;
		foreach($items as $file) {
			$customised->push($this->customiseCloudinaryFile($file));
		}
		return $customised;
	}

	/**
	 * @param SS_HTTPRequest $request
	 * @return Object|UploadField_ItemHandler
	 */
	public function handleSelect(SS_HTTPRequest $request) {
		return CloudinaryUploadField_SelectHandler::create($this, $this->getFolderName());
	}

	/**
	 * @param int $itemID
	 * @return Object|UploadField_ItemHandler
	 */
	public function getItemHandler($itemID) {
		return CloudinaryUploadField_ItemHandler::create($this, $itemID);
	}

    /**
     * @return bool
     * can be reordered if number of items more than 1 and sort column provided
     */
    public function CanReorder() {
        return $this->getItems()->Count() > 1 && $this->sort_column !== null;
    }

    /**
     * @return String
     * provide action link which process the reorder fucntion
     */
    public function ReorderURL() {
        return $this->Link('reorder');
    }

    /**
     * reorder field items if field is fed with a RelationList (has_many or many_many)
     */
    public function reorder() {
        $record = $this->getRecord();
        if(($record instanceof DataObject)
            && $record->hasMethod($this->getName())
            && $record->{$this->getName()}() instanceof RelationList
        ) {

            $relationList = $record->{$this->getName()}();
            $arrItems = reset($_POST);
            $sortColumn = $this->sort_column;
            $bManyMany = $relationList instanceof ManyManyList;

            //Start transaction if supported
            if(DB::getConn()->supportsTransactions()) {
                DB::getConn()->transactionStart();
            }

            if($bManyMany) {
                list($parentClass, $componentClass, $parentField, $componentField, $table) = $record->many_many($this->getName());
            } else {
                $modelClass = $record->has_many($this->getName());
                list($table, $baseDataClass) = $this->getRelationTables($modelClass, $sortColumn);
            }


            foreach($arrItems as $iID => $sort) {
                if($bManyMany) {
                    DB::query('
                        UPDATE "' . $table . '"
                            SET "' . $sortColumn.'" = ' . $sort . '
                            WHERE "' . $componentField . '" = ' . $iID . ' AND "' . $parentField . '" = ' . $record->ID
                    );
                } else {
                    DB::query('
                        UPDATE ' . $table . '
                            SET ' . $sortColumn . ' = ' . $sort . '
                            WHERE ID = '. $iID
                    );

                    DB::query('
                        UPDATE "' . $baseDataClass . '"
                            SET "LastEdited" = \'' . date('Y-m-d H:i:s') . '\'' . '
                            WHERE "ID" = '. $iID
                    );
                }

                if($alItems = $this->items){
                    if($item = $alItems->find('ID', $iID)){
                        $item->{$sortColumn} = $sort;
                    }
                }
            }

            //End transaction if supported
            if(DB::getConn()->supportsTransactions()) {
                DB::getConn()->transactionEnd();
            }
        }
    }

	/**
	 * @param CloudinaryFile $file
	 * @return array
	 */
	public function encodeCloudinaryAttributes(CloudinaryFile $file) {
		// Collect all output data.
		$file =  $this->customiseCloudinaryFile($file);
		return array(
			'id' => $file->ID,
			'name' => $file->FileName,
			'url' => $file->URL,
			'thumbnail_url' => $file->UploadFieldThumbnailURL,
			'colorselect_url' => $file->UploadFieldImageURL,
            'edit_url' => $file->UploadFieldEditLink,
			'size' => $file->FileSize,
			'type' => $file->FileType,
			'buttons' => $file->UploadFieldFileButtons,
			'fieldname' => $this->getName()
		);
	}

    /**
     * @param string $default
     * @return string
     */
    public function getRelationAutosetClass($default = 'CloudinaryFile') {
        if(!$this->relationAutoSetting) return $default;
        return parent::getRelationAutosetClass($default);
    }


    /**
	 * @param CloudinaryFile $file
	 * @return ViewableData_Customised
	 */
	protected function customiseCloudinaryFile(CloudinaryFile $file) {
		$file = $file->customise(array(
			'UploadFieldThumbnailURL' => $this->getThumbnailURLForCloudinary($file),
			'UploadFieldImageURL' => $file->hasMethod('Thumbnail') ? $file->Thumbnail(200, 112, 90)->getSourceURL() : $file->Icon(),
			'UploadFieldEditLink' => $this->getItemHandler($file->ID)->EditLink(),
			'UploadField' => $this,
            'Sort'        => $this->sort_column && $file->hasField($this->sort_column) ? $file->{$this->sort_column} : 0
		));
		// we do this in a second customise to have the access to the previous customisations
		return $file->customise(array(
			'UploadFieldFileButtons' => (string)$file->renderWith($this->getTemplateFileButtons())
		));
	}

	/**
	 * @param CloudinaryFile $file
	 * @return bool|mixed|null
	 */
	protected function getThumbnailURLForCloudinary(CloudinaryFile $file) {
		$width = $this->getPreviewMaxWidth();
		$height = $this->getPreviewMaxHeight();
		if ($file->hasMethod('Thumbnail')) {
			return $file->Thumbnail($width, $height, 90)->getSourceURL();
		} else {
			return $file->Icon();
		}
	}

    private function getRelationTables($modelClass, $sortColumn){
        $table = false;
        $db = Config::inst()->get($modelClass, "db", CONFIG::UNINHERITED);
        if(!empty($db) && array_key_exists($modelClass, $db)) {
            $table = $modelClass;
        }else {
            $classes = ClassInfo::ancestry($modelClass, true);
            foreach($classes as $class) {
                $db = Config::inst()->get($class, "db", CONFIG::UNINHERITED);
                if(!empty($db) && array_key_exists($sortColumn, $db)) {
                    $table = $class;
                    break;
                }
            }
        }

        if($table===false) {
            user_error('Sort column '.$sortColumn.' could not be found in '.$modelClass.'\'s ancestry', E_USER_ERROR);
            exit;
        }

        $baseDataClass=ClassInfo::baseDataClass($modelClass);
        return array($table, $baseDataClass);
    }

}

class CloudinaryUploadField_SelectHandler extends UploadField_SelectHandler {

	/**
	 * @var array
	 */
	private static $url_handlers = array(
		'$Action!' => '$Action',
		'' => 'index',
	);

	/**
	 * @var array
	 */
	private static $allowed_actions = array(
		'Form'
	);

	/**
	 * @return HTMLText
	 */
	public function index() {
		return parent::index();
	}

	/**
	 * @param $folderID
	 * @return CompositeField|FormField
	 */
	protected function getListField($folderID) {
		// Generate the file list field.
		$config = GridFieldConfig::create();
		$config->addComponent(new GridFieldSortableHeader());
		$config->addComponent(new GridFieldFilterHeader());
		$config->addComponent(new GridFieldPaginator(20));
		$config->addComponent($colsComponent = new GridFieldDataColumns());
		$colsComponent->setDisplayFields(array(
			'StripThumbnail'	        => 'Thumbnail',
			'Title'				        => 'Title',
			'Size' 				        => singleton('CloudinaryFile')->fieldLabel('Size')
		));

		// If relation is to be autoset, we need to make sure we only list compatible objects.
		$baseClass = $this->parent->getRelationAutosetClass();

		// Create the data source for the list of files within the current directory.
		$files = DataList::create($baseClass);
        if($this->parent->hasMethod('addFilterForFiles')){
            $files = $this->parent->addFilterForFiles($files);
        }

		$fileField = new GridField('Files', false, $files, $config);
		$fileField->setAttribute('data-selectable', true);
		if($this->parent->getAllowedMaxFileNumber() !== 1) {
			$fileField->setAttribute('data-multiselect', true);
		}

		$selectComposite = new CompositeField(
			$fileField
		);

		return $selectComposite;
	}

}

class CloudinaryUploadField_ItemHandler extends UploadField_ItemHandler {

	/**
	 * @var array
	 */
	private static $url_handlers = array(
		'$Action!' => '$Action',
		'' => 'index',
	);

	/**
	 * @var array
	 */
	private static $allowed_actions = array(
		'delete',
        'EditForm',
	);

	/**
	 * @return DataObject|File
	 */
	public function getItem() {
		return CloudinaryFile::get()->byId($this->itemID);
	}

	/**
	 * @param SS_HTTPRequest $request
	 * @return SS_HTTPResponse|void
	 */
	public function delete(SS_HTTPRequest $request) {
		if($this->parent->isDisabled() || $this->parent->isReadonly()) return $this->httpError(403);

		// Protect against CSRF on destructive action
		$token = $this->parent->getForm()->getSecurityToken();
		if(!$token->checkRequest($request)) return $this->httpError(400);

		// Check item permissions
		$item = $this->getItem();
		if(!$item) return $this->httpError(404);
		if(!$item->canDelete()) return $this->httpError(403);

		$item->delete();
	}

    /**
     * @return Form
     */
    public function EditForm() {
        $form = parent::EditForm();
		$form->removeExtraClass('small');
        return $form;
    }

}