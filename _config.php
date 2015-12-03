<?php
/**
 * Created by Nivanka Fonseka (nivanka@silverstripers.com).
 * User: nivankafonseka
 * Date: 7/22/15
 * Time: 6:06 PM
 * To change this template use File | Settings | File Templates.
 */

define('CLOUDINARY_BASE', dirname(__FILE__));
define('CLOUDINARY_RELATIVE', basename(dirname(__FILE__)));


require_once CLOUDINARY_BASE . '/thirdparty/Cloudinary/Cloudinary.php';
require_once CLOUDINARY_BASE . '/thirdparty/Cloudinary/Uploader.php';
require_once CLOUDINARY_BASE . '/thirdparty/Cloudinary/Api.php';

CMSMenu::remove_menu_item('CloudinaryFileAddController');

CloudinaryConfigs::ReplaceFileFields();
ShortcodeParser::get('default')->register('cloudinary', array('CloudinaryFile', 'cloudinary_files'));
ShortcodeParser::get('default')->register('cloudinary_image', array('CloudinaryFile', 'cloudinary_markdown'));
SiteTree::remove_extension('SiteTreeLinkTracking');
Object::add_extension('SiteTree', 'CloudinarySiteTreeLinkTracking');
