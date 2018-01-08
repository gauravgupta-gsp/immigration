<?php
Class Data {
	public function getReferers() {
		$servername = "localhost";
		$username = "buoot_gaurav";
		$password = "Gaurav@1";
		$dbname = "buoot_immigration";
		$conn = mysqli_connect($servername, $username, $password, $dbname);
		    // set the PDO error mode to exception
		    if (!$conn) {
		        die("Connection failed: " . mysqli_connect_error());
		    }
		    $sql = "SELECT * FROM referred_by";
		    $items =  array();

		    $result = [];

		    $result = mysqli_query($conn, $sql);
		    $i =0;

		    if (mysqli_num_rows($result) > 0) {
		    	while($row = mysqli_fetch_assoc($result)) {
		    		$items[] = $row["referred_by_name"];		    		
		    		$i++;		    		
		    	}    		    	
		    	return $items;
		    
		    }
		    else {
		        return "0 results";
		    }

		    mysqli_close($conn);


	}

	public function getCountries() {
		$servername = "localhost";
		$username = "buoot_gaurav";
		$password = "Gaurav@1";
		$dbname = "buoot_immigration";
		$conn = mysqli_connect($servername, $username, $password, $dbname);
		    // set the PDO error mode to exception
		    if (!$conn) {
		        die("Connection failed: " . mysqli_connect_error());
		    }
		    $sql = "SELECT * FROM countries";
		    $items =  array();

		    $result = [];

		    $result = mysqli_query($conn, $sql);
		    $i =0;

		    if (mysqli_num_rows($result) > 0) {
		    	while($row = mysqli_fetch_assoc($result)) {
		    		$items[] = $row["country_name"];		    		
		    		$i++;		    		
		    	}    		    	
		    	return $items;
		    
		    }
		    else {
		        return "0 results";
		    }

		    mysqli_close($conn);

	}

	public function getUnattended() {
		$servername = "localhost";
		$username = "buoot_gaurav";
		$password = "Gaurav@1";
		$dbname = "buoot_immigration";
		$conn = mysqli_connect($servername, $username, $password, $dbname);
		    // set the PDO error mode to exception
		    if (!$conn) {
		        die("Connection failed: " . mysqli_connect_error());
		    }
		    $sql = "SELECT * FROM student where file_status=1 and status=1 order by student_id";
		    $items =  array();
		    $response = array();
		    $result = [];

		    $result = mysqli_query($conn, $sql);
		    if (mysqli_num_rows($result) > 0) {
		    	if($row = mysqli_fetch_assoc($result)) {
		    		$response['code']= 200;
					$response['student_id'] = $row["student_id"];
					$response['student_name'] = $row["student_name"];
					$response['gender'] = $row["gender"];
					$response['bday'] = $row["bday"];
					$response['address'] = $row["address"];
					$response['email'] = $row["email"];
					$response['phone_no'] = $row["phone_no"];
					$response['purpose_of_visit'] = $row["purpose_of_visit"];
					$response['country'] = $row["country"];
					$response['referred_by'] = $row["referred_by"];
					$response['message'] = $row["message"];
		    		// $items[] = $row["country_name"];	
		    		$studentId= $row["student_id"];
		    		$sql = "update student set file_status=2 where student_id='$studentId';";	
		    		if ($conn->query($sql) === TRUE) {
		    			$response['updateResult'] = 'Updated';
		    		    // echo "Record updated successfully";
		    		} else {
		    			$response['updateResult'] = 'Not Updated'.$conn->error;
		    		    // echo "Error updating record: " . $conn->error;
		    		}    		
		    	}else
		    	{
					$response['code']= 0;
					$response['student_id'] = $row["student_id"];
		    	}    		    	
		    	// return json_encode($response);
		    	return $response;
		    
		    }
		    else {
		        return "0 results";
		    }

		    mysqli_close($conn);

	}

	public function killSession() {
		session_unset(); 
		session_destroy();
		return "1";
	}


	public function createEmployee($data) {
		$response['code']= 200;
		$response['student_id'] = data;
		return $response;
		// $servername = "localhost";
		// $username = "buoot_gaurav";
		// $password = "Gaurav@1";
		// $dbname = "buoot_immigration";
		// $conn = mysqli_connect($servername, $username, $password, $dbname);
		//     // set the PDO error mode to exception
		//     if (!$conn) {
		//         die("Connection failed: " . mysqli_connect_error());
		//     }
		//     $sql = "SELECT * FROM student where file_status=1 and status=1 order by student_id";
		//     $items =  array();
		//     $response = array();
		//     $result = [];

		//     $result = mysqli_query($conn, $sql);
		//     if (mysqli_num_rows($result) > 0) {
		//     	if($row = mysqli_fetch_assoc($result)) {
		//     		$response['code']= 200;
		// 			$response['student_id'] = $row["student_id"];
		// 			$response['student_name'] = $row["student_name"];
		// 			$response['gender'] = $row["gender"];
		// 			$response['bday'] = $row["bday"];
		// 			$response['address'] = $row["address"];
		// 			$response['email'] = $row["email"];
		// 			$response['phone_no'] = $row["phone_no"];
		// 			$response['purpose_of_visit'] = $row["purpose_of_visit"];
		// 			$response['country'] = $row["country"];
		// 			$response['referred_by'] = $row["referred_by"];
		// 			$response['message'] = $row["message"];
		//     		// $items[] = $row["country_name"];	
		//     		$studentId= $row["student_id"];
		//     		$sql = "update student set file_status=2 where student_id='$studentId';";	
		//     		if ($conn->query($sql) === TRUE) {
		//     			$response['updateResult'] = 'Updated';
		//     		    // echo "Record updated successfully";
		//     		} else {
		//     			$response['updateResult'] = 'Not Updated'.$conn->error;
		//     		    // echo "Error updating record: " . $conn->error;
		//     		}    		
		//     	}else
		//     	{
		// 			$response['code']= 0;
		// 			$response['student_id'] = $row["student_id"];
		//     	}    		    	
		//     	// return json_encode($response);
		//     	return $response;
		    
		//     }
		//     else {
		//         return "0 results";
		//     }

		//     mysqli_close($conn);

	}

	public function validateLogin() {
		
	}

	public function getVisaType() {

	}

}
?>