require([
    "esri/Map",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/Legend",
    "esri/widgets/Editor"
], function(Map, WebMap, MapView, FeatureLayer, Legend, Editor) {
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
        // center: [96.97, 1.27],
        zoom: 5
    });
    view.ui.add(new Legend({ view: view }), "top-right");

    // Editor widget for CRUD
    let editorWidget = new Editor({
        view: view
    });
    view.ui.add(editorWidget, "bottom-left");

    // Elements for displaying coordinates
    let coordsWidget = document.createElement("div");
    coordsWidget.id = "coordsWidget";
        coordsWidget.className = "esri-widget esri-component";
    coordsWidget.style.padding = "7px 15px 5px";
    view.ui.add(coordsWidget, "bottom-right");

    function showCoordinates(pt) {
        let coords = "Lat/Lon " + pt.latitude.toFixed(3) + " " + pt.longitude.toFixed(3) +
            " | Scale 1:" + Math.round(view.scale * 1) / 1 +
            " | Zoom " + view.zoom;
        coordsWidget.innerHTML = coords;
    }

    view.watch(["stationary"], function() {
        showCoordinates(view.center);
    });

    //*** Add event to show mouse coordinates on click and move ***//
    view.on(["pointer-down","pointer-move"], function(evt) {
        showCoordinates(view.toMap({ x: evt.x, y: evt.y }));
    });
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
