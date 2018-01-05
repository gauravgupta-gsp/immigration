<?php
	header ( 'Content-type: application/json' );
	// include "connection.php";
	$response = array();
	$ok = true;
	if(!isset($_POST['emp_id'])){

		$ok=false;
		$response['code']= 0;
		$response['message'] = 'Please enter Employee Id';
	}
			
	else if(!isset($_POST['pass'])){
				
		$ok = false;
		$response['code'] = 0;
		$response['message'] = 'Please enter password';
		}				
	 
		else{
			$name = $_POST['emp_id'];			
			$pass = $_POST['pass'];

			$servername = "localhost";
			$username = "buoot_gaurav";
			$password = "Gaurav@1";
			$dbname = "buoot_immigration";
			$conn = mysqli_connect($servername, $username, $password, $dbname);
			    // set the PDO error mode to exception
			    if (!$conn) {
			    	$response['code'] = 200;
				   $response['message'] = 'no' . $name . $pass;
			        die("Connection failed: " . mysqli_connect_error());
			    }
			    else {
			    	$sql = "SELECT * FROM employee where emp_id= '$name' AND password= '$pass' ;" ;
			    	// $sql = "SELECT * FROM employee";
			    	$result = [];
			    	$result = mysqli_query($conn, $sql);
			    	if ($row = $result->fetch_assoc()) {
			    				$response['code'] = 200;
				   				$response['message'] = 'Success' ;
			    	    // echo ;
			    	}else
			    	{
			    			$response['code'] = 200;
				   		$response['message'] = 'Failure';
			    	}

			    }
			
			}
			/*if($ok){
				//$query	="insert into tblstu(std_name , std_email, password , image)values('$name' , '$email' , '$password' , '$image')";
				// $result = mysql_query($query);
				$result = true;
				   if($result){
				   $response['code'] = 200;
				   $response['message'] = 'User is added' . $name . $pass;
				}
				else{
					$response['code'] = 0;
					$response['message'] = 'User is not added '.mysql_error();
					}
				}*/	
					
				echo json_encode($response);
				
	
	
?>