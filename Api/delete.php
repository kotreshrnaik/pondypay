<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    // $data = file_get_contents("php://input");
    // $data = json_decode($data);
    
     $id = $_REQUEST['id'];

    echo $id;

?>