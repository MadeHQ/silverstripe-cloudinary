<?php


class CloudinaryAdmin extends LeftAndMain implements PermissionProvider {

	private static $url_segment = 'cloudinary';

	private static $url_rule = '/$Action/$ID';

	private static $menu_title = 'Cloudinary';

	private static $menu_icon = 'cloudinary/images/logo.png';

	private static $allowed_actions = array(
		'folders',
		'getimagelist',
		'getimagedata'
	);

	public function init()
	{
		parent::init();
		Requirements::javascript('cloudinary/javascript/CloudinaryAdmin.js');
	}


	public function getUniquePathId($path)
	{
		$ids = array();
		foreach(explode('/', $path) as $parts){
			$ids[] = substr(md5($parts), 0, 4);
		}
		return implode('_', $ids);
	}

	public function folders()
	{
		$return = array(
			'IsLeaf'		=> false,
			'Dropdown'		=> '',
			'Button'		=> ''
		);
		$parent = $this->request->getVar('parent');
		$children = $this->fetchFoldersFromAPI($parent);
		if(count($children)){
			$pathID = $this->getUniquePathId($parent);
			$previousPath = substr($parent, 0, strrpos($parent, '/'));
			if(!$previousPath){
				$previousPath = 'root';
			}
			$previousPathID = $this->getUniquePathId($previousPath);

			$dropdown = DropdownField::create('Folders_' . $previousPathID, '&nbsp;')
				->setSource($children)
				->addExtraClass('_js-folder-select')
				->setEmptyString('')
			;
			$return['Dropdown'] = $dropdown->FieldHolder()->forTemplate();

		}
		else {
			$return['IsLeaf'] = true;
		}
		$return['Button'] = '<a href="#"
				data-cloud_name="' . CloudinaryUtils::cloud_name() . '"
				data-upload_preset="' . CloudinaryUtils::upload_preset() . '"
				class="_js-start_upload ss-ui-action-constructive ss-ui-button ui-button ui-widget ui-state-default ui-corner-all new new-link ui-button-text-icon-primary"
				>Upload</a>';

		return Convert::array2json($return);
	}




	public function fetchFoldersFromAPI($parent = null)
	{
		$api = CloudinaryUtils::api();
		$folders = array();
		if($parent){
			$response = $api->subfolders(rawurlencode($parent));
		}
		else{
			$response = $api->root_folders();
		}
		$array = $response->getArrayCopy();

		foreach($array['folders'] as $folder){
			$folders[$folder['path']] = $folder['name'];
		}
		return $folders;

	}


	public function getRootFolderList()
	{
		return $this->fetchFoldersFromAPI();
	}


	public function getEditForm($id = null, $fields = null) {
		$form = parent::getEditForm($id, $fields);
		$fields = $form->Fields();

		if(!$fields->hasTabset()) {
			$tabs = new TabSet('Root',
				$tabList = new Tab('Upload', 'Upload Files')
			);
			$fields->push($tabs);
		}


		$fields->addFieldsToTab('Root.Upload', array(
			HeaderField::create('UploadImages', 'Upload images to cloudinary')->setHeadingLevel(2),
			LiteralField::create('ChooseAFolder', '<p>Choose a folder to upload to</p>'),
			DropdownField::create('RootFolders', 'Folder')->setSource($this->fetchFoldersFromAPI())
				->setEmptyString('')
				->addExtraClass('_js-root-folder _js-folder-select'),
			LiteralField::create('ChildFolders', '<div id="Child_Folders"></div>'),
			HiddenField::create('UploadPath', 'UploadPath'),
			LiteralField::create('UploadButton', '<a href="#"
				data-cloud_name="' . CloudinaryUtils::cloud_name() . '"
				data-upload_preset="' . CloudinaryUtils::upload_preset() . '"
				class="_js-start_upload ss-ui-action-constructive ss-ui-button ui-button ui-widget ui-state-default ui-corner-all new new-link ui-button-text-icon-primary"
				>Upload</a>'),
			LiteralField::create('ManageInCloudinary', '<p>or manage your images in <a href="https://cloudinary.com/console/" target="_blank">Cloudinary</a></p>')
		));


		$form->setTemplate($this->getTemplatesWithSuffix('_EditForm'));
		$form->addExtraClass('cms-edit-form center ' . $this->BaseCSSClasses());
		$form->setAttribute('data-pjax-fragment', 'CurrentForm');
		$this->extend('updateEditForm', $form);
		return $form;
	}


	public function getimagelist()
	{
		$api = CloudinaryUtils::api();
		$respond = $api->resources(array(
			'max_results'		=> 100,
			'direction'			=> -1
		));
		$images = $respond->getArrayCopy();
		return Convert::array2json($images['resources']);
	}


	public function getimagedata()
	{
		$url = $_GET['imageurl'];


		if (CloudinaryUtils::is_url($url)) {
			$publicID = CloudinaryUtils::public_id($url);
		}
		else {
			$publicID = $url;
		}


		$caption = "";
		$credit = "";

		if($publicID){
			$api = CloudinaryUtils::api();
			$resource = null;
			try {
				$resource = $api->resource($publicID, array('resource_type', 'auto'))->getArrayCopy();
			} catch (Exception $e) {}

			if($resource) {
				if (isset($resource['context']) && isset($resource['context']['custom']) && isset($resource['context']['custom']['caption'])) {
					$caption = 	$resource['context']['custom']['caption'];
				}
				if (isset($resource['context']) && isset($resource['context']['custom']) && isset($resource['context']['custom']['credit'])) {
					$credit = 	$resource['context']['custom']['credit'];
				}
			}
		}

		return Convert::array2json(array(
			'Caption'		=> $caption,
			'Credit'		=> $credit
		));

	}


}
