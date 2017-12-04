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

## Development

JS Amends are done in `client\src\js` and `client\src\styles`

After changes you can run `npm run build` or during development use `npm run watch`

Also required for development is `yarn`
