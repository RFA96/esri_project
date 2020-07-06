<?php
    include "../session.php";

    $sqlFetchAllEarthquakeData = $conn->query("SELECT * FROM master_earthquake_indonesia ORDER BY time DESC NULLS LAST;");
    $rowFetchAllEarthquakeData = $sqlFetchAllEarthquakeData->fetchAll(PDO::FETCH_ASSOC);
    if($sqlFetchAllEarthquakeData->rowCount() == 0) {
        echo json_encode(['status' => 'success', 'status_code' => 201, 'message' => 'No data available!'], JSON_PRETTY_PRINT);
    } else {
        echo json_encode(['status' => 'success', 'status_code' => 200, 'data' => $rowFetchAllEarthquakeData], JSON_PRETTY_PRINT);
    }
