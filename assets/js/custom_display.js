// ArcGIS JS script
require([
    "esri/Map",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/Legend"
], function(Map, WebMap, MapView, FeatureLayer, Legend) {
    let featureLayer = new FeatureLayer({
        url: 'https://services7.arcgis.com/BRS1jOwmVPgFs2NE/arcgis/rest/services/indonesia_earthquake_list/FeatureServer'
    });

    let templatePopup = {
        title: "Earthquake Details",
        content: [{
            type: "fields",
            fieldInfos: [
                {
                    fieldName: "id",
                    label: "ID"
                },
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
