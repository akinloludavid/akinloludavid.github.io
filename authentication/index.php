

<form action="validate.php" method = "post">
    <label for="email">
        Email: 
        <input type="text" name = "email" id = "email" placeholder = "Email">

    </label>
    <label for="pwd">
        Password: 
        <input type="password" id = "email" name = "password">

    </label>

    <label for="">
        Remember me 
        <input type="checkbox" name = "remember">
    </label>

    <input type="submit" name ="login" value = "Login">
</form>

<?php

    if(isset($_COOKIE['email']) and isset($_COOKIE['pass'])){

        $email = $_COOKIE['email'];
        $pass = $_COOKIE['pass'];
    
        echo "<script> 
            document.getElementById('email').value = '$email';
            document.getElementById('pass').value = '$pass';
        
        </script>";

  
    }


?>