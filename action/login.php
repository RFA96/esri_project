<?php
    include "../db_conn.php";

    function getClientIP(){
        if (array_key_exists('HTTP_X_FORWARDED_FOR', $_SERVER)){
            return  $_SERVER["HTTP_X_FORWARDED_FOR"];
        }else if (array_key_exists('REMOTE_ADDR', $_SERVER)) {
            return $_SERVER["REMOTE_ADDR"];
        }else if (array_key_exists('HTTP_CLIENT_IP', $_SERVER)) {
            return $_SERVER["HTTP_CLIENT_IP"];
        }

        return '';
    }

    $username = $_POST['username'];
    $password = $_POST['password'];
    $getClientIP = getClientIP();
    $loginDateTime = date("Y-m-d H:i:s");

    $sqlLogin = $conn->prepare("SELECT * FROM users WHERE username = :username AND password = :password");
    $sqlLogin->bindParam(':username', $username);
    $sqlLogin->bindParam(':password', $password);
    $sqlLogin->execute();

    if($sqlLogin->rowCount() == 1) {
        session_start();
        $rowLogin = $sqlLogin->fetchAll(PDO::FETCH_ASSOC);

        $sqlCheckRowSession = $conn->query("SELECT * FROM sessions");
        $countRowSession = $sqlCheckRowSession->rowCount();
        $idSessionNew = $countRowSession + 1;

        // Insert to session
        $sqlInsertSession = $conn->prepare("INSERT INTO sessions(id, user_id, ip_address, login_datetime) VALUES (:id, :userId, :ipAddress, :loginDatetime)");
        $sqlInsertSession->bindParam(':id', $idSessionNew);
        $sqlInsertSession->bindParam(':userId', $rowLogin[0]['id']);
        $sqlInsertSession->bindParam(':ipAddress', $getClientIP);
        $sqlInsertSession->bindParam(':loginDatetime', $loginDateTime);
        $sqlInsertSession->execute();

        $_SESSION['user_key'] = $rowLogin[0]['user_key'];
        $_SESSION['role'] = $rowLogin[0]['role'];
        header("Location: ../pages/dashboard.php");
    } else {
        session_start();
        $_SESSION['error'] = 1;
        header("Location: ../");
    }
