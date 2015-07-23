<?php
/**
 * Created by Nivanka Fonseka (nivanka@silverstripers.com).
 * User: nivankafonseka
 * Date: 7/22/15
 * Time: 5:39 PM
 * To change this template use File | Settings | File Templates.
 */

class CloudinaryFileAddController extends LeftAndMain {

	private static $url_segment = 'cloudinary/add';
	private static $url_priority = 60;
	private static $required_permission_codes = 'CMS_ACCESS_AssetAdmin';
	private static $menu_title = 'Files';



	/**
	 * @param null $id Not used.
	 * @param null $fields Not used.
	 * @return Form
	 * @todo what template is used here? AssetAdmin_UploadContent.ss doesn't seem to be used anymore
	 */
	public function getEditForm($id = null, $fields = null) {
		Requirements::javascript(FRAMEWORK_DIR . '/javascript/AssetUploadField.js');
		Requirements::css(FRAMEWORK_DIR . '/css/AssetUploadField.css');


		$uploadField = CloudinaryUploadField::create('AssetUploadField', '');
		$uploadField->setConfig('previewMaxWidth', 40);
		$uploadField->setConfig('previewMaxHeight', 30);
		$uploadField->setConfig('changeDetection', false);
		$uploadField->addExtraClass('ss-assetuploadfield');
		$uploadField->removeExtraClass('ss-uploadfield');
		$uploadField->setTemplate('AssetUploadField');



		$exts = $uploadField->getValidator()->getAllowedExtensions();
		asort($exts);
		$uploadField->Extensions = implode(', ', $exts);

		$form = CMSForm::create(
			$this,
			'EditForm',
			new FieldList(
				$uploadField
			),
			new FieldList()
		)->setHTMLID('Form_EditForm');


		$form->setResponseNegotiator($this->getResponseNegotiator());
		$form->addExtraClass('center cms-edit-form ' . $this->BaseCSSClasses());
		// Don't use AssetAdmin_EditForm, as it assumes a different panel structure
		$form->setTemplate($this->getTemplatesWithSuffix('_EditForm'));
		$form->Fields()->push(
			new LiteralField(
				'BackLink',
				sprintf(
					'<a href="%s" class="backlink ss-ui-button cms-panel-link" data-icon="back">%s</a>',
					singleton('CloudinaryAdmin')->Link('show'),
					'Back to files'
				)
			)
		);

		$this->extend('updateEditForm', $form);

		return $form;
	}



	/**
	 * @param bool $unlinked
	 * @return ArrayList
	 */
	public function Breadcrumbs($unlinked = false) {
		$items = parent::Breadcrumbs($unlinked);
		$items[0]->Link = singleton('CloudinaryAdmin')->Link('show');
		$items->push(new ArrayData(array(
			'Title' => _t('CloudinaryAdmin.Upload', 'Upload'),
			'Link' => $this->Link()
		)));

		return $items;
	}

}
