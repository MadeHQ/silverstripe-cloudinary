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

private static $has_one = [
    '<FileVariableName>' => 'MadeHQ\Cloudinary\Model\File',
    '<ImageVariableName>' => 'MadeHQ\Cloudinary\Model\Image',
];
```

### Add CMSFields

```php
<?php

use MadeHQ\Cloudinary\Forms\File As CloudinaryFileField;
use MadeHQ\Cloudinary\Forms\Image As CloudinaryImageField;

public function getCMSFields()
{
    $fields = parent::getCMSFields();
    $fields->addFieldsToTab(
        'Root.Media',
        [
            CloudinaryFileField::create('FileVariableName'),
            CloudinaryImageField::create('ImageVariableName'),
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
```

#### Images

Adding images to SilverStripe templates

```ss
<%-- Original Image URL --%>
$ImageVariableName.URL

<%-- Original Image Credit --%>
$ImageVariableName.Credit

<%-- Original Image Caption --%>
$ImageVariableName.Caption

<%-- Original Image Gravity --%>
$ImageVariableName.Gravity

<%-- Original Image at a specific size fill will default to "fill" --%>
$ImageVariableName.getSource(100, 200)

<%-- Original Image at a specific size with a specific format --%>
$ImageVariableName.getSource(100, 200, 'fill', 'png')
```

## Development

JS Amends are done in `client\src\js` and `client\src\styles`

After changes you can run `npm run build` or during development use `npm run watch`

Also required for development is `yarn`
