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
