<?php
	header ( 'Content-type: application/json' );
	// include "connection.php";
/*	$METHOD = $_GET['method'];
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
}*/
	$response = array();
	$ok = true;
	if(!isset($_POST['student_id'])){

		$ok=false;
		$response['code']= 0;
		$response['message'] = 'Session problem';
	}
			
	else if(!isset($_POST['name'])){
				
		$ok = false;
		$response['code'] = 0;
		$response['message'] = 'Please enter name';
		}				
	 
	else if(!isset($_POST['phoneNo'])){
				
		$ok = false;
		$response['code'] = 0;
		$response['message'] = 'Please enter phone number';
		}				
	 
	else if(!isset($_POST['bday'])){
	 			
	 	$ok = false;
	 	$response['code'] = 0;
	 	$response['message'] = 'Please enter date of birth';
	 	}				
	  
	else if(!isset($_POST['email'])){
	  			
	  	$ok = false;
	  	$response['code'] = 0;
	  	$response['message'] = 'Please enter email id';
	  	}				
	   
	else if(!isset($_POST['passportNo'])){
	   			
	   	$ok = false;
	   	$response['code'] = 0;
	   	$response['message'] = 'Please enter passport number';
	   	}				
	    
	else if(!isset($_POST['visaType'])){
	    			
	    	$ok = false;
	    	$response['code'] = 0;
	    	$response['message'] = 'Please select visa type';
	    	}				
	
	else if(!isset($_POST['country'])){
	    			
	    	$ok = false;
	    	$response['code'] = 0;
	    	$response['message'] = 'Please select country';
	    	}				



		else{
			$studentId = $_POST['student_id'];			
			$sName = $_POST['name'];
			$sPhoneNo = $_POST['phoneNo'];
			$sBday = $_POST['bday'];
			$sEmail = $_POST['email'];
			$sPassportNo = $_POST['passportNo'];
			$sVisaType = $_POST['visaType'];
			$sCountry = $_POST['country'];
			$sPassFront = $_POST['browse_pass_front_value'];
			$sPassBack = $_POST['browse_pass_back_value'];
			$sIelts = $_POST['browse_ielts_value'];
			$sTenth = $_POST['browse_tenth_value'];
			$sTwelth = $_POST['browse_twelth_value'];
			$sGraduate = $_POST['browse_graduation_value'];
			$sPostGraduate = $_POST['browse_post_graduation_value'];
			$sPhd = $_POST['browse_phd_value'];
			$sResume = $_POST['browse_resume_value'];
			$sWorkExp = $_POST['browse_work_experience_value'];




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

			    	$sql = "update student set file_status=3,student_name='$sName',phone_no='$sPhoneNo', bday='$sBday', email='$sEmail', passport_no='$sPassportNo', visa_type='$sVisaType', country='$sCountry' where student_id='$studentId';";

			    //	$sql = "SELECT * FROM employee where emp_id= '$name' AND password= '$pass' ;" ;
			    	// $sql = "SELECT * FROM employee";
			    	if (mysqli_query($conn, $sql)) {
			    		// $sql1 = "INSERT INTO student_docs ('s_id','passport_front','passport_back','ielts','tenth','twelth','graduation','post_graduation','phd','resume','work_experience') VALUES ('$studentId','$sPassFront','$sPassBack','$sIelts','$sTenth','$sTwelth','$sGraduate','$sPostGraduate','$sPhd','$sResume','$sWorkExp');";
			    		$sql1 = "INSERT INTO student_docs (s_id,passport_front,passport_back,ielts,tenth,twelth,graduation,post_graduation,phd,resume,work_experience) VALUES ('$studentId','$sPassFront','$sPassBack','$sIelts','$sTenth','$sTwelth','$sGraduate','$sPostGraduate','$sPhd','$sResume','$sWorkExp');";
	    				if (mysqli_query($conn, $sql1)) {
	    					$response['code'] = 200;
	    					$response['message'] = "New record created successfully";
	    				    // echo "New record created successfully";
	    				} else {
	    					$response['code'] = 0;
	    					$response['message'] = "Error: " . $sql1 . "<br>" . mysqli_error($conn);
	    				    // echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	    				}
			    	} else {
			    		$response['code'] = 0;
			    		$response['message'] = "Error updating record: " . mysqli_error($conn);
			    	    // echo "Error updating record: " . mysqli_error($conn);
			    	}
			    	

			    }
			
			}
			echo json_encode($response);
				
	
	
?>