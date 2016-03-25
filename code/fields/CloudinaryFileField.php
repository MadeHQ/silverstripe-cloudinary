<?php
/**
 * Created by Nivanka Fonseka (nivanka@silverstripers.com).
 * User: nivankafonseka
 * Date: 3/25/16
 * Time: 7:39 AM
 * To change this template use File | Settings | File Templates.
 */

class CloudinaryFileField extends FormField
{

	private $children = null;
	private $objectID = 0;

	public function __construct($name, $title = null, $value = "", $form = null) {

		$file = singleton('CloudinaryFile');
		$frontEndFields = $file->getFrontEndFields();

		foreach($frontEndFields as $field)
		{
			if($field->getName() == 'CloudinaryID'){
				$field->addExtraClass('_js-cloudinary-url');
			}
			else {
				$field->addExtraClass('_js-attribute');
			}

			$field->setName($name . "[" . $field->getName() . "]");
		}


		$this->children = $frontEndFields;
		$this->children->push(new HiddenField($name . "[ObjectID]"));

		parent::__construct($name, $title, $value, $form);

	}

	public function getChildren()
	{
		return $this->children;
	}

	public function getURLField()
	{
		return $this->children->dataFieldByName($this->getName() . "[CloudinaryID]");
	}

	public function DataFields()
	{
		$dataFields = new FieldList();
		foreach($this->children as $field){
			if(strpos($field->getName(), 'CloudinaryID') === false){
				$dataFields->push($field);
			}
		}
		return $dataFields;
	}


	public function Field($properties = array()) {

		Requirements::css('cloudinary/css/CloudinaryFileField.css');

		Requirements::javascript('cloudinary/javascript/thirdparty/jquery.cloudinary.js');
		Requirements::javascript('cloudinary/javascript/CloudinaryFileField.js');
		return $this->renderWith('CloudinaryFileField');

	}


	public function CloudName()
	{
		return CloudinaryUtils::cloud_name();
	}

	public function ApiKey()
	{
		return CloudinaryUtils::api_key();
	}

	public function isPopuplated()
	{
		return $this->objectID !== 0;
	}

	public function setValue($value, $record = null) {
		if(empty($value) && $record){
			if(($record instanceof DataObject) && $record->hasMethod($this->getName())) {
				$data = $record->{$this->getName()}();
				if($data && $data->exists()){
					$this->children->dataFieldByName($this->getName() . "[CloudinaryID]")->setValue($data->CloudinaryID);
					$this->children->dataFieldByName($this->getName() . "[Caption]")->setValue($data->Caption);
					$this->children->dataFieldByName($this->getName() . "[Credit]")->setValue($data->Credit);
					$this->children->dataFieldByName($this->getName() . "[Gravity]")->setValue($data->Gravity);
					$this->children->dataFieldByName($this->getName() . "[ObjectID]")->setValue($data->ID);
					$this->objectID = $data->ID;
				}
			}
		}

		return parent::setValue($value, $record);
	}

	public function saveInto(DataObjectInterface $record) {
		if($this->name) {
			$value = $this->dataValue();

			$file = null;
			if($value['ObjectID']){
				$file = CloudinaryFile::get()->byID($value['ObjectID']);
			}
			if(!$file){
				$file = new CloudinaryFile();
			}

			if($value['CloudinaryID']){
				$cloudinaryId = CloudinaryUtils::is_url($value['CloudinaryID']) ? CloudinaryUtils::public_id($value['CloudinaryID']) : $value['CloudinaryID'];
				$file->Caption = $value['Caption'];
				$file->Credit = $value['Credit'];
				$file->Gravity = $value['Gravity'];
				$file->CloudinaryID = $cloudinaryId;
				$file->write();

				$record->setCastedField($this->name . 'ID', $file->ID);
			}
			else {
				if($file->exists()){
					$file->delete();
				}

				$record->setCastedField($this->name . 'ID', 0);
			}


		}
	}

} 