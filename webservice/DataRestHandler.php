<?php
require_once("SimpleRest.php");
require_once("Data.php");
		
class DataRestHandler extends SimpleRest {

	function getReferers() {	

		$referer = new Data();
		$rawData = $referer->getReferers();
		$this ->formatData($rawData);
		
	}

	function getCountries() {	
			$referer = new Data();
			$rawData = $referer->getCountries();
			$this ->formatData($rawData);		
	}

	public function formatData($dataToFormat) {
		if(empty($dataToFormat)) {
				$statusCode = 404;
				$dataToFormat = array('error' => 'No data found!');		
			} else {
				$statusCode = 200;
			}

			$requestContentType = $_SERVER['HTTP_ACCEPT'];
			$this ->setHttpHeaders($requestContentType, $statusCode);
					
			if(strpos($requestContentType,'application/json') !== false){
				$response = $this->encodeJson($dataToFormat);
				echo $response;
			} else if(strpos($requestContentType,'text/html') !== false){
				$response = $this->encodeHtml($dataToFormat);
				echo $response;
			} else if(strpos($requestContentType,'application/xml') !== false){
				$response = $this->encodeXml($dataToFormat);
				echo $response;
			}
	}
	
	public function encodeHtml($responseData) {
	
		$htmlResponse = "<table border='1'>";
		foreach($responseData as $key=>$value) {
    			$htmlResponse .= "<tr><td>". $key. "</td><td>". $value. "</td></tr>";
		}
		$htmlResponse .= "</table>";
		return $htmlResponse;		
	}
	
	public function encodeJson($responseData) {
		$jsonResponse = json_encode($responseData);
		return $jsonResponse;		
	}
	
	public function encodeXml($responseData) {
		// creating object of SimpleXMLElement
		$xml = new SimpleXMLElement('<?xml version="1.0"?><mobile></mobile>');
		foreach($responseData as $key=>$value) {
			$xml->addChild($key, $value);
		}
		return $xml->asXML();
	}	
}
?>