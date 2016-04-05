<?php


CloudinaryUtils::set_configs();
ShortcodeParser::get('default')->register('cloudinary_image', array('CloudinaryFile', 'cloudinary_markdown'));