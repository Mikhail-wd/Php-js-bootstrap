<?php
    $connect = mysqli_connect('localhost', 'default', 'default', 'users_and_text');

    $name = mysqli_real_escape_string ($connect, $_GET['name']);
    $mail = mysqli_real_escape_string ($connect, $_GET['mail']);
    $text = mysqli_real_escape_string ($connect, $_GET['text']);


    $sql_data_add = "INSERT INTO users(name,mail,text) VALUES ('$name','$mail','$text')";
   

    
    if (mysqli_query($connect, $sql_data_add) ){
        
        echo 'Allright !';
    }
    else {
        echo 'error '.mysqli_error($connect);
    };

    mysqli_close($connect);

?>