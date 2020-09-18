<?php

namespace MadeHQ\Cloudinary\Utils;

use MadeHQ\Cloudinary\Model\File;
use MadeHQ\Cloudinary\Model\Image;
use SilverStripe\Assets\Shortcodes\ImageShortcodeProvider as SilverStripeImageShortcodeProvider;
use SilverStripe\Assets\Storage\AssetStore;
use SilverStripe\Core\Config\Configurable;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\View\HTML;

class ImageShortcodeProvider extends SilverStripeImageShortcodeProvider
{
    use Configurable;

    private static $inline_width_limit = 0;

    private static $inline_height_limit = 0;

    /**
     * @inheritdoc
     */
    public static function handle_shortcode($args, $content, $parser, $shortcode, $extra = array())
    {
        $config = static::config();
        if (!$config->get('inline_width_limit') && !$config->get('inline_height_limit')) {
            // Use default SS functionality
            return parent::handle_shortcode($args, $content, $parser, $shortcode, $extra);
        }

        $cache = static::getCache();
        $cacheKey = static::getCacheKey($args);
        $item = $cache->get($cacheKey);

        if ($item) {
            $store = Injector::inst()->get(AssetStore::class);
            if (!empty($item['filename'])) {
                $store->grant($item['filename'], $item['hash']);
            }
            return $item['markup'];
        }

        // Find appropriate record, with fallback for error handlers
        $record = static::find_shortcode_record($args, $errorCode);

        if ($errorCode) {
            $record = static::find_error_record($errorCode);
        }

        if (!$record) {
            return null; // There were no suitable matches at all.
        }

        if ($record instanceof Image) {
            $width = isset($args['width']) ? max($args['width'], $config->get('inline_width_limit')) : $config->get('inline_width_limit');
            $height = isset($args['height']) ? max($args['height'], $config->get('inline_height_limit')) : $config->get('inline_height_limit');

            if ($width && $height) {
                $src = $record->Size($width, $height)->getURL();
            } elseif ($height) {
                $src = $record->ScaleMaxHeight($height)->getURL();
            } elseif ($width) {
                $src = $record->ScaleMaxWidth($width)->getURL();
            } else {
                $src = $record->getURL();
            }
        }

        // Build the HTML tag
        $attrs = array_merge(
            // Set overrideable defaults
            ['src' => '', 'alt' => $record->Title],
            // Use all other shortcode arguments
            $args,
            // But enforce some values
            ['id' => '', 'src' => $src]
        );
        // Clean out any empty attributes
        $attrs = array_filter($attrs, function ($v) {
            return (bool)$v;
        });
        $markup = HTML::createTag('img', $attrs);
        // cache it for future reference
        $cache->set($cacheKey, [
            'markup' => $markup,
            'filename' => $record instanceof File ? $record->getFilename() : null,
            'hash' => $record instanceof File ? $record->getHash() : null,
        ]);
        return $markup;
    }

    // public static function regenerate_shortcode($args, $content, $parser, $shortcode, $extra = array())
    // {
    //     var_dump(__METHOD__, \func_get_args());die;
    // }
}