<?php

namespace MadeHQ\Cloudinary\FieldType;

use ArrayAccess;
use ArrayIterator;
use Countable;
use IteratorAggregate;
use Exception;
use SilverStripe\ORM\Limitable;
use SilverStripe\ORM\Map;
use Traversable;

abstract class DBMultiResource extends DBBaseResource implements ArrayAccess, Countable, IteratorAggregate, Limitable
{
    /**
     * @config
     * @var array $casting
     */
    private static $casting = [
        'Link' => 'Text',
    ];

    /**
     * @var array $items
     */
    protected $items = [];

    /**
     * {@inheritdoc}
     */
    public function setValue($value, $record = null, $markChanged = true)
    {
        parent::setValue($value, $record, $markChanged);

        $json = $this->getJSON();

        if (!$json || !is_array($json)) {
            return $this;
        }

        if (array_key_exists('asset_id', $json)) {
            $json = [$json];
        }

        foreach ($json as $item) {
            if ($item->resource_type === 'image') {
                $item = DBImageResource::create()->setJSON($item);
            } else if ($item->resource_type === 'video') {
                $item = DBMediaResource::create()->setJSON($item);
            } else {
                $item = DBFileResource::create()->setJSON($item);
            }

            $this->items[] = $item;
        }

        return $this;
    }

    /**
     * @return ArrayIterator
     */
    public function getIterator(): Traversable
    {
        return new ArrayIterator($this->items);
    }

    /**
     * @param int $offset
     * @return boolean
     */
    public function offsetExists($offset): bool
    {
        return array_key_exists($offset, $this->items);
    }

    /**
     * @param int $offset
     * @return DBSingleResource|null
     */
    public function offsetGet($offset): mixed
    {
        if ($this->offsetExists($offset)) {
            return $this->items[$offset];
        }

        return null;
    }

    /**
     * @param int $offset
     * @param DBSingleResource $value
     */
    public function offsetSet($offset, $value): void
    {
        if ($offset == null) {
            $this->items[] = $value;
        } else {
            $this->items[$offset] = $value;
        }
    }

    /**
     * @param int $offset
     */
    public function offsetUnset($offset): void
    {
        unset($this->items[$offset]);
    }

    /**
     * @return int
     */
    public function count(): int
    {
        return count($this->items);
    }

    /**
     * @return array
     */
    public function toArray()
    {
        return $this->items;
    }

    /**
     * @return array
     */
    public function toNestedArray()
    {
        $result = [];

        foreach ($this->items as $item) {
            $result[] = $item->toMap();
        }

        return $result;
    }

    /**
     * @param DBSingleResource $add
     * @return $this
     */
    public function add($add)
    {
        $this->items[] = $add;

        return $this;
    }

    /**
     * @param DBSingleResource $item
     * @return $this
     */
    public function remove($item)
    {
        if (!property_exists($item, 'asset_id')) {
            return $this;
        }

        $renumberKeys = false;

        foreach ($this->items as $key=>$value) {
            if ($value->asset_id === $item->asset_id) {
                $renumberKeys = true;

                unset($this->items[$key]);
            }
        }

        if ($renumberKeys) {
            $this->items = array_values($this->items);
        }

        return $this;
    }

    /**
     * @return DBSingleResource
     */
    public function first()
    {
        return $this->items[0];
    }

    /**
     * @return DBSingleResource
     */
    public function last()
    {
        return $this->items[count($this->items) - 1];
    }

    /**
     * @param string $keyfield
     * @param string $titlefield
     * @return Map
     */
    public function map($keyfield = 'asset_id', $titlefield = 'public_id')
    {
        return new Map(clone $this, $keyfield, $titlefield);
    }

    /**
     * @param string $key
     * @param mixed $value
     * @return DBSingleResource|null
     */
    public function find($key, $value)
    {
        foreach ($this->items as $item) {
            if ($this->extractValue($item, $key) === $value) {
                return $item;
            }
        }

        return null;
    }

    /**
     * @param string $colName
     * @return array
     */
    public function column($colName = 'public_id')
    {
        $result = [];

        foreach ($this->items as $item) {
            $result[] = $this->extractValue($item, $colName);
        }

        return $result;
    }

    /**
     * @param callable $callback
     * @return $this
     */
    public function each($callback)
    {
        foreach ($this as $item) {
            $callback($item);
        }

        return $this;
    }

    /**
     * @param int $limit
     * @param int $offset
     * @return $this
     */
    public function limit($limit, $offset = 0)
    {
        $list = clone $this;

        $list->items = array_slice($this->items, $offset, $limit);

        return $list;
    }

    /**
     * @param DBSingleResource $item
     * @param string $key
     * @return mixed
     */
    protected function extractValue($item, $key)
    {
        $json = $item->getJSON();

        if (property_exists($json, $key) === false) {
            return null;
        }

        return $json->{$key};
    }

    /**
     * @return string
     */
    public function getLink($opts = [])
    {
        return static::cloudinary()->uploadApi()->downloadZipUrl(array_merge([
            'resource_type' => $this->getResourceType(),
            'flatten_folders' => true,
            'use_original_filename' => true,
            'allow_missing' => true,
            'public_ids' => $this->column('public_id'),
        ], $opts));
    }

    /**
     * @return string
     * @throws Exception
     */
    protected function getResourceType()
    {
        throw new Exception('This method must be overloaded', 503);
    }

    /**
     * @return ArrayIterator
     */
    public function forTemplate()
    {
        return $this->getIterator();
    }
}
