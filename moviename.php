<?php
$moviename=$_GET['moviee'];
$json = file_get_contents('http://www.omdbapi.com/?t='.$moviename.'&plot=full');
//$obj = json_decode($json);
echo $json;
?>