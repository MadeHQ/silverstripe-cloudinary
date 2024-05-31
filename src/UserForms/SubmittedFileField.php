<?php

namespace MadeHQ\Cloudinary\UserForms;

use MadeHQ\Cloudinary\Utils\Helper;
use SilverStripe\UserForms\Model\Submission\SubmittedFileField as SubmissionSubmittedFileField;

if (class_exists(SubmissionSubmittedFileField::class)) {

    class SubmittedFileField extends SubmissionSubmittedFileField
    {
        /**
         * @inheritdoc
         */
        public function getLink($grant = true)
        {
            $config = [
                'resource_type' => 'raw',
                'attachment' => true,
            ];
            return Helper::cloudinary()->uploadApi()->privateDownloadUrl($this->Value, '', $config);
        }
    }
}
