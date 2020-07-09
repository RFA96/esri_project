<?php
    include "../session.php";
?>
<!doctype html>
<html lang="en">
    <head>
        <?php
            include "../partials/assets_css.php";
            if(isset($_SESSION['formAction'])) {
                if($_SESSION['formAction'] == 'create') {
                    echo "<title>Add Earthquake Data</title>";
                } else {
                    echo "<title>Edit Earthquake Data</title>";
                }
            } else {
                header("Location: 500_error.php");
            }
        ?>

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
                                <h6 class="h2 text-white d-inline-block mb-0">Form Earthquake Data</h6>
                                <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                                    <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                                        <li class="breadcrumb-item active"><a href="manage_data.php">Manage Data</a></li>
                                        <?php
                                            if($_SESSION['formAction'] == 'create') {
                                                echo '<li class="breadcrumb-item active"><a href="#">Add Data</a></li>';
                                            } else {
                                                echo '<li class="breadcrumb-item active"><a href="#">Edit Data</a></li>';
                                            }
                                        ?>
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
                                    <h6 class="text-uppercase text-muted ls-1 mb-1">Form</h6>
                                    <?php
                                        if($_SESSION['formAction'] == 'create') {
                                            echo '<h5 class="h3 mb-0">Add Earthquake Data</h5>';
                                        } else {
                                            echo '<h5 class="h3 mb-0">Edit Earthquake Data</h5>';
                                        }
                                    ?>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <?php
                                if($_SESSION['formAction'] == 'create') {
                                    ?>
                                        <form action="../action/earthquake.php?crud=create" method="post" enctype="multipart/form-data">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="example3cols1Input">Latitude</label>
                                                        <input type="text" class="form-control" name="latitude">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="example3cols1Input">Longitude</label>
                                                        <input type="text" class="form-control" name="longitude">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="example3cols1Input">Magnitude (SR)</label>
                                                        <input type="text" class="form-control" name="mag">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="example3cols1Input">Depth (km)</label>
                                                        <input type="text" class="form-control" name="depth">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="example3cols1Input">Location</label>
                                                        <input type="text" class="form-control" name="place">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="example3cols1Input">Date and Time</label>
                                                        <input type="datetime-local" value="<?= date('Y-m-d').'T'.date('H:i')?>" id="example-datetime-local-input" class="form-control" name="time">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 text-center">
                                                    <input type="submit" class="btn btn-success" value="ADD DATA">
                                                    <a href="manage_data.php" class="btn btn-danger" onclick="return confirm('Discard changes?')">CANCEL</a>
                                                </div>
                                            </div>
                                        </form>
                                    <?php
                                } else {
                                    if(isset($_SESSION['id'])) {
                                        $sqlFetchEarthquake = $conn->prepare("SELECT * FROM master_earthquake_indonesia WHERE id = :id");
                                        $sqlFetchEarthquake->bindParam(':id', $_SESSION['id']);
                                        $sqlFetchEarthquake->execute();
                                        $rowFetchEarthquake = $sqlFetchEarthquake->fetchAll(PDO::FETCH_ASSOC);
                                    } else {
//                                        header("Location: 500_error.php");
                                    }
                                    ?>
                                        <form action="../action/earthquake.php?crud=edit" method="post" enctype="multipart/form-data">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="example3cols1Input">Latitude</label>
                                                        <input type="text" class="form-control" name="latitude" value="<?= $rowFetchEarthquake[0]['latitude']?>">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="example3cols1Input">Longitude</label>
                                                        <input type="text" class="form-control" name="longitude" value="<?= $rowFetchEarthquake[0]['longitude']?>">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="example3cols1Input">Magnitude (SR)</label>
                                                        <input type="text" class="form-control" name="mag" value="<?= $rowFetchEarthquake[0]['mag']?>">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="example3cols1Input">Depth (km)</label>
                                                        <input type="text" class="form-control" name="depth" value="<?= $rowFetchEarthquake[0]['depth']?>">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="example3cols1Input">Location</label>
                                                        <input type="text" class="form-control" name="place" value="<?= $rowFetchEarthquake[0]['place']?>">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="example3cols1Input">Date and Time</label>
                                                        <input type="datetime-local" value="<?php $dateNew = date('Y-m-d', strtotime($rowFetchEarthquake[0]['time'])).'T'.date('H:i', strtotime($rowFetchEarthquake[0]['time'])); echo $dateNew;?>" id="example-datetime-local-input" class="form-control" name="time">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 text-center">
                                                    <?php
                                                        if($_SESSION['formAction'] == 'create') {
                                                            ?>
                                                                <input type="submit" class="btn btn-success" value="ADD DATA" onclick="return confirm('Are you sure want to submit this data?')">
                                                            <?php
                                                        } else {
                                                            ?>
                                                                <input type="submit" class="btn btn-success" value="EDIT DATA" onclick="return confirm('Are you sure want to submit this data?')">
                                                            <?php
                                                        }
                                                    ?>
                                                    <a href="manage_data.php" class="btn btn-danger" onclick="return confirm('Discard changes?')">CANCEL</a>
                                                </div>
                                            </div>
                                        </form>
                                    <?php
                                }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php /*unset($_SESSION['formAction']) ;*/include "../partials/assets_js.php";?>
    </body>
</html>
