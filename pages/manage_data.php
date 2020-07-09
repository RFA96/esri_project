<?php include "../session.php";?>
<!doctype html>
<html lang="en">
    <head>
        <?php include "../partials/assets_css.php";?>
        <title>Manage Data</title>
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
                                <h6 class="h2 text-white d-inline-block mb-0">Manage Earthquake Data</h6>
                                <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                                    <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                                        <li class="breadcrumb-item active"><a href="#">Manage Data</a></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid mt--6">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-header bg-transparent">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h6 class="text-uppercase text-muted ls-1 mb-1">Data</h6>
                                    <h5 class="h3 mb-0">Indonesia Earthquake Data</h5>
                                </div>
                                <div class="col">
                                    <ul class="nav nav-pills justify-content-end">
                                        <li class="nav-item mr-2 mr-md-0">
                                            <a href="../action/redirect_form.php?formAction=create" class="btn btn-success"><i class="fas fa-plus-square" style="margin-right: 10px"></i> Add Data</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <?php
                                if(isset($_SESSION['status'])) {
                                    if($_SESSION['status'] == 'success') {
                                        ?>
                                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                <strong><?= ucfirst($_SESSION['status'])?>!</strong> <?= $_SESSION['message'];?>
                                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                        <?php
                                    }

                                    unset($_SESSION['status']); unset($_SESSION['message']);
                                }
                            ?>
                            <table style="width: 100%;margin-top: 30px" id="earthquakeTableList" class="table table-hover table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>Latitude</th>
                                        <th>Longitude</th>
                                        <th>Mag (SR)</th>
                                        <th>Depth (km)</th>
                                        <th>Place</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php include "../partials/assets_js.php";?>
        <script>
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
                        {
                            "mRender": function (data, type, row, meta) {
                                return '<center>' +
                                            '<a href="../action/redirect_form.php?id='+row['id']+'&objectId='+row['ObjectId']+'&formAction=edit" class="btn btn-sm btn-info"><span class="fas fa-edit"></span> Edit</a>' +
                                            '<a href="../action/redirect_form.php?objectId='+row['ObjectId']+'&formAction=delete" class="btn btn-sm btn-danger" id="deleteData"><span class="fas fa-trash"></span> Delete</a>' +
                                       '</center>'
                            }
                        }
                    ]
                });
            });

            $(document).on('click', '#deleteData', function (e) {
                let deleteConfirmationMessage = 'Are you sure want to delete this data?';
                return confirm(deleteConfirmationMessage);
            })
        </script>
    </body>
</html>
