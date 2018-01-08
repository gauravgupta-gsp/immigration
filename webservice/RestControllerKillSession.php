<?php
	header ( 'Content-type: application/json' );
	// include "connection.php";
	$response = array();
	session_unset(); 
	session_destroy();
?>