<?php
require_once("DataRestHandler.php");
		
$view = "";
if(isset($_GET["view"]))
	$view = $_GET["view"];
/*
controls the RESTful services
URL mapping
*/
switch($view){

	case "referrals":
		// to handle REST Url /mobile/referers/
		$dataRestHandler = new DataRestHandler();
		$dataRestHandler->getReferers();
		break;
		
	case "countries":
		// to handle REST Url /mobile/show/<id>/
		$dataRestHandler = new DataRestHandler();
		$dataRestHandler->getCountries();
		//$dataRestHandler->getMobile($_GET["id"]);
		break;
	case "killSession":
		$dataRestHandler = new DataRestHandler();
		$dataRestHandler->killSession();
	break;
	case "getUnattended":
		// to handle REST Url /mobile/show/<id>/
		$dataRestHandler = new DataRestHandler();
		$dataRestHandler->getUnattended();
		//$dataRestHandler->getMobile($_GET["id"]);
		break;
	/*case "createEmployee":
		// to handle REST Url /mobile/show/<id>/
		$dataRestHandler = new DataRestHandler();
		$json_decoded = json_decode($_POST['data'])
		$dataRestHandler->createEmployee($json_decoded);
		// $json_decoded = json_decode($json_from_page);
		//$dataRestHandler->getMobile($_GET["id"]);
		break;	*/
	case "" :
		//404 - not found;
		break;
}
?>
