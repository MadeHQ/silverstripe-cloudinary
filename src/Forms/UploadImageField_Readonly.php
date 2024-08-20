<?php

namespace MadeHQ\Cloudinary\Forms;

use SilverStripe\Forms\ReadonlyField;
use SilverStripe\ORM\DataObject;
use MadeHQ\Cloudinary\Model\File;

/**
 * Readonly version of a {@link UploadImageField}.
 */
class UploadImageField_Readonly extends ReadonlyField
{
    /**
     * Overloaded to display the correctly formatted value for this data type
     *
     * @param array $properties
     * @return string
     */
    public function Field($properties = [])
    {
        if (empty($this->value)) {
            $this->setValue(null);
            return parent::Field($properties);
        }

        $image = DataObject::get_by_id(File::class, $this->value->FileID);

        if (!$image || !$image->exists()) {
            $this->setValue(null);
            return parent::Field($properties);
        }

        $this->setDescription($image->SecureURL);

        return sprintf(
            '<img width="160" class="readonly %s" id="%s" src="%s">', $this->extraClass(), $this->ID(), $image->Size(160, 160)->Crop('fill')->forTemplate()
        );
    }

    /**
     * This already is a readonly field.
     */
    public function performReadonlyTransformation()
    {
        return clone $this;
    }
}