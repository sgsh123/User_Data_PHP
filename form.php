<?php
$con= mysqli_connect("localhost","root","","User_data");
if(!$con)
{
 die("Connection failed: " .mysqli_connect_error());
}
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$dob = $_POST['dob'];
$phone = $_POST['phone'];

$sql = "INSERT INTO `user_info` (`first name`, `last name`, `date of birth`, `contact no`) VALUES ('$fname', '$lname' , '$dob' , '$phone')";

$query = mysqli_query($con, $sql);

if($query)
{
     echo "Your details have been added to the database successfully";
}
else
{
    echo "Your details could not be saved due to a server error";
}

?>
