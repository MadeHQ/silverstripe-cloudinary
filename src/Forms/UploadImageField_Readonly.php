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
        if ($this->value) {
            $fileId = $this->value->FileID;
            $file = DataObject::get(File::class)->filter('ID', $fileId);

            if ($file->count()) {
                $remoteData = json_decode($file->first()->RemoteData);

                if ($remoteData) {
                    $image = sprintf('https://res.cloudinary.com/detroit-symphony-orchestra/image/upload/c_fill,f_avif,g_auto,h_160,q_auto:eco,w_160/v1589819311/%s', $remoteData->public_id, );
                    $this->setDescription($remoteData->secure_url);
                    return "<img width='160' class='readonly " . $this->extraClass() . "' id='" . $this->ID() . "' src='" . $image . "'>";
                }
            }
        }

        return "<img src=''>";
    }

    /**
     * This already is a readonly field.
     */
    public function performReadonlyTransformation()
    {
        return clone $this;
    }
}
