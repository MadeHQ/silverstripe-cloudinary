<?php

class CloudinaryMedia extends CloudinaryFile {

    public function IsVideo() {
        return is_a($this, 'CloudinaryVideo');
    }

} 