<?php

namespace MadeHQ\Cloudinary\Tasks;

use MadeHQ\Cloudinary\Model\FileLink;
use ReflectionClass;
use SilverStripe\Assets\File;
use SilverStripe\Control\Director;
use SilverStripe\Core\ClassInfo;
use SilverStripe\Dev\BuildTask;
use SilverStripe\ORM\DataObject;

class V2MigrationTaskStep1 extends BuildTask
{
    /**
     * @inheritdoc
     */
    protected $title = 'Version 2: Step 1 of migrating integration to using widget';

    /**
     * @inheritdoc
     */
    protected $description = 'This step will give you a list of classes and fields that will need to be updated in PHP (gives the root file of the class for reference but the fields may be in an extension or similar)';

    public function run($request)
    {
        $fileLinkClassName = FileLink::class;
        $fileClassName = File::class;

        $collatedData = [];

        foreach (ClassInfo::subclassesFor(DataObject::class, false) as $className) {
            if (!array_key_exists($className, $collatedData)) {
                $ref = new ReflectionClass($className);

                $collatedData[$className] = [
                    'file' => $ref->getFileName(),
                    'fields' => [],
                ];
            }

            $singleton = singleton($className);

            foreach ($singleton->hasOne() as $field=>$relatedClass) {
                $isFileLinkClass = $this->getIsClassOrSubclassOf($relatedClass, $fileLinkClassName);
                $isFileClass = $this->getIsClassOrSubclassOf($relatedClass, $fileClassName);

                if ($isFileLinkClass || $isFileClass) {
                    array_push($collatedData[$className]['fields'], $field);
                }
            }

            foreach ($singleton->manyMany() as $field=>$relatedClass) {
                $isFileLinkClass = $this->getIsClassOrSubclassOf($relatedClass, $fileLinkClassName);
                $isFileClass = $this->getIsClassOrSubclassOf($relatedClass, $fileClassName);

                if ($isFileLinkClass || $isFileClass) {
                    array_push($collatedData[$className]['fields'], $field);
                }
            }
        }

        $collatedData = array_filter($collatedData, function ($data) {
            return count($data['fields']);
        });

        foreach ($collatedData as $className=>$data) {
            $this->output('Class %s', $className);
            $this->output('File: %s', $data['file']);

            foreach ($data['fields'] as $fieldName) {
                $this->output(' - %s', $fieldName);
            }

            $this->output('');
        }
    }

    /**
     * @param string $class
     * @param string $baseClass
     * @return boolean
     */
    protected function getIsClassOrSubclassOf($class, $baseClass)
    {
        return $class === $baseClass || is_subclass_of($class, $baseClass);
    }

    /**
     * @param mixed ...$arguments
     * @param boolean $last
     */
    protected static function output(...$arguments)
    {
        $eol = '<br>';

        if (in_array(PHP_SAPI, ['cli', 'cgi', 'cgi-fcgi'])) {
            $eol = PHP_EOL;
        }

        echo sprintf(...$arguments) . $eol;
    }
}
