# Silverstripe Cloudinary Module

This module provides fields & DataObjects for managing files, audio & images that are stored in Cloudinary.

## Installation

```bash
composer require mademedia/silverstripe-cloudinary
```

## Usage

### Setup

```php
<?php

putenv('CLOUDINARY_URL=cloudinary://<API Key>:<API Secret>@<Cloud name>');
```

### Add DataObjects

```php
<?php

use MadeHQ\Cloudinary\Model\ImageLink;
use SilverStripe\Assets\File;
use MadeHQ\Cloudinary\Model\Image;

private static $has_one = [
    '<LinkedImageVariableName>' => ImageLink::class,
    '<FileVariableName>' => File::class,
    '<ImageVariableName>' => Image::class,
];
```

### Add CMSFields

```php
<?php

use MadeHQ\Cloudinary\Forms\FileLinkField;
use SilverStripe\AssetAdmin\Forms\UploadField;

public function getCMSFields()
{
    $fields = parent::getCMSFields();
    $fields->addFieldsToTab(
        'Root.Media',
        [
            UploadField::create('<FileVariableName>'),
            UploadField::create('<ImageVariableName>'),
            FileLinkField::create('<LinkedImageVariableName>'),
        ]
    );
    return $fields;
}
```

### Output in template

All standard SS calls for cropping etc. are supported so out of the box you gain access to a CDN

Additional functionality includes the ability to add extensions for `MadeHQ\Cloudinary\Model\Image` class that call `::Transform()` giving you full access to cloudinary's image manipulation functionality

**NOTE**: The `ImageLink` class is pre-defined so that users are able to specify what part of the image they wish to focus on when cropping