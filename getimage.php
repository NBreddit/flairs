<?php
$filenameArray = [];

$handle = opendir(dirname(realpath(__FILE__)).'/flairs/');
        while($file = readdir($handle)){
            if($file !== '.' && $file !== '..'){
                array_push($filenameArray, "flairs/$file");
            }
        }

echo json_encode($filenameArray);
?>
