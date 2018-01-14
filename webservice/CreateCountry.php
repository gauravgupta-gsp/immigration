<?php
require 'config.php';

	// $_POST = json_decode(file_get_contents('php://input'), true);	
	
	
	if(!isset($_POST['txt_country_name'])){

		$ok=false;
		$response['code']= 0;
		$response['message'] = 'Please enter name';
	}
	else {
		$country_name = $_POST['txt_country_name'];
		$query = "INSERT INTO countries (country_name) VALUES('$country_name');";
		//$result = mysqli_query($conn, $query);

		if (mysqli_query($conn, $query)) {
		    $last_id = mysqli_insert_id($conn);
			$response['code'] = 200;
			$response['message'] = 'Country created successfully' ;
		}
		else {
			$response['code'] = 0;
			$response['message'] = 'Failure'.mysqli_error($conn);    	    
		}
	}
	
	echo json_encode($response);

?>