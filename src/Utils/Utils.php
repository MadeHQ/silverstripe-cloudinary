<?php

namespace MadeHQ\Cloudinary\Utils;

use Cloudinary;
use SilverStripe\Assets\File;

class Utils
{
    /**
     * @param File $file
     *
     * @return bool
     */
    public static function exists_in_cloudinary(File $file)
    {
        $opts = [
            'resource_type' => $file->File->ResourceType,
            'version' => $file->File->Variant,
        ];
        $url = Cloudinary::cloudinary_url($file->File->PublicID, $opts);
        if ($url) {
            $restResponse = Utils::curl_head_info($url);
            if ($restResponse['http_code'] === 404) {
                // Not found on Cloudinary
                $file->doUnpublish();
                $file->doArchive();
                return false;
            }
        } else {
            // In case no URL was returned
            $file->doUnpublish();
            $file->doArchive();
        }
        return true;
    }

    /**
     * Will do a HEAD request to Cloudinary and return the request info
     *
     * @param string $url The URL in cloudinary
     * @return array
     */
    private static function curl_head_info($url)
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_NOBODY, true);
        curl_exec($ch);
        $info = curl_getinfo($ch);
        curl_close($ch);
        return $info;
    }
}