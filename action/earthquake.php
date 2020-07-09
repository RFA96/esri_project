<?php
    include "../session.php";
    require '../vendor/autoload.php';
    use Symfony\Component\Dotenv\Dotenv;
    $dotenv = new Dotenv();
    $dotenv->load('../.env');

    $crud = $_GET['crud'];

    // Form
    $latitude = $_POST['latitude'];
    $longitude = $_POST['longitude'];
    $mag = $_POST['mag'];
    $depth = $_POST['depth'];
    $place = $_POST['place'];
    $time = date("n/j/Y, h:i A", strtotime($_POST['time']));

    // Generate new ID
    $sqlCountEarthquakeData = $conn->query("SELECT id FROM master_earthquake_indonesia");
    $allEarthquakeDataNumRows = $sqlCountEarthquakeData->rowCount();
    $newIDGenerated = $allEarthquakeDataNumRows + 1;

    // Config cURL
    $ch = curl_init($_SERVER['APP_FEATURELAYER_CRUD_URL']);
    curl_setopt($ch,CURLOPT_POST, 1);
    $headers = array(
        'Content-Type: application/x-www-form-urlencoded',
    );
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    if($crud == 'create') {
        $dataParameter = array(['geometry' => ['x' => $latitude, 'y' => $longitude, 'spatialReference' => ['wkid' => $_SERVER['WKID']]], 'attributes' => ['id' => $newIDGenerated, 'wib_time' => $time, 'latitude' => $latitude, 'longitude' => $longitude, 'mag' => $mag, 'depth' => $depth, 'place' => $place]]);
        $bodyFields = array('f' => 'json', 'token' => $_SERVER['TOKEN'], 'adds' => json_encode($dataParameter, JSON_PRETTY_PRINT));
        $bodyFieldsString = http_build_query($bodyFields);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $bodyFieldsString);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $jsonResult = curl_exec($ch);
        $jsonResultDecoded = json_decode($jsonResult, true);
        curl_close($ch);
        $objectIdToDB = $jsonResultDecoded['addResults'][0]['objectId'];

        // Insert to DB
        $sqlInsert = $conn->prepare("INSERT INTO master_earthquake_indonesia VALUES (:id, :time, :latitude, :longitude, :mag, :depth, :place, :objectId)");
        $sqlInsert->bindParam(':id', $newIDGenerated);
        $sqlInsert->bindParam(':time', $time);
        $sqlInsert->bindParam(':latitude', $latitude);
        $sqlInsert->bindParam(':longitude', $longitude);
        $sqlInsert->bindParam(':mag', $mag);
        $sqlInsert->bindParam(':depth', $depth);
        $sqlInsert->bindParam(':place', $place);
        $sqlInsert->bindParam(':objectId', $objectIdToDB);
        $sqlInsert->execute();

        $_SESSION['status'] = 'success';
        $_SESSION['message'] = 'New earthquake data has been successfully created!';
    } else if($crud == 'edit') {
        $dataParameter = array(['attributes' => ['objectId' => (int) $_SESSION['objectId'], 'id' => (int) $_SESSION['id'], 'wib_time' => $time, 'latitude' => $latitude, 'longitude' => $longitude, 'mag' => $mag, 'depth' => $depth, 'place' => $place]]);
        $bodyFields = array('f' => 'json', 'token' => $_SERVER['TOKEN'], 'updates' => json_encode($dataParameter, JSON_PRETTY_PRINT));
        $bodyFieldsString = http_build_query($bodyFields);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $bodyFieldsString);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $jsonResult = curl_exec($ch);
        $jsonResultDecoded = json_decode($jsonResult, true);
        curl_close($ch);

        // Update to DB
        $sqlUpdate = $conn->prepare("UPDATE master_earthquake_indonesia SET time = :time, latitude = :latitude, longitude = :longitude, mag = :mag, depth = :depth, place = :place WHERE id = :id");
        $sqlUpdate->bindParam(':id', $newIDGenerated);
        $sqlUpdate->bindParam(':time', $time);
        $sqlUpdate->bindParam(':latitude', $latitude);
        $sqlUpdate->bindParam(':longitude', $longitude);
        $sqlUpdate->bindParam(':mag', $mag);
        $sqlUpdate->bindParam(':depth', $depth);
        $sqlUpdate->bindParam(':place', $place);
        $sqlUpdate->bindParam(':id', $_SESSION['id']);
        $sqlUpdate->execute();

        $_SESSION['status'] = 'success';
        $_SESSION['message'] = 'New earthquake data has been successfully edited!';
        unset($_SESSION['id']); unset($_SESSION['objectId']);
    } else {
        $dataParameter = array($_SESSION['objectId']);
        $bodyFields = array('f' => 'json', 'token' => $_SERVER['TOKEN'], 'deletes' => json_encode($dataParameter, JSON_PRETTY_PRINT));
        $bodyFieldsString = http_build_query($bodyFields);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $bodyFieldsString);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $jsonResult = curl_exec($ch);
        $jsonResultDecoded = json_decode($jsonResult, true);
        curl_close($ch);

        // Delete to DB
        $sqlDelete = $conn->prepare('DELETE FROM master_earthquake_indonesia WHERE master_earthquake_indonesia."ObjectId" = :objectId');
        $sqlDelete->bindParam(':objectId', $_SESSION['objectId']);
        $sqlDelete->execute();
        $_SESSION['status'] = 'success';
        $_SESSION['message'] = 'New earthquake data has been successfully deleted!';
        unset($_SESSION['objectId']);
    }

    header("Location: ../pages/manage_data.php");
