<?php

namespace MadeHQ\Cloudinary\FieldType;

use SilverStripe\ORM\Limitable;
use SilverStripe\ORM\Map;
use SilverStripe\Control\Director;
use ArrayAccess;
use ArrayIterator;
use Countable;
use IteratorAggregate;
use Exception;
use Cloudinary;

abstract class DBMulti extends DBBase implements ArrayAccess, Countable, IteratorAggregate, Limitable
{
    private static $casting = [
        'Link' => 'Text',
        'RelativeLink' => 'Text',
        'AbsoluteLink' => 'Text',
    ];

    protected $items = [];

    public function setValue($value, $record = null, $markChanged = true)
    {
        parent::setValue($value, $record, $markChanged);

        $json = $this->getJSON();

        if (!$json || !is_array($json)) {
            return $this;
        }

        if (array_key_exists('public_id', $json)) {
            $json = [$json];
        }

        foreach ($json as $item) {
            if ($item->resource_type === 'image') {
                $item = DBImage::create()->setJSON($item);
            } else if ($item->resource_type === 'image') {
                $item = DBMedia::create()->setJSON($item);
            } else {
                $item = DBFile::create()->setJSON($item);
            }

            $this->items[] = $item;
        }

        return $this;
    }

    public function getIterator()
    {
        return new ArrayIterator($this->items);
    }

    public function offsetExists($offset)
    {
        return array_key_exists($offset, $this->items);
    }

    public function offsetGet($offset)
    {
        if ($this->offsetExists($offset)) {
            return $this->items[$offset];
        }

        return null;
    }

    public function offsetSet($offset, $value)
    {
        if ($offset == null) {
            $this->items[] = $value;
        } else {
            $this->items[$offset] = $value;
        }

        return $this;
    }

    public function offsetUnset($offset)
    {
        unset($this->items[$offset]);

        return $this;
    }

    public function count()
    {
        return count($this->items);
    }

    public function toArray()
    {
        return $this->items;
    }

    public function toNestedArray()
    {
        $result = [];

        foreach ($this->items as $item) {
            $result[] = $item->toMap();
        }

        return $result;
    }

    public function add($add)
    {
        $this->items[] = $add;

        return $this;
    }

    public function remove($item)
    {
        if (!property_exists($item, 'public_id')) {
            return $this;
        }

        $renumberKeys = false;

        foreach ($this->items as $key=>$value) {
            if ($value->public_id === $item->public_id) {
                $renumberKeys = true;

                unset($this->items[$key]);
            }
        }

        if ($renumberKeys) {
            $this->items = array_values($this->items);
        }

        return $this;
    }

    public function first()
    {
        return $this->items[0];
    }

    public function last()
    {
        return $this->items[count($this->items) - 1];
    }

    public function map($keyfield = 'public_id', $titlefield = 'url')
    {
        return new Map(clone $this, $keyfield, $titlefield);
    }

    public function find($key, $value)
    {
        foreach ($this->items as $item) {
            if ($this->extractValue($item, $key) === $value) {
                return $item;
            }
        }

        return null;
    }

    public function column($colName = 'public_id')
    {
        $result = [];

        foreach ($this->items as $item) {
            $result[] = $this->extractValue($item, $colName);
        }

        return $result;
    }

    public function each($callback)
    {
        foreach ($this as $item) {
            $callback($item);
        }

        return $this;
    }

    public function limit($limit, $offset = 0)
    {
        $list = clone $this;

        $list->items = array_slice($this->items, $offset, $limit);

        return $list;
    }

    public function extractValue($item, $key)
    {
        $json = $item->getJSON();

        if (property_exists($json, $key) === false) {
            return null;
        }

        return $json->{$key};
    }

    public function Link()
    {
        return $this->RelativeLink();
    }

    public function AbsoluteLink()
    {
        return Director::absoluteURL(
            $this->Link()
        );
    }

    public function RelativeLink()
    {
        $baseName = $this->getName();
        $uniqueHash = hash('crc32', $this->getValue());
        $extension = 'zip';

        $fileName = sprintf('%s.%s.%s', $baseName, $uniqueHash, $extension);

        $path = ASSETS_PATH . '/' . $fileName;
        $url = '/' . ASSETS_DIR . '/' . $fileName;

        if (file_exists($path)) {
            return $url;
        }

        $options = [
            'allow_missing' => true,
            'flatten_folders' => true,
            'use_original_filename' => true,
            'resource_type' => $this->getResourceType(),
            'target_public_id' => $baseName,
            'public_ids' => $this->column('public_id'),
        ];

        // unlimited max execution time
        set_time_limit(0);

        $fh = fopen($path, 'w');

        $ch = curl_init();

        curl_setopt_array($ch, [
            CURLOPT_FILE => $fh,
            CURLOPT_TIMEOUT =>  28800, // set this to 8 hours so we dont timeout on big files
            CURLOPT_URL => Cloudinary::download_zip_url($options),
        ]);

        curl_exec($ch);

        curl_close($ch);

        fclose($fh);

        return $url;
    }

    protected function getResourceType()
    {
        throw new Exception('This method must be overloaded', 503);
    }

    public function forTemplate()
    {
        return $this->getIterator();
    }
}
