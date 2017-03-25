<?php
$con= mysqli_connect("localhost","root","","User_data");
if(!$con)
{
 die("Connection failed: " .mysqli_connect_error());
}

	echo '<h1>User Information</h1>';
    echo "<center><table cellpadding='5' border='5'>
		<tr>
		<th>ID</th>
		<th>First Name</th>
		<th>Last Name</th>
        <th>Date of Birth</th>
		<th>Contact Number</th>
        <th>Gender</th>
		</tr></center>
		";

$sql2 = "SELECT * FROM `user_info`";;
$result = mysqli_query($con, $sql2);

if (mysqli_num_rows($result) > 0) {
    $i = 0;
    while($row = mysqli_fetch_assoc($result)) {
    $i = $i + 1;
    if ($i%2 == 0)
     {
        echo '
	    <tr style="background-color:#66ffcc">
        <td>'.$row["id"].'</td>
		<td>'.$row["first name"].'</td>
		<td>'.$row["last name"].'</td>
		<td>'.$row["date of birth"].'</td>
		<td>'.$row["contact no"].'</td>
        <td>'.$row["gender"].'</td>
		</tr>
	';
    }
    else
    {
        echo '
	    <tr style="background-color:#ccffff">
        <td>'.$row["id"].'</td>
		<td>'.$row["first name"].'</td>
		<td>'.$row["last name"].'</td>
		<td>'.$row["date of birth"].'</td>
		<td>'.$row["contact no"].'</td>
        <td>'.$row["gender"].'</td>
		</tr>
	';
    }
} 
}
else {
    echo "No data found";
}

mysqli_close($con);
?>
