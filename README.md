# SilverStripe Cloudinary

## Requirements

* SilverStripe 3.1
* [silverstripe-cloudinary](https://github.com/MadeHQ/silverstripe-cloudinary)

## Description

SilverStripe Module. Replaces SilverStripe's inbuilt asset management with Cloudinary.

## Dependencies

* [PHP Extension for Cloudinary](https://github.com/cloudinary/cloudinary_php)

## Installation with [Composer](https://getcomposer.org/)

```composer require "mademedia/silverstripe-cloudinary"```

## DataObjects
* CloudinaryFile (extends DataObject)
* CloudinaryImage (extends CloudinaryFile)
* CloudinaryVideo (extends CloudinaryFile)
* YoutubeVideo (extends CloudinaryVideo)
* VimeoVideo (extends CloudinaryVideo)

## FormFields
* CloudinaryUploadField (not recommended for initializations)
* CloudinaryFileField (extends CloudinaryUploadField) - for uploading files.
* CloudinaryImageField (extends CloudinaryUploadField) - for uploading images.
* CloudinaryVideoField (extends CloudinaryUploadField) - for uploading videos into cloudinary or attach youtube or vimeo videos.
* CloudinaryColorSelectField (extends FormField) - For selecting background colours for attached media

## Example usages

    class Page extends SiteTree{

        static $db = array(
            'BackGroundColor' => 'Varchar'
        );

        static $has_one = array(
            'MainImage' => 'CloudinaryImage',
            'MainVideo' => 'CloudinaryVideo',
            'Download'  => 'CloudinaryFile',
        );

        static $many_many = array(
            'Galleries' => 'CloudinaryImage'
        );

        static $many_many_extraFields = array(
            'Galleries'        => array('Sort' => 'Int')
        );

        public function getCMSFields(){
            $fields = parent::getCMSFields();

            // for has_one relations
            $fields->addFieldToTab('Root.Media', CloudinaryImageField::create('MainImage', 'Main Image');
            $fields->addFieldToTab('Root.Media', CloudinaryVideoField::create('MainVideo', 'Main Video');
            $fields->addFieldToTab('Root.Media', CloudinaryFileField::create('Download', 'Download');

            // pass the has_one media object and field name that you need to select background color for
            $fields->insertAfter(CloudinaryColorSelectField::create('BackGroundColor', '', $this->MainImage(), 'MainImage'), 'MainImage')

            // for has_many | many_many relaitons (pass last two arguments if you need drag and drop reordering)
            $fields->addFieldToTab('Root.Media', CloudinaryImageField::create('Galleries', 'Galleries', $this->Galleries()->sort('Sort'), 'Sort'));

            ....
        }

	    ...

    }


## License ##
    Copyright (c) 2015, Made Media Ltd. - www.mademedia.co.uk
    All rights reserved.

    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

        * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the
          documentation and/or other materials provided with the distribution.
        * Neither the name of SilverStripe nor the names of its contributors may be used to endorse or promote products derived from this software
          without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
    GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
    STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
    OF SUCH DAMAGE.
