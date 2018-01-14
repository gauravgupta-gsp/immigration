<?php
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
?>