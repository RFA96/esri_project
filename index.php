<?php session_start();?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Login</title>

        <link rel="stylesheet" href="assets/css/custom-login.css">
        <link rel="stylesheet" href="assets/vendor/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/vendor/sweetalert2/dist/sweetalert2.min.css">
        <link rel="icon" href="assets/img/icons/esri/favicon.ico" />
        <script src="assets/vendor/jquery/dist/jquery.min.js"></script>
        <script src="assets/vendor/popper/popper.min.js"></script>
        <script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/vuejs/vue.min.js"></script>
        <script src="assets/vendor/sweetalert2/dist/sweetalert2.min.js"></script>
    </head>
    <body>
        <div class="login-page">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 offset-lg-3">
                    <div class="form">
                        <img src="assets/img/brand/Esri_Indonesia_Logo.png" height="50">
                        <div id="component_title">
                            <titleapp></titleapp>
                        </div>
                        <hr class="line">
                        <?php
                            if(isset($_SESSION['error'])) {
                                if($_SESSION['error'] == 1) {
                                    ?>
                                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                            <strong>Error!</strong> Username or password is wrong, try again!
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    <?php
                                }
                                unset($_SESSION['error']);
                            }

                            if(isset($_SESSION['error_message'])) {
                                ?>
                                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <?= $_SESSION['error_message']; unset($_SESSION['error_message']);?>
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                <?php
                            }
                        ?>
                        <form action="action/login.php" method="post" class="login-form" enctype="multipart/form-data">
                            <input type="text" id="username" name="username" placeholder="Username" />
                            <input type="password" id="password" name="password" placeholder="Password" />
                            <input type="submit" id="btn_login" value="Login" class="button">
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <script>
            Vue.component('titleapp', {
                template: '<p class="text1" style="margin-top: 15px">Indonesia Earthquake Dashboard</p>'
            });
            var vm = new Vue({
                el: '#component_title'
            });
        </script>
    </body>
</html>
