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
	 * @var array
	 */
	private static $allowed_actions = array(
		'upload',
		'attach',
		'handleItem',
		'handleSelect',
		'fileexists'
	);



	/**
	 * @param SS_HTTPRequest $request
	 * @return SS_HTTPResponse|void
	 */
	public function upload(SS_HTTPRequest $request)
	{
		if($this->isDisabled() || $this->isReadonly() || !$this->canUpload()) {
			return $this->httpError(403);
		}

		require_once CLOUDINARY_BASE . '/thirdparty/Cloudinary/Cloudinary.php';
		require_once CLOUDINARY_BASE . '/thirdparty/Cloudinary/Uploader.php';
		require_once CLOUDINARY_BASE . '/thirdparty/Cloudinary/Api.php';

		// Protect against CSRF on destructive action
		$token = $this->getForm()->getSecurityToken();
		if(!$token->checkRequest($request)) return $this->httpError(400);

		// Get form details
		$name = $this->getName();
		$postVars = $request->postVar($name);

		// Save the temporary file into a File object
		$uploadedFiles = $this->extractUploadedFileData($postVars);

		\Cloudinary::config(array(
			"cloud_name" 	=> SiteConfig::current_site_config()->CloudinaryCloudName,
			"api_key" 		=> SiteConfig::current_site_config()->CloudinaryAPIKey,
			"api_secret" 	=> SiteConfig::current_site_config()->CloudinaryAPISecret
		));

		$return = array('error' => 'The file upload was not successful');
		$uploadedFile = reset($uploadedFiles);

		$strClass = CloudinaryFile::GetCloudinaryFileForFile($uploadedFile['name']);
		$arrOptions = array();
		if($strClass == 'CloudinaryVideo'){
			$arrOptions['resource_type'] = 'video';
		}

		$arrUploaderDetails = \Cloudinary\Uploader::upload($uploadedFile['tmp_name'], $arrOptions);
		if($arrUploaderDetails && is_array($arrUploaderDetails)){

			$arrData = array(
				'Title'				=> $uploadedFile['name'],
				'FileName'			=> $uploadedFile['name'],
				'PublicID'			=> $arrUploaderDetails['public_id'],
				'Version'			=> $arrUploaderDetails['version'],
				'Signature'			=> $arrUploaderDetails['signature'],
				'URL'				=> $arrUploaderDetails['url'],
				'SecureURL'			=> $arrUploaderDetails['secure_url'],
				'FileType'			=> $arrUploaderDetails['resource_type'],
				'FileSize'			=> $arrUploaderDetails['bytes'],
				'Format'			=> $arrUploaderDetails['format'],
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
	public function attach(SS_HTTPRequest $request)
	{
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
	public function fileexists(SS_HTTPRequest $request)
	{
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
		foreach($this->getItems() as $file) {
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
	 * @param CloudinaryFile $file
	 * @return array
	 */
	protected function encodeCloudinaryAttributes(CloudinaryFile $file)
	{
		// Collect all output data.
		$file =  $this->customiseCloudinaryFile($file);
		return array(
			'id' => $file->ID,
			'name' => $file->FileName,
			'url' => $file->URL,
			'thumbnail_url' => $file->UploadFieldThumbnailURL,
			'size' => $file->AbsoluteSize(),
			'type' => $file->FileType,
			'buttons' => $file->UploadFieldFileButtons,
			'fieldname' => $this->getName()
		);
	}

	/**
	 * @param CloudinaryFile $file
	 * @return ViewableData_Customised
	 */
	protected function customiseCloudinaryFile(CloudinaryFile $file) {
		$file = $file->customise(array(
			'UploadFieldThumbnailURL' => $this->getThumbnailURLForCloudinary($file),
			'UploadFieldDeleteLink' => $this->getItemHandler($file->ID)->DeleteLink(),
			'UploadField' => $this
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
		if ($file->hasMethod('getThumbnail')) {
			return $file->getThumbnail($width, $height)->getURL();
		} else {
			return $file->Icon();
		}
		return false;
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
	public function index()
	{
		return parent::index();
	}

	/**
	 * @param $folderID
	 * @return CompositeField|FormField
	 */
	protected function getListField($folderID)
	{
		// Generate the file list field.
		$config = GridFieldConfig::create();
		$config->addComponent(new GridFieldSortableHeader());
		$config->addComponent(new GridFieldFilterHeader());
		$config->addComponent($colsComponent = new GridFieldDataColumns());
		$colsComponent->setDisplayFields(array(
			'FileName' => singleton('File')->fieldLabel('FileName'),
			'Size' => singleton('File')->fieldLabel('Size')
		));

		// If relation is to be autoset, we need to make sure we only list compatible objects.
		$baseClass = $this->parent->getRelationAutosetClass();

		// Create the data source for the list of files within the current directory.
		$files = DataList::create($baseClass);

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
		'delete'
	);

	/**
	 * @return DataObject|File
	 */
	public function getItem()
	{
		return CloudinaryFile::get()->byId($this->itemID);
	}

	/**
	 * @param SS_HTTPRequest $request
	 * @return SS_HTTPResponse|void
	 */
	public function delete(SS_HTTPRequest $request)
	{
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

}