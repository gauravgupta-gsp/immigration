<?php
	header ( 'Content-type: application/json' );
	// include "connection.php";
	$response = array();
	$ok = true;
	if(!isset($_POST['txt_emp_name'])){

		$ok=false;
		$response['code']= 0;
		$response['message'] = 'Please enter name';
	}
			
	else if(!isset($_POST['txt_emp_pass'])){
				
		$ok = false;
		$response['code'] = 0;
		$response['message'] = 'Please enter password';
		}				
	else if(!isset($_POST['drp_emp_type'])){
				
		$ok = false;
		$response['code'] = 0;
		$response['message'] = 'Please enter employee type';
		}
	 
		else{
			$name = $_POST['txt_emp_name'];			
			$pass = $_POST['txt_emp_pass'];
			$drp_type = $_POST['drp_emp_type'];

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
			    	// $sql = "SELECT * FROM employee where emp_id= '$name' AND password= '$pass' ;" ;
			    	$sql = "INSERT INTO employee (emp_name,password,user_type) VALUES('$name','$pass', '$drp_type');" ;
			    	// $sql = "SELECT * FROM employee";
/*			    	$result = [];
			    	$result = mysqli_query($conn, $sql);*/
			    	if (mysqli_query($conn, $sql)) {
			    	    $last_id = mysqli_insert_id($conn);
			    	    //echo "New record created successfully. Last inserted ID is: " . $last_id;
        				$response['code'] = 200;
    	   				$response['message'] = 'Created employee user name is :  '.$last_id ;
			    	} else {
    		    			$response['code'] = 200;
    			   			$response['message'] = 'Failure'.mysqli_error($conn);
			    	    // echo "Error: " . $sql . "<br>" . mysqli_error($conn);
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