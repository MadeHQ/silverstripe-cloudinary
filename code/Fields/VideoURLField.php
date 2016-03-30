<?php

class VideoURLField extends TextField {

    /**
     * @return string
     */
    public function Type() {
        return 'url text';
    }

    /**
     * @return array
     */
    public function getAttributes() {
        return array_merge(parent::getAttributes(), array(
            'type'          => 'url',
            'placeholder'   => 'http://'
        ));
    }

    /**
     * Validates the field for youtube or vimeo url.
     *
     * @param Validator $validator
     * @return string
     */
    public function validate($validator) {
        $this->value = trim($this->value);

        if($this->value && !VideoVarchar::vimeoId($this->value) && !VideoVarchar::youtubeId($this->value)) {
            $validator->validationError(
                $this->name, _t('URLField.VALIDATION', 'Please enter a valid youtube or vimeo video URL'), 'validation'
            );

            return false;
        }

        return true;
    }
}
