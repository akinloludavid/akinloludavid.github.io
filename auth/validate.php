<?php



if (isset ($_POST['login'])){
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $rem = $_POST['remember'];

    if ( $email and $pass){
        if (isset($_POST["remember"])){
            setcookie('email', $email, time()+60*60*7);
            setcookie('pass', $pass, time()+60*60*7);
        }
        session_start();
            $_SESSION['email'] = $email;
            header("location: welcome.php");
    } 
    else {
        echo "Email or Password is invalid. <br> Click <a href = 'login.php'>here</a> to try again";
    }
}
else {
    header("location: login.php");
}







    // $myEmail = "akinloludavid27@yahoo.com";
    // $myPass = "12345";

    // if (isset ($_POST['login'])){
    //     $email = $_POST['email'];
    //     $pass = $_POST['password'];
    //     $rem = $_POST['remember'];

    //     if ($email == $myEmail and $pass = $myPass ){
    //         if (isset($_POST["remember"])){
    //             setcookie('email', $email, time()+60*60*7);
    //             setcookie('pass', $pass, time()+60*60*7);
    //         }
    //         session_start();
    //             $_SESSION['email'] = $email;
    //             header("location: welcome.php");
    //     } 
    //     else {
    //         echo "Email or Password is invalid. <br> Click <a href = 'login.php'>here</a> to try again";
    //     }
    // }
    // else {
    //     header("location: login.php");
    // }
?>