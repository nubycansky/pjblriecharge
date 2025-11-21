<?php
session_start();

// SET ADMIN
$ADMIN_EMAIL = "admin@webku.com";
$ADMIN_PASS = "Admin123!";

if ($_POST['email'] === $ADMIN_EMAIL && $_POST['password'] === $ADMIN_PASS) {

    $_SESSION['admin_logged_in'] = true;
    echo "success";

} else {
    echo "error";
}
?>
