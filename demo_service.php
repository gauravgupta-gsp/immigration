<?php
//error_reporting(0);
header('Content-Type: text/html; charset=utf-8');
//include('db_connection.php');

$METHOD = $_GET['method'];
//$mobile = (!isset($_GET['mobile']))?"9876543210":$_GET['mobile'];
//$imei = (!isset($_GET['imei']))?"9876543210":$_GET['imei'];

switch($METHOD){
case 'student_docs':
$params = "{}";
echo getRequestWatson($params);
$json_from_page = getRequestWatson($json);
$json_decoded = json_decode($json_from_page);
$context = $json_from_watson_decoded->context;
$conversation_id = $context->conversation_id;
//db_hit($conversation_id,$mobile,$imei,$input_text,$output_text,$entity,$db_method);
break; 


?>