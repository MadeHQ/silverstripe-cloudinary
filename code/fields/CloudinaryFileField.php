<?php

class CloudinaryFileField extends FormField
{
	private $children = null;
	private $objectID = 0;

	public $FileType = 'File';

	public function __construct($name, $title = null, $value = "", $form = null) {

		$file = singleton('CloudinaryFile');
		$frontEndFields = $file->getFrontEndFields();

		foreach($frontEndFields as $field)
		{
			if ($field->getName() == 'URL') {
				$field->addExtraClass('_js-cloudinary-url');
			} else {
				$field->addExtraClass('_js-attribute');
			}

			if (in_array($field->getName(), array('FileSize', 'Format'))) {
				$field->addExtraClass('show_field');
			}

			if(in_array($field->getName(), array('FileTitle', 'FileDescription'))) {
				$field->RawFileField = true;
			}
			else if ($field->getName() == 'URL') {
				$field->CommonField = true;
			}

			$field->setName($name . "[" . $field->getName() . "]");
		}


		$this->children = $frontEndFields;
		$this->children->push(new HiddenField($name . "[ObjectID]"));

		parent::__construct($name, $title, $value);

	}

	public function getChildren() {
		return $this->children;
	}

	public function getURLField() {
		$isRaw = $this->isRaw();
		return $this->children->dataFieldByName($this->getName() . "[URL]")->setAttribute('data-is-raw', "$isRaw");
	}

	public function DataFields() {
		$dataFields = new FieldList();
		foreach($this->children as $field){
			if(strpos($field->getName(), 'URL') === false){
				$dataFields->push($field);
			}
		}
		return $dataFields;
	}

	public function Field($properties = array()) {
		Requirements::css('cloudinary/css/CloudinaryFileField.css');
		Requirements::javascript('cloudinary/javascript/thirdparty/imagesloaded.js');
		Requirements::javascript('cloudinary/javascript/thirdparty/jquery.cloudinary.js');
		Requirements::javascript('cloudinary/javascript/CloudinaryFileField.js');

		return $this->renderWith('CloudinaryFileField');
	}

	public function CloudName() {
		return CloudinaryUtils::cloud_name();
	}

	public function ApiKey() {
		return CloudinaryUtils::api_key();
	}

	public function isPopuplated() {
		return $this->objectID !== 0;
	}

    protected function getSubFields()
    {
        return array(
            'URL',
            'Caption',
            'Credit',
            'FileSize',
            'ObjectID'
        );
    }

    public function setValue($value, $record = null) {
        if(empty($value) && $record){
            if(($record instanceof DataObject) && $record->hasMethod($this->getName())) {
                $data = $record->{$this->getName()}();
                if($data && $data->exists()){
                    foreach ($this->getSubFields() as $fieldName) {
                        if($data->$fieldName) {
                            $this->children->dataFieldByName($this->getName() . '[' . $fieldName . ']')->setValue($data->$fieldName);
                        }
                    }
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
                $file = CloudinaryImage::get()->byID($value['ObjectID']);
            }
            if(!$file){
                $file = new CloudinaryImage();
            }

            if($value['URL']){
                $cloudinaryUrl = $value['URL'];
                $file->Caption = $value['Caption'];
                $file->Credit = $value['Credit'];
                $file->URL = $cloudinaryUrl;
                $file->Format = CloudinaryUtils::file_format($value['URL']);
                $file->FileSize = $value['FileSize'];
                $this->updateFileBeforeSave($file, $value, $record);
                $file->write();

                $record->setCastedField($this->name . 'ID', $file->ID);
            } else {
                if ($file->exists()) {
                    $file->delete();
                }

                $record->setCastedField($this->name . 'ID', 0);
            }
        }
    }

    protected function updateFileBeforeSave(CloudinaryFile &$file, &$value = array(), DataObjectInterface &$record)
    {}

	public function IsRaw()
	{
		if($field = $this->children->dataFieldByName($this->getName() . "[URL]")) {
			return CloudinaryUtils::resource_type($field->value) == 'raw';
		}
	}
}
