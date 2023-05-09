<?php

namespace MadeHQ\Cloudinary\UserForms;

use Cloudinary\Cloudinary;
use Cloudinary\Configuration\Configuration;
use SilverStripe\UserForms\Model\Submission\SubmittedFileField as SubmissionSubmittedFileField;

if (class_exists(SubmissionSubmittedFileField::class)) {

    class SubmittedFileField extends SubmissionSubmittedFileField
    {
        /**
         * @var Cloudinary
         */
        protected static $cloudinary_instance;

        /**
         * @inheritdoc
         */
        public function getLink($grant = true)
        {
            $config = [
                'resource_type' => 'raw',
                'attachment' => true,
            ];
            return static::cloudinary_instance()->uploadApi()->privateDownloadUrl($this->Value, '', $config);
        }

        /**
         * @return Cloudinary
         */
        public static function cloudinary_instance()
        {
            if (!static::$cloudinary_instance) {
                static::$cloudinary_instance = new Cloudinary(Configuration::instance());
            }
            return static::$cloudinary_instance;
        }
    }
}
