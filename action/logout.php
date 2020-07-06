<?php
    include "../db_conn.php";
    session_start();
    $sqlSearchUser = $conn->prepare("SELECT id FROM users WHERE user_key = :userKey");
    $sqlSearchUser->bindParam(':userKey', $_SESSION['user_key']);
    $sqlSearchUser->execute();
    $rowSearchUser = $sqlSearchUser->fetchAll(PDO::FETCH_ASSOC);
    $idUser = $rowSearchUser[0]['id'];

    $sqlDeleteSession = $conn->prepare("DELETE FROM sessions WHERE user_id = :userId");
    $sqlDeleteSession->bindParam(':userId', $idUser);
    $sqlDeleteSession->execute();

    if(session_destroy()) {
        header("Location: ../");
    }
