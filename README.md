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

use MadeHQ\Cloudinary\Model\FileLink;
use MadeHQ\Cloudinary\Model\ImageLink;

private static $has_one = [
    '<FileVariableName>' => FileLink::class,
    '<ImageVariableName>' => ImageLink::class,
];
```

### Add CMSFields

```php
<?php

use MadeHQ\Cloudinary\Forms\UploadImageField;
use MadeHQ\Cloudinary\Forms\UploadFileField;

public function getCMSFields()
{
    $fields = parent::getCMSFields();
    $fields->addFieldsToTab(
        'Root.Media',
        [
            UploadFileField::create('ImageVariableName'),
            UploadImageField::create('FileVariableName'),
        ]
    );
    return $fields;
}
```

### Output in template

#### Files

Adding files to SilverStripe templates

```ss
<%-- File URL --%>
$FileVariableName.URL

<%-- File Title --%>
$FileVariableName.Title

<%-- File Title --%>
$FileVariableName.Description
```

#### Images

Adding images to SilverStripe templates

```ss
<%-- Original Image URL --%>
$ImageVariableName.URL(<width>, <height>, <crop>)

<%-- Original Image Title --%>
$ImageVariableName.Title

<%-- Original Image Alt --%>
$ImageVariableName.Alt

<%-- Original Image Gravity --%>
$ImageVariableName.Gravity

<%-- Original Image at a specific size fill will default to "fill" --%>
$ImageVariableName.URL(100, 200)

<%-- Original Image at a specific size with a specific format --%>
$ImageVariableName.URL(<width>, <height>, <crop>, <quality = 'auto'>, <gravity = (defaults to selected in CMS)>, <fetchFormatAuto = true>)
```

## Development

JS Amends are done in `client\src\js` and `client\src\styles`

After changes you can run `yarn build` or during development use `yarn watch`
