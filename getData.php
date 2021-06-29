<?php
    $connect = mysqli_connect('localhost', 'default', 'default', 'users_and_text');

    $sql_select_data = "SELECT * FROM users ORDER BY id DESC LIMIT 6";

    $result= mysqli_query($connect, $sql_select_data);

    $json_array = array();

    while ($data_to_process = mysqli_fetch_assoc($result)){
        $json_array[] = $data_to_process;
    };

    echo json_encode($json_array);
    
    mysqli_close($connect);
?>