<?php

class HTML5TimeField extends TimeField {

    private $interval = '600';

    /**
     * @param string $name
     * @param null $title
     * @param string $value
     */
    public function __construct($name, $title = null, $value = ""){
        $this->setConfig('timeformat', 'HH:mm');
        $this->setInterval($this->interval);
        parent::__construct($name,$title,$value);
	}

    /**
     * @return string
     */
    public function Type() {
		return 'text';
	}

    /**
     * @return array
     */
    public function getAttributes(){

		$interval = $this->interval;
		if($strTime = $this->Value()){
			if(date('s', strtotime($strTime)) > 0){
				$interval = 1;
			}
		}

		return array_merge(
			parent::getAttributes(),
			array(
				'type'  => 'time',
                'step'  => $interval
			)
		);
	}

    /**
     * @param string $name
     * @param mixed $val
     * @return $this
     */
    public function setConfig($name, $val) {
		$this->config[$name] = $val;
		return $this;
	}

    /**
     * @param $iInterval
     * @return $this
     */
    public function setInterval($iInterval){
        $this->interval = $iInterval;
        return $this;
    }

}
