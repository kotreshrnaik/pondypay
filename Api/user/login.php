<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    // $data = file_get_contents("php://input");
    // $data = json_decode($data);

    $email = isset($_GET['sendto']) ? $_GET['sendto'] : null;
    $hashpassword = isset($_GET['password']) ? $_GET['password'] : null;
    $password = hash('sha256', $hashpassword);
    
    //echo $password;
    
    $con = mysqli_connect("localhost", "Pondybay2021", "Pondybay2021", "pondybay") or die("Couldn't connect to the server'");
    //$con = mysqli_connect("localhost", "root", "", "pondybay") or die("Couldn't connect to the server'");
    
    mysqli_query($con, "SELECT * FROM user where email='$email' and password='$password'");
    
    if(mysqli_affected_rows($con) == 1 ) {
        $token = substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil(20/strlen($x)) )),1,20);
        echo ($token);
    } else {
        echo "Please Povide the valid credentials.";
    }
?>    