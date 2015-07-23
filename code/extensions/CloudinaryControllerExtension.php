<?php
/**
 * Created by Nivanka Fonseka (nivanka@silverstripers.com).
 * User: nivankafonseka
 * Date: 7/23/15
 * Time: 12:06 PM
 * To change this template use File | Settings | File Templates.
 */

class CloudinaryControllerExtension extends Extension {

	public function onBeforeInit(){
		CloudinaryFile::SetCloudinaryConfigs();
	}


} 