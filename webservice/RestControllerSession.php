<?php
	header("Access-Control-Allow-Origin: *");
	header ( 'Content-type: application/json' );
	// include "connection.php";
	$response = array();
	// 	$_POST = json_decode(file_get_contents('php://input'), true);
	// print_r($_POST[]);
	if(isset($_POST['emp_id'])){

		session_start();
		$emp_id = $_SESSION["emp_id"];
		
		if($emp_id == '')
		{
			//session expired
			// echo "1";
			echo 'Hello'.$_SESSION["emp_id"];
		} else {
			//session not expired
		    echo "0";
		}

	}else
	{
		echo "1";
	}
	
?>