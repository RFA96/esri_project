<?php
    session_start();
    if(isset($_GET['formAction'])) {
        $_SESSION['formAction'] = $_GET['formAction'];
        if($_GET['formAction'] == 'edit') {
            // Arahkan ke form edit
            $_SESSION['id'] = $_GET['id'];
            $_SESSION['objectId'] = $_GET['objectId'];
            header("Location: ../pages/data_form.php");
        } else if($_GET['formAction'] == 'delete') {
            // Arahkan ke action delete
            $_SESSION['objectId'] = $_GET['objectId'];
            header("Location: ../action/earthquake.php");
        }
    }
