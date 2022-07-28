<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    // $data = file_get_contents("php://input");
    // $data = json_decode($data);
    
    $id = $_REQUEST['id'];

    // echo $id;

    
    // $con = mysqli_connect("localhost", "Pondybay2021", "Pondybay2021", "pondybay") or die("Couldn't connect to the server'");
    $con = mysqli_connect("localhost", "root", "", "pondybay") or die("Couldn't connect to the server'");

    $result = mysqli_query($con, "SELECT * FROM productinfo where id = $id");

    $data = [];

    if(mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
    } else {
        $data = [];
    }

    echo json_encode($data);

?>