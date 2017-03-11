<?php
$con= mysqli_connect("localhost","root","","User_data");
if(!$con)
{
 die("Connection failed: " .mysqli_connect_error());
}
$id = $_POST['id'];
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$dob = $_POST['dob'];
$phone = $_POST['phone'];
 
$sql = "INSERT INTO `user_info` (`id`, `first name`, `last name`, `date of birth`, `contact no`) VALUES ('$id', '$fname', '$lname' , '$dob' , '$phone')";

mysqli_query($con, $sql);

include 'display.php';
?>
