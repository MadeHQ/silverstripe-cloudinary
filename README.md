## SilverStripe Cloudinary

Bring the power of [Cloudinary](https://cloudinary.com/) to SilverStripe!

Cloudinary is a cloud-based media management platform that provides an easy solution for developers to store, manage, and serve highly optimised on-the-fly digital assets.

### Table of Contents

- [SilverStripe has a asset manager, why do I need this?](#silverstripe-has-a-asset-manager-why-do-i-need-this)
- [Provide Cloudinary config](#provide-cloudinary-config)
- [Create database fields](#create-database-fields)
- [Set form fields](#set-form-fields)
  - [Additional methods](#additional-methods)
- [Inline editor](#inline-editor)
  - [Additional Settings for inline editor](#additional-settings-for-inline-editor)
    - [`default_transformations` option](#default_transformations-option)
- [Rendering the assets](#rendering-the-assets)
  - [Images](#images)
    - [Supported transformations](#supported-transformations)
  - [Videos](#videos)
    - [Supported transformations](#supported-transformations-1)
  - [Files](#files)
    - [Supported transformations](#supported-transformations-2)
- [Supplementary methods](#supplementary-methods)
- [Global configuration](#global-configuration)
- [Multi resource fields](#multi-resource-fields)
- [Retaining transformations](#retaining-transformations)
- [Predominant Colours](#predominant-colours)
- [Contributing](#contributing)
- [Todo](#todo)

### SilverStripe has a asset manager, why do I need this?

The out of the box asset manager has one fatal flaw: the assets live on the server. You may be thinking "well, duh, where else are they gonna live?"

Assets being stored a server is fine for smaller sites that don't require much more than a server and some good caching. It becomes a problem when you have a multi-server setup and all instances need to serve the same asset.

Keeping assets in sync across multiple servers is a real pain in the ass. Yes, it could be automated, but it needs to be done, which means there has to be some devop nerd who has to put the processes in place for it to happen, and some code monkey who has to be on hand in case something inadvertently goes wrong. A real headache.

The simplest solution is to move the assets to the cloud. Here's that voice again saying "there's already an S3 module that does this."

Yes, there is. But you have to go through putting it in place. Then you have to setup S3, probably stick a caching layer in there somewhere. It can get pretty time consuming, especially if you're doing it frequently.

Cloudinary fixes that problem.

It offers a media manager, cloud storage, on-the-fly asset manipulations and transformations, and much more. The only thing you have to worry about is keeping track of the asset in the database.

Actually, that's a lie. You don't even have to worry about that, because this module takes care of that for you.

### Provide Cloudinary config

You'll need to provide the Cloud Name, API Key, API Secret, and Username[^1]. These values are the core requirements that enables the module to talk to Cloudinary.

Put these values in any YAML file you may be using to configure other parts of SilverStripe.

I believe a fresh install of SilverStripe comes with a `_config/mysite.yml` file. If you're having trouble fiding this, you may have renamed it.

```yaml
MadeHQ\Cloudinary:
    cloud_name: 'CLOUDINARY_CLOUD_NAME'
    api_key: 'CLOUDINARY_API_KEY'
    api_secret: 'CLOUDINARY_API_SECRET'
    username: 'CLOUDINARY_USERNAME'
```

### Create database fields

The provides support for six database fields:

* `CloudinaryImage` – store an image
* `CloudinaryMedia` – store a video or audio[^2]
* `CloudinaryFile` – store a raw file such as documents
* `CloudinaryMultiImage` – store multiple images
* `CloudinaryMultiMedia` – store multiple videos or audio[^2]
* `CloudinaryMultiFile` – store multiple files

Use these as you would use any other database fields – add an entry in the `$db` static:

```php
private static $db = [
    'MainImage' => 'CloudinaryImage',
    'BackgroundVideo' => 'CloudinaryMedia',
    'Brochure' => 'CloudinaryFile',
    'ImageGallery' => 'CloudinaryMultiImage',
    'VideoGallery' => 'CloudinaryMultiMedia',
    'Downloads' => 'CloudinaryMultiFile',
];
```

The beauty of these fields is at their core they're just text fields, so absolutely no relationships or additional tables.

### Set form fields

All classes that extends `DataObject` excluding `SiteTree` should automatically scaffold the necessary form field based on the database field.

For `SiteTree` extended classes, including `Page`, the form fields must be manually provided via `getCMSFields`:

```php
use MadeHQ\Cloudinary\Forms\ImageField;
use MadeHQ\Cloudinary\Forms\MediaField;
use MadeHQ\Cloudinary\Forms\FileField;

// [...]
public function getCMSFields()
{
    $fields = parent::getCMSFields();

    // Single asset fields
    $fields->addToTab('Root.Main', ImageField::create('MainImage'));
    $fields->addToTab('Root.Main', MediaField::create('BackgroundVideo'));
    $fields->addToTab('Root.Main', FileField::create('Brochure'));

    // Multiple asset fields
    $fields->addToTab('Root.Main', ImageField::create('ImageGallery')->setMultiple(true));
    $fields->addToTab('Root.Main', MediaField::create('VideoGallery')->setMultiple(true));
    $fields->addToTab('Root.Main', FileField::create('Downloads')->setMultiple(true));

    return $fields;
}
```

#### Additional methods

`ImageField`, `MediaField`, and `FileField` provides the following methods:

| Method                             | Description                                                  | Default |
| ---------------------------------- | ------------------------------------------------------------ | ------- |
| `->setMultiple(boolean $multiple)` | Sets the field to accept multiple files - for use where `CloudinaryImage`, `CloudinaryMedia`, `CloudinaryFile` database fields are used. | `false` |
| `->setMaxFiles(int $maxFiles)` | Sets the maximum number of files that can be chosen when a field is set to accept multiple files. | `25` |
| `->setButtonLabelSingular(string $label)` | Sets what label appears on the Cloudinary picker button for single asset mode. | `Choose Image` for `ImageField`<br />`Choose Media` for `MediaField`<br />`Choose File` for `FileField` |
| `->setButtonLabelPlural(string $label)` | Sets what label appears on the Cloudinary picker button for multiple asset mode. | `Choose Images` for `ImageField`<br />`Choose Media` for `MediaField`<br />`Choose Files` for `FileField` |
| `->setFields(array $fields)` | Sets what supplementary fields are shown along with the Cloudinary picker to provide additional information about the asset (see below for list of supported fields). | `BaseField::FIELD_TITLE`, `BaseField::FIELD_DESCRIPTION`, and `BaseField::FIELD_CREDIT` for `ImageField`<br />`BaseField::FIELD_TITLE`, and `BaseField::FIELD_DESCRIPTION` for `MediaField`<br />`BaseField::FIELD_TITLE` for `FileField` |

**List of supplementary fields supported by each core field type**

| Field                          | `ImageField` | `MediaField` | `FileField` |
| ------------------------------ | ------------ | ------------ | ----------- |
| `BaseField::FIELD_TITLE`       | &check;      | &check;      | &check;     |
| `BaseField::FIELD_DESCRIPTION` | &check;      | &check;      | &check;     |
| `BaseField::FIELD_CREDIT`      | &check;      | &check;      |             |
| `BaseField::FIELD_GRAVITY`     | &check;      | &check;      |             |
| `BaseField::FIELD_FG_COLOUR`   | &check;      |              |             |
| `BaseField::FIELD_BG_COLOUR`   | &check;      |              |             |

### Inline editor

The default media (`ssmedia`) handler in the WYSIWYG is replaced to use cloudinary as opposed to the Silverstripe **Files** browser

#### Additional Settings for inline editor

See Cloudinary's [configuration options](https://cloudinary.com/documentation/media_library_widget#3_set_the_configuration_options) for reference to any of the below

##### `default_transformations` option

Set to an array of objects (automatically wrapped in the extra array in the JS).

```php
\SilverStripe\Forms\HTMLEditor\HTMLEditorConfig::get('cms')
    ->setOptions([
        // This means that inline images will be limited to 1500px width by default (uses `limit` crop to keep aspect ratio)
        'default_transformations' => [['crop' => 'limit', 'width' => 1500]],
    ]);
```

### Rendering the assets

To give the developer more control over how they use the asset, this module will simply output the URL to the asset instead of outputting any HTML tags.

There's not an easy way to go around outputting a HTML tag directly, because each site may have a different requirement, and it's simply not enough to just output an `img` tag in the day of modern web development – we now have to consider different screen sizes, alternative file formats, etc.

It's just easier to give the developer a URL and they choose to deal with that as they please.

#### Images

Render an image as is:

```html
<img src="$MainImage" alt="$MainImage.Description" />
```

The `description` in this example is one of the supplementary fields.

Render a resized image:

```html
<img src="$MainImage.Fill(640, 480)" alt="$MainImage.Description" />
```

Render a picture tag for better device support and art direction:

```html
<picture>
    <source media="(max-width: 420px)" srcset="$MainImage.Fill(420, 220), $MainImage.Fill(420, 220).DPR(2.0) 2x">
    <source media="(min-width: 421px) and (max-width: 768px)" srcset="$MainImage.Fill(708, 371), $MainImage.Fill(708, 371).DPR(2.0) 2x">
    <source media="(min-width: 769px) and (max-width: 1023px)" srcset="$MainImage.Fill(963, 504), $MainImage.Fill(963, 504).DPR(2.0) 2x">
    <source media="(min-width: 1024px) and (max-width: 1366px)" srcset="$MainImage.Fill(375, 196), $MainImage.Fill(375, 196).DPR(2.0) 2x">
    <source media="(min-width: 1367px) and (max-width: 1920px)" srcset="$MainImage.Fill(560, 293), $MainImage.Fill(560, 293).DPR(2.0) 2x">
    <source media="(min-width: 1921px)" srcset="$MainImage.Fill(1208, 632), $MainImage.Fill(1208, 632).DPR(2.0) 2x">
    <img src="$MainImage.Fill(420, 220)" alt="$MainImage.Description">
</picture>
```

##### Supported transformations

| Transformation                    | Description |
| --------------------------------- | ----------- |
| `$Fill(width, height, gravity)` |             |
| `$FillByWidth(width, gravity)`   |             |
| `$FillByHeight(height, gravity)` |             |
| `$LimitFill(width, height, gravity)` |             |
| `$LimitFillByWidth(width, gravity)`   |             |
| `$LimitFillByHeight(height, gravity)` |             |
| `$Crop(width, height, gravity)` |             |
| `$CropByWidth(width, gravity)`   |             |
| `$CropByHeight(height, gravity)` |             |
| `$Thumb(width, height, gravity)` |             |
| `$ThumbByWidth(width, gravity)`   |             |
| `$ThumbByHeight(height, gravity)` |             |
| `$Scale(width, height, aspectRatio)` |             |
| `$ScaleByWidth(width, aspectRatio)`   |             |
| `$ScaleByHeight(height, aspectRatio)` |             |
| `$Fit(width, height, aspectRatio)` |             |
| `$FitByWidth(width, aspectRatio)`   |             |
| `$FitByHeight(height, aspectRatio)` |             |
| `$Limit(width, height, aspectRatio)` |             |
| `$LimitByWidth(width, aspectRatio)`   |             |
| `$LimitByHeight(height, aspectRatio)` |             |
| `$MinimumFit(width, height, aspectRatio)` |             |
| `$MinimumFitByWidth(width, aspectRatio)`   |             |
| `$MinimumFitByHeight(height, aspectRatio)` |             |
| `$Quality(quality)` |             |
| `$Format(format)` |             |
| `$DPR(dpr)` |             |

#### Videos

Render a cross-browser compatible video:

```html
<video autoplay muted>
    <source src="$MainVideo.FitByWidth(1024).Format('videoWebm')" type="video/webm">
    <source src="$MainVideo.FitByWidth(1024).Format('videoMp4')" type="video/mp4">
</video>
```

##### Supported transformations

| Transformation                    | Description |
| --------------------------------- | ----------- |
| `$Fill(width, height, gravity)` |             |
| `$FillByWidth(width, gravity)`  |             |
| `$FillByHeight(height, gravity)` |             |
| `$Crop(width, height, gravity)` |             |
| `$CropByWidth(width, gravity)`  |             |
| `$CropByHeight(height, gravity)` |             |
| `$Scale(width, height, aspectRatio)` |             |
| `$ScaleByWidth(width, aspectRatio)`  |             |
| `$ScaleByHeight(height, aspectRatio)` |             |
| `$Fit(width, height, aspectRatio)` |             |
| `$FitByWidth(width, aspectRatio)`  |             |
| `$FitByHeight(height, aspectRatio)` |             |
| `$Limit(width, height, aspectRatio)` |             |
| `$LimitByWidth(width, aspectRatio)`  |             |
| `$LimitByHeight(height, aspectRatio)` |             |
| `$Quality(quality)` |             |
| `$Format(format)` |             |
| `$VideoCodec(videoCodec)` |             |
| `$BitRate(bitRate)` |             |
| `$VideoSampling(videoSampling)` |             |
| `$AudioCodec(audioCodec)` |             |
| `$AudioFrequency(audioFrequency)` |             |

#### Files

Render a download link for a file:

```html
<a href="$Brochure" target="_blank">Download our brochure</a>
```

##### Supported transformations

Cloudinary has no support for transforming files.

### Supplementary methods

In addition to the transformation methods, the module also exposes additional methods to help output information about the asset themselves.

Some of these are available for all fields as standard while others can be filled in by content editors, given the corresponding fields have been enabled using the `->setFields` method documented above.

| Method                                           | Description                                                  | Images | Media | Files |
| ------------------------------------------------ | ------------------------------------------------------------ | ------ | ----- | ----- |
| `->getPublicID()` or `$PublicID`                 | Returns the Cloudinary ID of the resource.                | &check; | &check; | &check; |
| `->getName()` or `$Name`                         | Returns the uploaded name of the resource.                | &check; | &check; | &check; |
| `->getTitle()` or `$Title`                       | Returns the friendly name of the resource if enabled and filled in otherwise will fallback to the name. | &check; | &check; | &check; |
| `->getDescription()` or `$Description`           | Returns the description of the resource if enabled and filled in. | &check; | &check; | &check; |
| `->getFormat()` or `$Format`                     | Returns the file format of the resource.       | &check; | &check; | &check; |
| `->getResourceType()` or `$ResourceType`         | Returns the Cloudinary resource type. Will be either `image`, `media`, or `raw`. | &check; | &check; | &check; |
| `->getActualType()` or `$ActualType`             | Returns the actual type of the resource. This exists to differenciate between audio and video since Cloudinary refers to them as simply `media`. Will be either `image`, `video`, `audio`, or `raw`. | &check; | &check; | &check; |
| `->getVersion()` or `$Version`                   | Returns the Cloudinary version of the resource.           | &check; | &check; | &check; |
| `->getFileSize()` or `$FileSize`                 | Returns the file size of the resource in bytes.           | &check; | &check; | &check; |
| `->getFriendlyFileSize()` or `$FriendlyFileSize` | Returns the human readable file size of the resource e.g. `20K`, `1M`, etc. | &check; | &check; | &check; |
| `->getCredit()` or `$Credit`                     | Returns the copyright attribution of the resource if enabled and filled in. The module will automatically try to find the attribution from resource meta data such as the exif data from a photo. | &check; | &check; |       |
| `->getTopColours()` or `$TopColours` | Returns a list of most predominant colours from an image. See [Predominant Colours](#predominant-colours) for more details. |&check;|||
| `->getForegroundColour()` or `$ForegroundColour` | Returns the foreground colour if enabled and selected. |&check;|||
| `->getBackgroundColour()` or `$BackgroundColour` | Returns the background colour if enabled and selected. |&check;|||
| `->getDuration` or `$Duration` | Returns the duration of a video or audio resource. ||&check;||

### Global configuration

Some global configuration options are provided in case your requirements don't change across the project, or to further enhance the module.

These can go inside a YAML file you may be using to configure your SilverStripe such as the `_config/mysite.yml`.

```yaml
MadeHQ\Cloudinary\FieldType\DBImageResource:
    # Set the default output format of the images
    default_format: 'auto'
    # Set the default output quality of the images
    default_quality: 'auto'

MadeHQ\Cloudinary\Forms\BaseField:
    # Set the default number of files that can be selected for all the resources in it's multiple mode
    default_max_files: 25

MadeHQ\Cloudinary\Forms\ImageField:
    # Same as above but only for images
    default_max_files: 25
    # Set the list of available gravity options to choose from for images
    default_gravity_options:
        auto: 'Auto'
        auto:face: 'Auto (Face)'
        auto:faces: 'Auto (Faces)'
        auto:no_faces: 'Auto (No Faces)'
        center: 'Center'
        east: 'East'
        face: 'Face'
        faces: 'Faces'
        face:auto: 'Face (Auto)'
        faces:auto: 'Faces (Auto)'
        face:center: 'Face (Center)'
        faces:center: 'Faces (Center)'
        north: 'North'
        north_east: 'North East'
        north_west: 'North West'
        south: 'South'
        south_east: 'South East'
        south_west: 'South West'
        west: 'West'
    # Set the default supplementary fields that appear in the CMS
    default_fields:
        - title
        - description
        - credit

MadeHQ\Cloudinary\Forms\MediaField:
    # Same as above but only for media
    default_max_files: 25
    # Set the list of available gravity options to choose from for media
    default_gravity_options:
        auto: 'Auto'
        center: 'Center'
        east: 'East'
        north: 'North'
        north_east: 'North East'
        north_west: 'North West'
        south: 'South'
        south_east: 'South East'
        south_west: 'South West'
        west: 'West'
    # Set the default supplementary fields that appear in the CMS
    default_fields:
        - title
        - description

MadeHQ\Cloudinary\Forms\FileField:
    # Same as above but only for files
    default_max_files: 25
    # Set the default supplementary fields that appear in the CMS
    default_fields:
        - title
```

### Multi resource fields

As mentioned above, using the `->setMultiple(boolean $multiple)` method on one of the three fields enables support to select multiple resources from Cloudinary. This is great for instances where you're building a carousel, or providing a list of downloads.

At it's core, all this really does is provide each chosen resource as an iterator that can be looped through in the template. The methods, transformation or otherwise, available on each individual resource within the list remains the same as documented above, however, enabling this mode does expose the `->getLink()` or  `$Link` method which can be used to let the end-user download all the assets in single zipped file.

Example usuage:

```html
<ul>
    <% loop Downloads %>
        <li><a href="$Me" target="_blank">$Me.Title ($Me.FriendlyFileSize)</a></li>
    <% end_loop %>
</ul>

<p><a href="$Downloads.Link" target="_blank">Download all</a></p>
```

### Retaining transformations

By default, the module will skip any user applied transformations on resources to give the developer more control over how they wish the assets to be displayed.

The reasoning behind this is the developer should control the overall look of the assets including, but not limited to, setting the sizes, crops, effects, etc.

But, we're also aware some content editors may wish to have at least some control over how they want their images to appear, so they may wish to use the media library to pick out their transformations before inserting the asset.

A sensible middle ground to overcome this issue is to let the developer specify a list of transformations that can be applied by content editors.

The module exposes the following configuration option to make this possible:

```yaml
MadeHQ\Cloudinary\FieldType\DBImageResource:
    retain_transformations:
        - effect

MadeHQ\Cloudinary\FieldType\DBMediaResource:
    retain_transformations:
        - effect
        - video_sampling
        - keyframe_interval
```

Only the transformations mentioned in the supported transformations documented previously can be retained for the time being. This may change as we add more supported transformations.

### Predominant Colours

When an image is selected, the module will automatically extract the most predominant colours from it. This is returned as an `ArrayList` so it can be both easily looped through in templates or in PHP code. This can be accessed by `->getTopColours()` or `$TopColours`.

The `ArrayList` is ordered by how predominant a colour is with most predominant being first, and least being the last.

Each item within the array is comprised of `Predominance` and a neat `Colour` object that provides a nice selection of helper functions to allow easy manipulation of the colour:

| Method                                             | Description                                                  |
| -------------------------------------------------- | ------------------------------------------------------------ |
| `->getColour()` or `$Colour`                       | Colour string e.g. `#775313`                                 |
| `->getProminence()` or `$Prominence`               | How predominant a colour is e.g. `12.8`                      |
| `->getHex()` or `$Hex`                             | Hex representation of the colour e.g. `#775313`              |
| `->getHsl()` or `$Hsl`                             | HSL representation of the colour e.g. `hsl(38,72%,27%)`      |
| `->getHsla()` or `$Hsla`                           | HSL representation of the colour with alpha transparency e.g. `hsla(38,72%,27%,1)` |
| `->getHsv()` or `$Hsv`                             | HSV representation of the colour e.g. `hsv(38,84%,47%)`      |
| `->getRgb()` or `$Rgb`                             | RGB representation of the colour e.g. `rgb(119,83,19)`       |
| `->getRgba()` or `$Rgba`                           | RGB representation of the colour with alpha transparency e.g. `rgba(119,83,19,1)` |
| `->Saturate($percent)` or `$Saturate(percent)`     | Saturates the base colour by percent e.g. `#7d540c`          |
| `->Desaturate($percent)` or `$Desaturate(percent)` | Desaturates the base colour by percent e.g. `#70501a`        |
| `->Grayscale()` or `$Grayscale`                    | Grayscale version of the base colour e.g. `#454545`          |
| `->Brighten($percent)` or `$Brighten(percent)`     | Brighten the base colour by percent e.g. `#916d2d`           |
| `->Lighten($percent)` or `$Lighten(percent)`       | Lighten the base colour by percent e.g. `#a2701a`            |
| `->Darken($percent)` or `$Darken(percent)`         | Darken the base colour by percent e.g. `#4b340c`             |
| `->IsLight()` or `$IsLight`                        | Is the base colour light e.g. `false` (or nothing in template) |
| `->IsDark()` or `$IsDark`                          | Is the base colour dark e.g. `true` (or `1` in template)     |
| `->Spin($percent)` or `$Spin(percent)`             | Spin the base colour by percent e.g. `#766313`               |
| `->Tint($percent)` or `$Tint(percent)`             | Mix the base colour with white by percent e.g. `#85642b`     |
| `->Shade($percent)` or `$Shade(percent)`           | Mix the base colour with black by percent e.g. `#6b4b11`     |
| `->Fade($percent)` or `$Fade(percent)`             | Set the absolute opacity of the base colour by percent e.g. `rgba(119,83,19,0.1)` |
| `->FadeIn($percent)` or `$FadeIn(percent)`         | Increase the opacity of the base colour by percent e.g. `rgba(119,83,19,1)` |
| `->FadeOut($percent)` or `$FadeOut(percent)`       | Decrease the opacity of the base colour by percent e.g. `rgba(119,83,19,0.9)` |

The base colour used for above examples was `#775313` and all enhancements were made by `10` percent.

It's worth noting that all methods here that returns a colour will return a `Colour` object so you can effectively carry out chained manipulations e.g. `$Grayscale.Darken(10).FadeOut(10)`. When used in PHP, `Colour` can be cast as a string to get the literal value. The type of colour format (rgb, hex, etc.) will depend on the original input colour and/or the manipulation method.

**The module uses [Iris](https://github.com/ozdemirburak/iris) to provide colour manipulation and conversion functionality.**

### Contributing

This version of the module is still in its infancy. We will flesh it out as our scope increases. If you think there's something we're missing out on, feel free to raise an issue and we'll be happy to review and see if it can be accommodated.

### Todo

- [ ] Document the code further
- [ ] Update the README to include descriptions about the transformation methods
- [ ] Update the README to include examples screenshots
- [ ] Make the supplemtary fields easily extensible
- [ ] Reduce duplicate code in the React components
- [ ] Provide more transformations
- [x] Provide better support for colours
- [ ] Add handling for Edit/Remove functionality in WYSIWYG

[^1]: Username in this instance is interchangeable with email. Provide the email you used to sign up for Cloudinary.
[^2]: Due to limitation of Cloudinary, audio and videos both have the resource type of `video`. It's a minor inconvinience but the module exposes the `getActualType` method which will help differenciate the two when rendering.
