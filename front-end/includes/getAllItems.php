<?php
	error_reporting(E_ERROR | E_WARNING | E_PARSE);
	
	include("connection.php");     

		$query = "SELECT * FROM items";
		
		$result = mysqli_query($connection, $query);
		
		
		if(!$result){
			die("Database query failed.");
		}


			while($row = mysqli_fetch_assoc($result)){
				$temp[] = $row;
			}
			
			echo json_encode($temp);
			
		mysqli_free_result($result);


	mysqli_close($connection);
?>