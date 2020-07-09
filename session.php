<?php
    include "db_conn.php";
    date_default_timezone_set("Asia/Jakarta");
    session_start();

    require 'vendor/autoload.php';
    use Symfony\Component\Dotenv\Dotenv;
    $dotenv = new Dotenv();
    $dotenv->load('../.env');

    if(!isset($_SESSION['user_key']))
    {
        $_SESSION['error_message'] = "You must login to use this app!";
        header("Location: ../");
        return exit();
    }

?>
