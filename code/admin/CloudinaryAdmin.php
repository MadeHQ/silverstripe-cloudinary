<?php


class CloudinaryAdmin extends LeftAndMain implements PermissionProvider {

    private static $url_segment = 'cloudinary';

    private static $url_rule = '/$Action/$ID';

    private static $menu_title = 'Cloudinary';

    private static $menu_icon = 'cloudinary/images/logo.png';

    private static $allowed_actions = array(
        'folders',
        'getimagelist',
        'getfilelist',
        'getaudiolist',
        'getvideolist',
        'getfiledata',
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
            'IsLeaf'        => false,
            'Dropdown'        => '',
            'Button'        => ''
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
                ->setEmptyString('Upload to this folder')
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

        return $this->getJsonResponseFromData($return);
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
                ->setEmptyString('Upload to this folder')
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

    public function getaudiolist(SS_HTTPRequest $request)
    {
        $response = $this->getCloudinaryResources('video', $request->getVar('folder'), $request->getVar('next_cursor'));
        $response['resources'] = array_filter(
            $response['resources'],
            function ($resource) {
                return array_key_exists('is_audio', $resource) && $resource['is_audio'];
            }
        );
        $response['resources'] = array_values($response['resources']);
        return $this->getJsonResponseFromData($response);
    }

    public function getvideolist(SS_HTTPRequest $request)
    {
        $response = $this->getCloudinaryResources('video', $request->getVar('folder'), $request->getVar('next_cursor'));
        $response['resources'] = array_filter(
            $response['resources'],
            function ($resource) {
                return !array_key_exists('is_audio', $resource) || !$resource['is_audio'];
            }
        );
        $response['resources'] = array_values($response['resources']);
        foreach ($response['resources'] as &$resource) {
            $source = CloudinaryUtils::public_id($resource['url']);
            // Note: Need to pass in a new Array of options each time otherwise the `resource_type` gets set to "image"
            $gifPreviewParams = array(
                'video_sampling' => 10,
                'delay' => 100,
                'width' => 150,
                'resource_type' => 'video'
            );
            $resource['thumbnail_url'] = Cloudinary::cloudinary_url($resource['public_id'] . '.gif', $gifPreviewParams);
        }
        return $this->getJsonResponseFromData($response);
    }

    public function getimagelist(SS_HTTPRequest $request)
    {
        $api = CloudinaryUtils::api();
        $images = $this->getCloudinaryResources('image', $request->getVar('folder'), $request->getVar('next_cursor'));
        return $this->getJsonResponseFromData($images);
    }

    public function getfilelist(SS_HTTPRequest $request)
    {
        $api = CloudinaryUtils::api();
        $files = $this->getCloudinaryResources('raw', $request->getVar('folder'), $request->getVar('next_cursor'));
        return $this->getJsonResponseFromData($files);
    }

    public function getfiledata()
    {
        $url = $_GET['fileurl'];
        $publicID = CloudinaryUtils::public_id($url);

        $isRaw = false;
        $fileSize = 0;
        $error = '';
        $format = '';
        $metaData = array();

        if($publicID){
            $api = CloudinaryUtils::api();
            $resource = null;
            try {
                $resourceType = CloudinaryUtils::resource_type($url);
                $isRaw = $resourceType == 'raw';
                $publicID .= $isRaw ? '.'.CloudinaryUtils::file_format($url) : '';
                $resource = $api->resource($publicID, array(
                    'resource_type' => $resourceType,
                    'exif' => true,
                    'image_metadata' => true,
                ))->getArrayCopy();

                $fileSize = isset($resource['bytes']) ? $resource['bytes'] : $fileSize;
            } catch (Exception $e) {
                $error = $e->getMessage();
            }
            if($resource) {
                $format = @$resource['format'];
                foreach ($this->getMetaDataFieldsToReturn() as $key => $lookupKeys) {
                    if (!is_array($lookupKeys)) {
                        $lookupKeys = array($lookupKeys);
                    }
                    $metaData[$key] = '';
                    foreach ($lookupKeys as $lookupKey) {
                        if ($value = $this->getResourceData($resource, $lookupKey)) {
                            $metaData[$key] = $value;
                            break;
                        }
                    }
                }
            }
        } else {
            $error = "Please enter a valid cloudinary source url.";
        }

        $response = $this->getJsonResponseFromData(array(
            'IsRaw' => $isRaw,
            'FileSize' => $fileSize,
            'Format' => $format,
            'Error' => $error,
            'Meta' => $metaData,
        ));
        $this->addCacheHeadersToFileDataResponse($response);
        return $response;
    }

    protected function addCacheHeadersToFileDataResponse(SS_HTTPResponse $response)
    {
        $cacheLength = Config::inst()->get(get_class($this), 'file_data_cache_length');
        if ($cacheLength) {
            $response->addHeader('Cache-Control', sprintf('max-age=%s, public', $cacheLength));
        }
    }

    /**
     * Recursivly goes through $resource based on '.' separated array levels
     */
    private function getResourceData($resource, $field)
    {
        $levels = explode('.', $field);
        if (count($levels) === 1) {
            return array_key_exists($levels[0], $resource) ? $resource[$levels[0]] : null;
        }
        $level = array_shift($levels);
        if (!array_key_exists($level, $resource)) {
            return null;
        }
        return $this->getResourceData($resource[$level], implode('.', $levels));
    }

    private function getMetaDataFieldsToReturn()
    {
        return Config::inst()->get(get_class($this), 'metaDataFieldRelations');
    }

    public function canView($member = null) {
        $bCanView = parent::canView($member);

        if(Permission::checkMember($member, "CMS_ACCESS_Cloudinary")) return true;

        return $bCanView;
    }

    public function providePermissions() {
        $perms = array(
            "CMS_ACCESS_Cloudinary" => array(
                'name' => _t('CMSMain.ACCESSCLOUDINARY', 'Access Cloudinary section'),
                'category' => _t('Permission.CMS_ACCESS_CATEGORY', 'CMS Access'),
                'help' => _t('CMSMain.ACCESSALLINTERFACESHELP', 'Overrules more specific access settings.'),
                'sort' => -100
            )
        );
        return $perms;
    }

    /**
     * Generates a SS_HTTPResponse Object with JSON Header
     * @param Array $data Data to be converted to JSON
     * @return SS_HTTPResponse
     */
    private function getJsonResponseFromData($data)
    {
        $response = new SS_HTTPResponse();
        $response->setBody(Convert::array2json($data));
        $response->addHeader('Content-Type', 'text/json;charset=UTF-8');
        return $response;
    }

    /**
     * @param String $type Accepted values are (image|video|raw)
     * @param String $nextCursor Cloudinary's pagination
     * @return Array
     */
    private function getCloudinaryResources($type = 'image', $folder = null, $nextCursor = null)
    {
        $api = CloudinaryUtils::api();
//        $respond = $api->resources(array(
//            'max_results' => $this->getMaxResults(),
//            'direction' => -1,
//            'resource_type' => $type,
//            'type' => 'upload',
//            'next_cursor' => $nextCursor
//        ));

        $search_options = array(
            'max_results' => $this->getMaxResults(),
            'next_cursor' => $nextCursor,
            'sort_by' => array(array( 'uploaded_at' => 'desc' )),
            "expression" => array(
                "resource_type = " . $type,
            ),
        );

        if ($folder === null) {
            // This is apparently how you're supposed to get things in the root dir
            $search_options['expression'][] = 'folder:""';
        } else {
            $search_options['expression'][] = 'folder = ' . $folder;
        }

        $respond = $this->api_search_resources($api, $search_options);
        $data = $respond->getArrayCopy();

        // Mangle folders into an array for the json
        $folder_data = $this->fetchFoldersFromAPI($folder);
        $folder_array = array();

        foreach ($folder_data as $value => $name) {
            $folder_array[] = array( "folder" => $value, "name" => $name );
        }

        $data['folders'] = $folder_array;
        return $data;
    }

    /**
     * @return Int
     */
    private function getMaxResults()
    {
        return Config::inst()->get(get_class($this), 'max_results');
    }

    // HACK: TERRIBLE HACK, this function SHOULD be in the cloudinary api.php
    // but it's not implemented so i'm doing what it does here instead.
    // This is bad, but i can't think of a nicer way of getting it in there
    function api_search_resources($api, $options=array()) {
        $uri = array("resources", "search");

        $expression = \Cloudinary::option_get($options, "expression");
        if (is_array($expression)) {
            $options['expression'] = join(" AND ", $expression);
        }
        return $api->call_api("get", $uri, $options, $options);
    }
}
