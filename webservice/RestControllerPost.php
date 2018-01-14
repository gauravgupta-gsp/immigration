<?php
	header("Access-Control-Allow-Origin: *");
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
			session_start();
			$empId = $_POST['emp_id'];			
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
			    	$sql = "SELECT emp_name,user_type FROM employee where emp_id= '$empId' AND password= '$pass' ;" ;
			    	// $sql = "SELECT * FROM employee";
			    	$result = [];
			    	$result = mysqli_query($conn, $sql);
			    	if ($row = $result->fetch_assoc()) {
			    				$_SESSION["emp_id"] = $empId;
			    				$_SESSION["emp_name"] = $row["emp_name"];
			    				$_SESSION["emp_user_type"] = $row["user_type"];
			    				$response['code'] = 200;
				   				$response['message'] = 'Success' ;
				   				$response['emp_type'] = $row["user_type"];
				   				$response['emp_name'] = $row["emp_name"];
			    	    // echo ;
			    	}else
			    	{
			    		$response['code'] = 0;
				   		$response['message'] = 'Failure'. $sql . "<br>" . mysqli_error($conn);
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