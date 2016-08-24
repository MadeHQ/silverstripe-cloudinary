# SilverStripe Cloudinary

SilverStripe Module. Replaces SilverStripe's inbuilt asset management with Cloudinary.

## Requirements

* SilverStripe 3.1+


## Installation with [Composer](https://getcomposer.org/)

```
composer require "mademedia/silverstripe-cloudinary"
```

## Configuration

To start using the module you need to configure the following Cloudinary parameters:

``` yml
CloudinaryUtils:
  settings:
    CloudName: ''
    APIKey: ''
    APISecret: ''
    UploadPreset: ''
```

## Fields

Adds the following field types:

- `CloudinaryImage`
- `CloudinaryFile`

## Template Globals

Implements `TemplateGlobalProvider` and adds the follwing global template methods.

### CloudinaryTwitter

Fetch a twitter profile image for a given username.

| Parameter | Description |
| --------- | ----------- |
| `profile` | Twitter profile username |
| `width` | Width for the image (defaults to 100px) |

Example:

```
$CloudinaryTwitter('MadeHQ')
// https://res.cloudinary.com/demo/image/twitter_name/w_100/madehq.jpg
```

### CloudinaryGravatar

Fetch a gravatar image for a given email address.

| Parameter | Description |
| --------- | ----------- |
| `email` | Email address |
| `width` | Width for the image (defaults to 100px) |

Example:

```
$CloudinaryGravatar('david.rapson@mademedia.co.uk')
// https://res.cloudinary.com/demo/image/gravatar/w_100/4f5a3902359f77ac02fce57a14fb01c6.jpg
```

### Pulling Meta Data from Cloudinary

By default the following meta fields for each of the field types

 * CloudinaryFile:
   * Title: Uses the `title` value and falls back to use the `public_id` (name of the file)
 * CloudinaryImage:
   * Caption: Uses the `ImageDescription` from the image `exif` data then the `caption` meta data field.
   * Credit: Uses the `Copyright` from the image `exif` data then the `alt` meta data field.
   * Width: Uses the `ExifImageWidth` from `image_metadata` then then `ExifImageWidth` from `exif` and then the `width`
   * Height:  Uses the `ExifImageHeight` from `image_metadata` and then the `height`
 * CloudinaryAudio:
   * Composer: Uses the `composer` value
   * duration: Uses the duration returned from cloudinary
   * FileDescription: Uses the `description` value

These can be changed from the `config.yml` defaults by the site's own yaml config.

The values can also be edited by the user after the image has been added
