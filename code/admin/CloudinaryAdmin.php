<?php
/**
 * Created by Nivanka Fonseka (nivanka@silverstripers.com).
 * User: nivankafonseka
 * Date: 7/22/15
 * Time: 4:03 PM
 * To change this template use File | Settings | File Templates.
 */

class CloudinaryAdmin extends LeftAndMain implements PermissionProvider {

	private static $url_segment = 'cloudinary';

	private static $url_rule = '/$Action/$ID';

	private static $menu_title = 'Cloudinary';

	private static $menu_icon = 'cloudinary/images/logo.png';

	/**
	 * Amount of results showing on a single page.
	 *
	 * @config
	 * @var int
	 */
	private static $page_length = 50;

	/**
	 * @config
	 * @see Upload->allowedMaxFileSize
	 * @var int
	 */
	private static $allowed_max_file_size;

	private static $allowed_actions = array(
		'delete',
		'AddForm',
		'DeleteItemsForm',
		'SearchForm',
		'removefile',
		'savefile',
		'filter',
	);


	public function getList() {
		$context = $this->getSearchContext();
		$params = $this->request->requestVar('q');
		$list = $context->getResults($params);

		if($this->request->requestVar('ID') === null && ($this->request->param('ID') == 'field')) {
			return $list;
		}

		if(!empty($params['Name'])) {
			$list = $list->filterAny(array(
				'Name:PartialMatch' => $params['Name'],
				'Title:PartialMatch' => $params['Name']
			));
		}


		if(!empty($params['AssetCategory'])) {
			switch ($params['AssetCategory']){
				case 'file':
					$list = $list->filter('ClassName', 'CloudinaryFile');
					break;
				case 'image':
					$list = $list->filter('ClassName', 'CloudinaryImage');
					break;
				case 'video':
					$list = $list->filter('ClassName', 'CloudinaryVideo');
					break;
				case 'youtube':
					$list = $list->filter('ClassName', 'YoutubeVideo');
					break;
				case 'vimeo':
					$list = $list->filter('ClassName', 'VimeoVideo');
					break;

			}
		}



		// Date filter
		if(!empty($params['CreatedFrom'])) {
			$fromDate = new DateField(null, null, $params['CreatedFrom']);
			$list = $list->filter("Created:GreaterThanOrEqual", $fromDate->dataValue().' 00:00:00');
		}
		if(!empty($params['CreatedTo'])) {
			$toDate = new DateField(null, null, $params['CreatedTo']);
			$list = $list->filter("Created:LessThanOrEqual", $toDate->dataValue().' 23:59:59');
		}


		return $list;
	}

	public function getEditForm($id = null, $fields = null) {
		$form = parent::getEditForm($id, $fields);
		$fields = $form->Fields();
		$title = _t('AssetAdmin.FILES', 'Files');

		// File listing
		$gridFieldConfig = GridFieldConfig::create()->addComponents(
			new GridFieldToolbarHeader(),
			new GridFieldSortableHeader(),
			new GridFieldFilterHeader(),
			new GridFieldDataColumns(),
			new GridFieldPaginator(self::config()->page_length),
			new GridFieldEditButton(),
			new GridFieldDeleteAction(),
			new GridFieldDetailForm()
		);

		$gridField = GridField::create('CloudinaryFile', $title, $this->getList(), $gridFieldConfig);
		$columns = $gridField->getConfig()->getComponentByType('GridFieldDataColumns');
		$columns->setDisplayFields(array(
			'StripThumbnail' 	    => '',
			'NameForSummaryField'   => _t('File.Name'),
			'Created' 			    => _t('AssetAdmin.CREATED', 'Date'),
			'getSize' 			    => _t('AssetAdmin.SIZE', 'Size'),
		));
		$columns->setFieldCasting(array(
			'Created' => 'Date->Nice'
		));
		$gridField->setAttribute(
			'data-url-folder-template',
			Controller::join_links($this->Link('show'), '%s')
		);

		if(!$fields->hasTabset()) {
			$tabs = new TabSet('Root',
				$tabList = new Tab('ListView', _t('AssetAdmin.ListView', 'List View'))
			);
			$tabList->addExtraClass("content-listview cms-tabset-icon list");
			$fields->push($tabs);
		}

		$uploadBtn = new LiteralField(
			'UploadButton',
			sprintf(
				'<a class="ss-ui-button ss-ui-action-constructive cms-panel-link" data-pjax-target="Content" data-icon="drive-upload" href="%s">%s</a>',
				Controller::join_links(singleton('CloudinaryFileAddController')->Link()),
				_t('Folder.UploadFilesButton', 'Upload')
			)
		);

		$actionButtonsComposite = CompositeField::create()->addExtraClass('cms-actions-row');
		$actionButtonsComposite->push($uploadBtn);

		$fields->addFieldsToTab('Root.ListView', array(
			$actionsComposite = CompositeField::create(
				$actionButtonsComposite
			)->addExtraClass('cms-content-toolbar field'),
			$gridField
		));

		$fields->setForm($form);
		$form->setTemplate($this->getTemplatesWithSuffix('_EditForm'));
		$form->addExtraClass('cms-edit-form center ' . $this->BaseCSSClasses());
		$form->setAttribute('data-pjax-fragment', 'CurrentForm');
		$this->extend('updateEditForm', $form);

		return $form;
	}


	/**
	 * @return mixed
	 * Returns a search context for the file objects
	 */
	public function getSearchContext() {
		$context = singleton('CloudinaryFile')->getDefaultSearchContext();

		foreach($context->getFields() as $field) $field->setName(sprintf('q[%s]', $field->getName()));
		foreach($context->getFilters() as $filter) $filter->setFullName(sprintf('q[%s]', $filter->getFullName()));

		$context->addField(
			new HeaderField('q[Date]', _t('CMSSearch.FILTERDATEHEADING', 'Date'), 4)
		);
		$context->addField(
			DateField::create(
				'q[CreatedFrom]',
				_t('CMSSearch.FILTERDATEFROM', 'From')
			)->setConfig('showcalendar', true)
		);
		$context->addField(
			DateField::create(
				'q[CreatedTo]',
				_t('CMSSearch.FILTERDATETO', 'To')
			)->setConfig('showcalendar', true)
		);
		$appCategories = array(
			'file' 		=> 'Files',
			'image' 	=> 'Images',
			'video' 	=> 'Cloudinary Videos',
			'youtube' 	=> 'Youtube Videos',
			'vimeo' 	=> 'Vimeo Videos'
		);
		$context->addField(
			$typeDropdown = new DropdownField(
				'q[AssetCategory]',
				'File type',
				$appCategories
			)
		);

		$typeDropdown->setEmptyString(' ');

		return $context;
	}


	/**
	 * @return Form
	 * Search form for items
	 */
	public function SearchForm() {
		$context = $this->getSearchContext();

		$fields = $context->getSearchFields();
		$actions = new FieldList(
			FormAction::create('doSearch',  _t('CMSMain_left_ss.APPLY_FILTER', 'Apply Filter'))
				->addExtraClass('ss-ui-action-constructive'),
			Object::create('ResetFormAction', 'clear', _t('CMSMain_left_ss.RESET', 'Reset'))
		);

		$form = new Form($this, 'filter', $fields, $actions);
		$form->setFormMethod('GET');
		$form->setFormAction($this->Link('show'));
		$form->addExtraClass('cms-search-form');
		$form->loadDataFrom($this->request->getVars());
		$form->disableSecurityToken();

		// This have to match data-name attribute on the gridfield so that the javascript selectors work
		$form->setAttribute('data-gridfield', 'CloudinaryFile');
		return $form;
	}


	public function providePermissions() {
		$title = _t("AssetAdmin.MENUTITLE", LeftAndMain::menu_title_for_class('AssetAdmin'));
		return array(
			"CMS_ACCESS_AssetAdmin" => array(
				'name' => _t('CMSMain.ACCESS', "Access to '{title}' section", array('title' => $title)),
				'category' => _t('Permission.CMS_ACCESS_CATEGORY', 'CMS Access')
			)
		);
	}


}
