<?php

class CloudinaryMedia extends CloudinaryFile {

    /**
     * @return bool
     */
    public function IsVideo() {
        return is_a($this, 'CloudinaryVideo');
    }

} 