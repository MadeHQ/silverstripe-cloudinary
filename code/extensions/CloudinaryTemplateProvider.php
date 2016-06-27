<?php

use \Cloudinary\Helpers;

class CloudinaryTemplateProvider implements TemplateGlobalProvider {

    public static function get_template_global_variables() {
        return array(
            'CloudinaryTwitter',
            'CloudinaryGravatar'
        );
    }

    public static function CloudinaryTwitter($profile, $width = 100) {
        $options["type"] = "twitter_name";
        $options["format"] = "jpg";
        $options["secure"] = true;
        $options["width"] = $width;
        return Cloudinary::cloudinary_url($profile, $options);
    }

    public static function CloudinaryGravatar($email, $width = 100) {
        $options["type"] = "gravatar";
        $options["format"] = "jpg";
        $options["secure"] = true;
        $options["width"] = $width;
        $emailHash = md5(strtolower(trim($email)));
        return Cloudinary::cloudinary_url($emailHash, $options);
    }
}
