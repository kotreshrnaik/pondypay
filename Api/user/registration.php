<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    //$data = file_get_contents("php://input");
    //$data = json_decode($data);
    
    $email = isset($_GET['sendto']) ? $_GET['sendto'] : null;
    $firstname = isset($_GET['firstname']) ? $_GET['firstname'] : null;
    $lastname = isset($_GET['lastname']) ? $_GET['lastname'] : null;
    $phone = isset($_GET['phone']) ? $_GET['phone'] : null;
    $hashpassword = isset($_GET['password']) ? $_GET['password'] : null;

    $password = hash('sha256', $hashpassword);
    
    // echo $firstname;
    
    $con = mysqli_connect("localhost", "Pondybay2021", "Pondybay2021", "pondybay") or die("Couldn't connect to the server'");
    // $con = mysqli_connect("localhost", "root", "", "pondybay") or die("Couldn't connect to the server'");

    mysqli_query($con, "SELECT * FROM user where email = '$email'");
    
    if(mysqli_affected_rows($con) == 1) {
        echo "You are already registered. Please Login."; 
    } else {
        mysqli_query($con, "insert into user (firstname, lastname, email, phone, password) values('$firstname', '$lastname', '$email', '$phone', '$password')");

        if(mysqli_affected_rows($con) == 1) {
            echo "Registration Success. You can Login now";
        } else {
            echo "Error in Registration. Please Try again!!!!";
        }
    }
    
    
    
?>