<?php
	header("Access-Control-Allow-Origin: *");
	header ( 'Content-type: application/json' );
	// include "connection.php";
	$response = array();
	session_unset(); 
	session_destroy();
?>