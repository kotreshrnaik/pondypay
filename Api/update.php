<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    $data = file_get_contents("php://input");
    $data = json_decode($data);
    
    $productTitle = $data->productTitle;
    $price = $data->price;
    $price1 = $data->price1;
    $description = $data->description;
    $imgURL = $data->imgURL;
    $alt = $data->alt;
    $id = $data->id;

    // echo $img;

    $con = mysqli_connect("localhost", "Pondybay2021", "Pondybay2021", "pondybay") or die("Couldn't connect to the server'");

    // $con = mysqli_connect("localhost", "root", "", "pondybay") or die("Couldn't connect to the server'");

    mysqli_query($con, "update productinfo set productTitle = '$productTitle', price= '$price', price1= '$price1', description= '$description', imgURL= '$imgURL', alt= '$alt' where id = '$id'");

    if(mysqli_affected_rows($con) == 1) {
        echo "Added";
    } else {
        echo "error";
    }

?>