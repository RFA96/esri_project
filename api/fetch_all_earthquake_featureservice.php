<?php
    // (1) Load .env config files
    require '../vendor/autoload.php';
    use Symfony\Component\Dotenv\Dotenv;
    $dotenv = new Dotenv();
    $dotenv->load('../.env');

    // (2) cURL for Fetch Data
        // (2.1) Initialize cURL
        $ch = curl_init($_SERVER['APP_FEATURELAYER_QUERY_URL']);
        curl_setopt($ch,CURLOPT_POST, 1);

        // (2.2) Set the headers
        $headers = array(
            'Content-Type: application/x-www-form-urlencoded',
        );
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        // (2.3) Set the body fields
        $bodyFields = array('f' => 'json', 'where' => '1=1', 'outSr' => '4326', 'outFields' => 'ObjectId, wib_time, latitude, longitude, mag, depth, place');
        $bodyFieldsString = http_build_query($bodyFields);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $bodyFieldsString);

        // (2.4) Execute the cURL
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $jsonResult = curl_exec($ch);

        // (2.5) Close cURL
        curl_close($ch);

        // (2.5) Display the results
        $jsonDecodedResult = json_decode($jsonResult, true);
        $arrayKosongan = array();
        for($i = 0; $i < count($jsonDecodedResult['features']); $i++) {
            array_push($arrayKosongan, $jsonDecodedResult['features'][$i]['attributes']);
        }
        echo json_encode($arrayKosongan, JSON_PRETTY_PRINT);
