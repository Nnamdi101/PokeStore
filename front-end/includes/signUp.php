<?php
	include("connection.php");  

	$data = json_decode(file_get_contents("php://input"));
	
	if(count($data)>0){
		$email = mysqli_real_escape_string($connection, $data->email);
		$password = mysqli_real_escape_string($connection, $data->password);
	}

	$query = "SELECT u.uid FROM Users u WHERE u.email = '$email' AND u.password = '$password' ";

	$result = mysqli_query($connection, $query);

	//Test if there was a query error
	if(!$result){
		die("Databse query failed.");
	}

	$array = [];

	while($row = mysqli_fetch_assoc($result)){
		$array[] = $row;

	}

	if(count($array)>0){

		echo json_encode($array);
	}
	else{
		echo http_response_code(404);
	}


	mysqli_free_result($result); //free up resourses 

	mysqli_close($connection); //close connection

?>