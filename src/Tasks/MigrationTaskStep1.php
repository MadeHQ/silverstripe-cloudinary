<?php

namespace MadeHQ\Cloudinary\Tasks;

use MadeHQ\Cloudinary\Model\FileLink;
use ReflectionClass;
use SilverStripe\Control\Director;
use SilverStripe\Core\ClassInfo;
use SilverStripe\Dev\BuildTask;
use SilverStripe\ORM\DataObject;

class MigrationTaskStep1 extends BuildTask
{
    /**
     * @inheritdoc
     */
    protected $title = 'Step 1 of Migrating from `Files` integration to using widget';

    /**
     * @inheritdoc
     */
    protected $description = 'This step will give you a list of Classes and fields that will need to be updated in PHP (gives the root file of the class for reference but the fields may be in an extension or similar)';

    public function run($request)
    {
        $dataObjectClasses = ClassInfo::subclassesFor(DataObject::class, false);
        $fileLinkClassName = FileLink::class;

        /**
         * array(
         *   $ClassName => [
         *     'root_file' => 'file_location',
         *     'fields' => [],   // List of fields
         *   ]
         * )
         */
        $collatedData = array_reduce($dataObjectClasses, function ($carry, $className) use ($fileLinkClassName) {
            if (!array_key_exists($className, $carry)) {
                $ref = new ReflectionClass($className);
                $carry[$className] = [
                    'root_file' => $ref->getFileName(),
                    'fields' => [],
                ];
            }

            foreach($className::singleton()->hasOne() As $field => $relatedClass) {
                if (
                    is_subclass_of($relatedClass, $fileLinkClassName)
                    ||
                    $relatedClass === $fileLinkClassName
                ) {
                    array_push($carry[$className]['fields'], $field);
                }
            }

            foreach($className::singleton()->manyMany() As $field => $relatedClass) {
                if (
                    is_subclass_of($relatedClass, $fileLinkClassName)
                    ||
                    $relatedClass === $fileLinkClassName
                ) {
                    array_push($carry[$className]['fields'], $field);
                }
            }

            return $carry;
        }, []);

        $collatedData = array_filter($collatedData, function ($data) {
            return count($data['fields']);
        });

        if (!Director::is_cli()) {
            echo '<pre>';
        }

        foreach($collatedData As $className => $data) {
            echo sprintf("Class %s\nFile: %s\n", $className, $data['root_file']);

            foreach($data['fields'] As $fieldName) {
                echo sprintf(" - %s\n", $fieldName);
            }

            echo "\n";
        }

    }
}
