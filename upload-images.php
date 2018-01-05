<?php
//upload.php
	if($_FILES["file"]["name"] != '')
	{
		if($_POST['selectedId'] != '')
		{
			if($_POST['studentId'] != '')
			{
				$test = explode('.', $_FILES["file"]["name"]);
				$ext = end($test);
				$name = time(). '.' . $ext;
				$path='./upload/'.$_POST['studentId'];
					if (!file_exists($path)) {
						mkdir($path);
					}
				$location = $path .'/'. $name;  
				move_uploaded_file($_FILES["file"]["tmp_name"], $location);
				echo $location;
			}
			else
			{
				echo "Student Id missing";
			}	
		}
		else
		{
				echo "Selected Id missing";
		}		
	}
	else
	{
		echo "File name missing";
	}		

// if($_FILES["file"]["name"] != '')
// {
//  $test = explode('.', $_FILES["file"]["name"]);
//  $ext = end($test);
//  $name = time(). '.' . $ext;
//  $location = './upload/' . $name;  
//  move_uploaded_file($_FILES["file"]["tmp_name"], $location);
//  // echo '<img src="'.$location.'" height="150" width="225" class="img-thumbnail" />';
//  // echo "success";
// }
// if($_POST['selectedId'] != '')
// {
// 	$firstname = $_POST['selectedId'];
//  // $test = explode('.', $_FILES["file"]["name"]);
//  // $ext = end($test);
//  // $name = rand(100, 999) . '.' . $ext;
//  // $location = './upload/' . $name;  
//  // move_uploaded_file($_FILES["file"]["tmp_name"], $location);
//  // echo '<img src="'.$location.'" height="150" width="225" class="img-thumbnail" />';
//  echo $firstname;
// }else
// {
// 	echo "Empty";
// }
// if($_POST['studentId'] != '')
// {
// 	$studentId = $_POST['studentId'];
//  // $test = explode('.', $_FILES["file"]["name"]);
//  // $ext = end($test);
//  // $name = rand(100, 999) . '.' . $ext;
//  // $location = './upload/' . $name;  
//  // move_uploaded_file($_FILES["file"]["tmp_name"], $location);
//  // echo '<img src="'.$location.'" height="150" width="225" class="img-thumbnail" />';
//  echo $name;
// }else
// {
// 	echo "Empty";
// }
?>