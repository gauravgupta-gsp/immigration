	<?php
		$name = $gender = $address = $email = $phoneNo = $passportNo = $purposeOfVisit = $country =  
		$referredBy = $employeeId = $referDetails = $extraMessage ="";
		$nameErr = $genderErr =  $phoneNoErr = "";

		if ($_SERVER["REQUEST_METHOD"] == "POST") {
			if (empty($_POST["name"])) {
			    $nameErr = "Name is required";
			  } else {
			  		$name = test_input($_POST["name"]);
			  		// check if name only contains letters and whitespace
			  	    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
			  	      $nameErr = "Only letters and white space allowed";
			  	    }
				}			
		}

		$phoneNo = test_input($_POST["phoneNo"]);
		$email = test_input($_POST["email"]);
		$gender = test_input($_POST["gender"]);
		$address = test_input($_POST["address"]);
		$purposeOfVisit = test_input($_POST["purposeOfVisit"]);
		$country = test_input($_POST["country"]);
		$referredBy = test_input($_POST["referredBy"]);
		$referDetails = test_input($_POST["referDetails"]);
		$employeeId = test_input($_POST["employeeId"]);
		$extraMessage = test_input($_POST["extraMessage"]);




		function test_input($data) {
		  $data = trim($data);
		  $data = stripslashes($data);
		  $data = htmlspecialchars($data);
		  return $data;
		}

	if (strlen($nameErr) == 0 && strlen($phoneNoErr) == 0 && strlen($genderErr) ==0)
	{	
		echo $name;
		$servername = "localhost";
		$username = "buoot_gaurav";
		$password = "Gaurav@1";
		$dbname = "buoot_immigration";

		try {
		    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
		    // set the PDO error mode to exception
		    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		    /*$sql = "INSERT INTO MyGuests (firstname, lastname, email)
		    VALUES ('John', 'Doe', 'john@example.com')";*/

		    /*INSERT INTO `buoot_immigration`.`student` (`student_id`, `student_name`, `gender`, `address`, `email`, `phone_no`, `passport_no`, `purpose_of_visit`, `country`, `referred_by`, `referred_details`, `visa_type`, `file_status`, `status`, `created_date`, `createdby`, `message`) VALUES (NULL, 'gaurav', 'male', 'nanak', 'test', '97808', 'passport', 'visit purpose', 'country', 'refer', 'details', '', '1', '1', CURRENT_TIMESTAMP, '101', 'message');*/

		    $sql = "INSERT INTO `buoot_immigration`.`student`
		     (`student_id`, `student_name`, `gender`, `address`, `email`, `phone_no`, `passport_no`, `purpose_of_visit`, `country`, `referred_by`, `referred_details`, `visa_type`, `file_status`, `status`, `created_date`, `createdby`, `message`)
		     VALUES (NULL, '$name', '$gender', '$address', '$email', '$phoneNo','10101',
		       '$purposeOfVisit','$country', '$referredBy', '$referDetails','visatype','1','1',NULL,'101','$message');";
		    /*$sql = "INSERT INTO `buoot_immigration`.`student` (`student_id`, `student_name`, `gender`, `address`, `email`, `phone_no`, `passport_no`, `purpose_of_visit`, `country`, `referred_by`, `referred_details`, `visa_type`, `file_status`, `status`, `created_date`, `createdby`,'message') VALUES (NULL, 'abc', 'male', 'ajdslsandflas sadfj', 'laltig', '9646834818', '3145sdf6d', 'abc', 'India', 'Google', 'face', 'Work', '1', '1', CURRENT_TIMESTAMP, '101','');";*/
/*<!-- INSERT INTO `buoot_immigration`.`student` (`student_id`, `student_name`, `gender`, `address`, `email`, `phone_no`, `passport_no`, `purpose_of_visit`, `country`, `referred_by`, `referred_details`, `visa_type`, `file_status`, `status`, `created_date`, `createdby`,'message') VALUES (NULL, 'abc', 'male', 'ajdslsandflas sadfj', 'laltig', '9646834818', '3145sdf6d', 'abc', 'India', 'Google', 'face', 'Work', '1', '1', CURRENT_TIMESTAMP, '101',); -->
		    <!-- INSERT INTO `buoot_immigration`.`student` (`student_id`, `student_name`, `gender`, `address`, `email`, `phone_no`, `passport_no`, `purpose_of_visit`, `country`, `referred_by`, `referred_details`, `visa_type`, `file_status`, `status`, `created_date`, `createdby`) VALUES (NULL, 'abc', 'male', 'ajdslsandflas sadfj', 'laltig', '9646834818', '3145sdf6d', 'abc', 'India', 'Google', 'face', 'Work', '1', '1', CURRENT_TIMESTAMP, '101'); -->*/
		    // use exec() because no results are returned
		    $conn->exec($sql);
		    echo "Student details saved successfully";
		    }
		catch(PDOException $e)
		    {
		    echo $sql . "<br>" . $e->getMessage();
		    }
		$conn = null;
	}
	else
	{
		echo "Error exist on page";

	}

	?>