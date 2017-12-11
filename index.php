<!DOCTYPE html>
<html>
<body>

<?php
$dirname = "flairs/";
$images = scandir($dirname);
$ignore = Array(".", "..");
foreach($images as $curimg){
if(!in_array($curimg, $ignore)) {
echo "<img src='flairs/$curimg' /><br>\n";
};
}
?>

</body>
</html>
