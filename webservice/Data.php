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

	public function validateLogin() {
		
	}

	public function getVisaType() {

	}

}
?>