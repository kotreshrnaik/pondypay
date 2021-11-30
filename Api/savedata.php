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

    // echo $img;

    $con = mysqli_connect("localhost", "root", "", "pondybay") or die("Couldn't connect to the server'");

    mysqli_query($con, "insert into productinfo (productTitle, price, price1, description, imgURL, alt) values('$productTitle', '$price', '$price1', '$description', '$imgURL', '$alt')");

    if(mysqli_affected_rows($con) == 1) {
        echo "Added";
    } else {
        echo "error";
    }

?>