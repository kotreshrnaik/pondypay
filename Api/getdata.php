<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    // $data = file_get_contents("php://input");
    // $data = json_decode($data);
    
    // $img = $data->image;

    //echo $img;

    $con = mysqli_connect("localhost", "root", "", "pondybay") or die("Couldn't connect to the server'");

    $result = mysqli_query($con, "select * from productinfo");

    $data = [];

    if(mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
    } else {
        $data =[];
    }

    echo json_encode($data);
?>