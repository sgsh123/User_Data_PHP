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
$gender = $_POST['gender'];
$email = $_POST['email'];

$sql = "INSERT INTO `user_info` (`first name`, `last name`, `date of birth`, `contact no`, `gender`, `email`) VALUES ('$fname', '$lname' , '$dob' , '$phone', '$gender', '$email')";
$query = mysqli_query($con, $sql);
if($query)
{   
     $arr = array('msg' => 'Your details have been added to the database successfully', 'color' => 'green');
     echo json_encode($arr);
     $msg = "This is a test message";
     mail('$email', "Welcome", '$msg');
}
else
{
    $arr = array('msg' => 'Your details could not be saved due to a server error', 'color' => 'red');
    echo json_encode($arr);
}
?>
