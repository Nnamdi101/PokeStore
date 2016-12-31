<?php
	error_reporting(E_ERROR | E_WARNING | E_PARSE);
	
	include("connection.php");
	

	/*
	if(isset($_POST['submit'])){
		$username = $_POST["username"];
		$password = $_POST["password"];	
		
		print_r($_POST);
		
		$query = "SELECT FROM Users (username, password) WHERE uid = '".$username."' AND password = '".$password."'";
		
		$result = mysqli_query($connection, $query);

		if(mysqli_num_rows($result) > 0){
			echo "Account exists";
		}
		else{
			echo "Account doesn't exist";
		}
	}
	else{
		$message = "Please log in.";
		echo $message; 
		
		
					Username: <input type="text" name="username" value="" /><br />
			Password: <input type="password" name="password" value="" /><br />
	}*/     

		
		/*$name = "Pikachu";
		$query = "SELECT * FROM items I, item_reviews R WHERE
			I.iid = R.iid and I.name = '".$name."'";*/
			
		//$iid = $_POST["iid"];
		
		//if(isset($_POST['submit'])){
			// $title = $_POST["title"];
			// $comment = $_POST["reviewText"];
			
			// $uid = "ProfOak";
			// $iid = $_POST["iid"];
			// $rating = $_POST["rating"];
			
			//for now we have to use GET and the uid has to be in the database, and we dont know why
			$title = $_GET["title"];
			$comment = $_GET["reviewText"];
			
			$uid = "ProfOak";
			$iid = $_GET["iid"];
			$rating = $_GET["rating"];

			$insQuery = "INSERT INTO item_reviews (uid, iid, title, reviewText, rating)
			VALUES 
			('".$uid."', '".$iid."', '".$title."', '".$comment."', '".$rating."')";
			
			mysqli_query($connection, $insQuery);
			//echo $title . "<br/>";
			//echo $comment;
		//}
		
		// $iid = 25;
		// $query = "SELECT comment, title, rating FROM item_reviews R WHERE 
		// 	R.iid = '".$iid."'";
		
		// $result = mysqli_query($connection, $query);
		
		
		// if(!$result){
		// 	die("Database query failed.");
		// }


		// 	while($row = mysqli_fetch_assoc($result)){
		// 		//var_dump($row);
		// 		//output data frosm each row
		// 		//echo $row["uid"] . "<br/>";
		// 		$temp[] = $row;
		// 		//echo $row["iid"] . "<br/>";
		// 		//echo $row["name"] . "<br/>";
		// 	}
			
		// 	echo json_encode($temp);
			
			

		// mysqli_free_result($result);
		

	mysqli_close($connection);
?>