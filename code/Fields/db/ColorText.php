<?php

class ColorText extends Varchar {

    public function Opacity($opacity){
        $value = $this->value;
        if(StringUtils::Contains($value, '#')){
            $matches = $this->hex2rgb($value);
        }elseif(StringUtils::Contains($value, 'rgb')){
            preg_match_all('/\d+/', $value, $matchesRegs);
            $matches = $matchesRegs[0];
        }
        $matches[] = $opacity;
        return 'rgba('.implode(',', $matches).')';
    }

    private function hex2rgb($hex) {
        $hex = str_replace("#", "", $hex);

        if(strlen($hex) == 3) {
            $r = hexdec(substr($hex,0,1).substr($hex,0,1));
            $g = hexdec(substr($hex,1,1).substr($hex,1,1));
            $b = hexdec(substr($hex,2,1).substr($hex,2,1));
        } else {
            $r = hexdec(substr($hex,0,2));
            $g = hexdec(substr($hex,2,2));
            $b = hexdec(substr($hex,4,2));
        }
        $rgb = array($r, $g, $b);
        return $rgb;
    }

} 