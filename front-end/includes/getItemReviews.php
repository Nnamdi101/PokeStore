<?php
	error_reporting(E_ERROR | E_WARNING | E_PARSE);
	
	include("connection.php");
		
		$iid = $_GET["iid"];
		$query = "SELECT title, reviewText, rating FROM item_reviews R WHERE 
			R.iid = '".$iid."'";
		
		$result = mysqli_query($connection, $query);
		
		
		if(!$result){
			die("Database query failed.");
		}


			while($row = mysqli_fetch_assoc($result)){
				//var_dump($row);
				//output data frosm each row
				//echo $row["uid"] . "<br/>";
				$temp[] = $row;
				//echo $row["iid"] . "<br/>";
				//echo $row["name"] . "<br/>";
			}
			
			echo json_encode($temp);
			
		
		mysqli_free_result($result);


	mysqli_close($connection);
?>