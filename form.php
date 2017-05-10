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
    date_default_timezone_set('Etc/UTC');

    require 'PHPMailer-master/PHPMailerAutoload.php';

    //Create a new PHPMailer instance
    $mail = new PHPMailer;

    //Tell PHPMailer to use SMTP
    $mail->isSMTP();

    //Enable SMTP debugging
    // 0 = off (for production use)
    // 1 = client messages
    // 2 = client and server messages
    $mail->SMTPDebug = 2;

    //Ask for HTML-friendly debug output
    //$mail->Debugoutput = 'html';

    //Set the hostname of the mail server
    $mail->Host = 'smtp.gmail.com'; 
    // use
    // $mail->Host = gethostbyname('smtp.gmail.com');
    // if your network does not support SMTP over IPv6

    //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
    $mail->Port = 587;

    //Set the encryption system to use - ssl (deprecated) or tls
    $mail->SMTPSecure = 'tls';

        //Whether to use SMTP authentication
        $mail->SMTPAuth = true;

        //Username to use for SMTP authentication - use full email address for gmail
        $mail->Username = "testingitgs@gmail.com";

        //Password to use for SMTP authentication
        $mail->Password = 'ItgsIa123';

        //Set who the message is to be sent from
        $mail->setFrom('testingitgs@gmail.com', 'Jane Doe');

        //Set who the message is to be sent to
        $mail->addAddress($email, $fname + $lname);

        //Set the subject line
        $mail->Subject = 'Welcome';

        //Read an HTML message body from an external file, convert referenced images to embedded,
        //convert HTML into a basic plain-text alternative body
        $mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));

        //Replace the plain text body with one created manually
        $mail->AltBody = 'This is a plain-text message body';

        if (!$mail->send()) {
         $arr = array('msg' => "Mailer Error: " . $mail->ErrorInfo, 'color' => 'red');
        } else {
         $arr = array('msg' => 'Your details have been added to the database successfully', 'color' => 'green');
       }
           
   }
   else
    {
        $arr = array('msg' => 'Your details could not be saved due to a server error', 'color' => 'red');
    }
    
     echo json_encode($arr);


    
?>
