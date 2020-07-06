<?php
    include "../session.php";

    $sqlCountEarthquakeData = $conn->query("SELECT id FROM master_earthquake_indonesia");
    $allEarthquakeDataNumRows = $sqlCountEarthquakeData->rowCount();
?>
<!doctype html>
<html lang="en">
    <head>
        <?php include "../partials/assets_css.php";?>
        <title>Dashboard</title>
    </head>
    <body>
        <?php include "../partials/sidebar.php";?>

        <div class="main-content" id="panel">
            <?php include "../partials/navbar.php";?>
            <div class="header bg-magentaimg pb-6">
                <div class="container-fluid">
                    <div class="header-body">
                        <div class="row align-items-center py-4">
                            <div class="col-lg-6 col-7">
                                <h6 class="h2 text-white d-inline-block mb-0">Earthquake Dashboard</h6>
                                <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                                    <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                                        <li class="breadcrumb-item active"><a href="#">Dashboards</a></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <!-- Stats card -->
                        <div class="row">
                            <div class="col-xl-3 col-md-6">
                                <div class="card card-stats">
                                    <!-- Card body -->
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col">
                                                <h5 class="card-title text-uppercase text-muted mb-0">Mag: 7.5 SR ></h5>
                                                <?php
                                                    $sql75SR = $conn->query(
                                                        "SELECT COUNT(*) AS hitung FROM master_earthquake_indonesia WHERE mag > 7.5;"
                                                    );
                                                    $row75SR = $sql75SR->fetchAll(PDO::FETCH_ASSOC);
                                                ?>
                                                <span class="h2 font-weight-bold mb-0"><?= number_format($row75SR[0]['hitung'], 0, ',', '.');?></span>
                                            </div>
                                            <div class="col-auto">
                                                <div class="icon icon-shape bg-black text-white rounded-circle shadow"></div>
                                            </div>
                                        </div>
                                        <p class="mt-3 mb-0 text-sm">
                                            <span class="mr-2" style="font-weight: bolder"> <?= number_format(($row75SR[0]['hitung']/$allEarthquakeDataNumRows)*100, 2, '.', ',').'%'?></span>
                                            <span class="text-nowrap">of all data</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card card-stats">
                                    <!-- Card body -->
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col">
                                                <h5 class="card-title text-uppercase text-muted mb-0">Mag: 6 - 7.5 SR</h5>
                                                <?php
                                                    $sql6SR = $conn->query(
                                                        "SELECT COUNT(*) AS hitung FROM master_earthquake_indonesia WHERE mag BETWEEN 6.1 AND 7.5"
                                                    );
                                                    $row6SR = $sql6SR->fetchAll(PDO::FETCH_ASSOC);
                                                ?>
                                                <span class="h2 font-weight-bold mb-0"><?= number_format($row6SR[0]['hitung'], 0, ',', '.')?></span>
                                            </div>
                                            <div class="col-auto">
                                                <div class="icon icon-shape bg-red text-white rounded-circle shadow"></div>
                                            </div>
                                        </div>
                                        <p class="mt-3 mb-0 text-sm">
                                            <span class="mr-2" style="font-weight: bolder"> <?= number_format(($row6SR[0]['hitung']/$allEarthquakeDataNumRows)*100, 2, '.', ',').'%'?></span>
                                            <span class="text-nowrap">of all data</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card card-stats">
                                    <!-- Card body -->
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col">
                                                <h5 class="card-title text-uppercase text-muted mb-0">Mag: 4.5 - 6 SR</h5>
                                                <?php
                                                    $sql45SR = $conn->query(
                                                        "SELECT COUNT(*) AS hitung FROM master_earthquake_indonesia WHERE mag BETWEEN 4.5 AND 6;"
                                                    );
                                                    $row45SR = $sql45SR->fetchAll(PDO::FETCH_ASSOC);
                                                ?>
                                                <span class="h2 font-weight-bold mb-0"><?= number_format($row45SR[0]['hitung'], 0, ',', '.');?></span>
                                            </div>
                                            <div class="col-auto">
                                                <div class="icon icon-shape bg-warning text-white rounded-circle shadow"></div>
                                            </div>
                                        </div>
                                        <p class="mt-3 mb-0 text-sm">
                                            <span class="mr-2" style="font-weight: bolder;"> <?= number_format(($row45SR[0]['hitung']/$allEarthquakeDataNumRows)*100, 2, '.', ',').'%'?></span>
                                            <span class="text-nowrap">of all data</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card card-stats">
                                    <!-- Card body -->
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col">
                                                <h5 class="card-title text-uppercase text-muted mb-0">Mag: < 4.5 SR</h5>
                                                <?php
                                                    $sql44SR = $conn->query(
                                                        "SELECT COUNT(*) AS hitung FROM master_earthquake_indonesia WHERE mag <= 4.4;"
                                                    );
                                                    $row44SR = $sql44SR->fetchAll(PDO::FETCH_ASSOC);
                                                ?>
                                                <span class="h2 font-weight-bold mb-0"><?= number_format($row44SR[0]['hitung'], 0, ',', '.');?></span>
                                            </div>
                                            <div class="col-auto">
                                                <div class="icon icon-shape bg-gray text-white rounded-circle shadow"></div>
                                            </div>
                                        </div>
                                        <p class="mt-3 mb-0 text-sm">
                                            <span class="mr-2" style="font-weight: bolder;"> <?= number_format(($row44SR[0]['hitung']/$allEarthquakeDataNumRows)*100, 2, '.', ',').'%'?></span>
                                            <span class="text-nowrap">of all data</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid mt--6">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-header bg-transparent">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h6 class="text-uppercase text-muted ls-1 mb-1">Map</h6>
                                        <h5 class="h3 mb-0">Indonesia Earthquake</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <!-- Chart -->
                                <div id="indonesiaMap" style="height: 500px; width: 100%"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-header bg-transparent">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h6 class="text-uppercase text-muted ls-1 mb-1">Data</h6>
                                        <h5 class="h3 mb-0">Indonesia Earthquake Data</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <table style="width: 100%;margin-top: 30px" id="earthquakeTableList" class="table table-hover table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Time</th>
                                            <th>Latitude</th>
                                            <th>Longitude</th>
                                            <th>Mag (SR)</th>
                                            <th>Depth (km)</th>
                                            <th>Place</th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php include "../partials/assets_js.php";?>
        <script>
            // ArcGIS JS script
            require([
                "esri/Map",
                "esri/views/MapView",
                "esri/layers/FeatureLayer",
                "esri/widgets/Legend"
            ], function(Map, MapView, FeatureLayer, Legend) {
                let featureLayer = new FeatureLayer({
                    url: 'https://services7.arcgis.com/BRS1jOwmVPgFs2NE/arcgis/rest/services/indonesia_earthquake_list/FeatureServer'
                });

                let templatePopup = {
                    title: "Earthquake Details",
                    content: [{
                        type: "fields",
                        fieldInfos: [
                            {
                                fieldName: "wib_time",
                                label: "Time"
                            },
                            {
                                fieldName: "longitude",
                                label: "Longitude"
                            },
                            {
                                fieldName: "latitude",
                                label: "Latitude"
                            },
                            {
                                fieldName: "mag",
                                label: "Magnitude (SR)"
                            },
                            {
                                fieldName: "depth",
                                label: "Depth (km)"
                            },
                            {
                                fieldName: "place",
                                label: "Location"
                            }
                        ]
                    }]
                }

                featureLayer.popupTemplate = templatePopup;
                let map = new Map({
                    basemap: "topo-vector",
                    layers: [featureLayer]
                });

                let view = new MapView({
                    container: "indonesiaMap",
                    map: map,
                    center: [117.153709, -0.502106],
                    zoom: 5
                });
                view.ui.add(new Legend({ view: view }), "top-right");
            });
            $(document).ready(function () {
                $("#earthquakeTableList").DataTable({
                    ordering: false,
                    language: {
                        paginate: {
                            previous: "<i class='fas fa-angle-left'>",
                            next: "<i class='fas fa-angle-right'>"
                        }
                    },
                    ajax: {
                        url: "../api/fetch_all_earthquake.php",
                        type: 'POST',
                        dataSrc: 'data'
                    },
                    columns: [
                        {"data": "time"},
                        {"data": "longitude"},
                        {"data": "latitude"},
                        {"data": "mag"},
                        {"data": "depth"},
                        {"data": "place"},
                    ]
                });
            });
        </script>
    </body>
</html>
