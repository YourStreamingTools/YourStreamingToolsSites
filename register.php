<?php
// start session
session_start();

// include database connection
require_once "db-connect.php";

// define variables and initialize with empty values
$username = $password = "";
$username_err = $password_err = "";

// set this variable to true or false depending on whether registration is enabled or not
$registration_enabled = true;

// process form data when the form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST" && $registration_enabled){

    // validate username
    if(empty(trim($_POST["username"]))){
        $username_err = "Please enter a username.";
    } else{
        // prepare a select statement
        $sql = "SELECT id FROM users WHERE username = ?";

        if($stmt = $conn->prepare($sql)){
            // bind variables to the prepared statement as parameters
            $stmt->bind_param("s", $param_username);

            // set parameters
            $param_username = trim($_POST["username"]);

            // attempt to execute the prepared statement
            if($stmt->execute()){
                // store result
                $stmt->store_result();

                if($stmt->num_rows == 1){
                    $username_err = "This username is already taken.";
                } else{
                    $username = trim($_POST["username"]);
                }
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }

            // close statement
            $stmt->close();
        }
    }

    // validate password
    if(empty(trim($_POST["password"]))){
        $password_err = "Please enter a password.";
    } else{
        $password = trim($_POST["password"]);
    }

    // check input errors before inserting into database
    if(empty($username_err) && empty($password_err)){

        // prepare an insert statement
        $sql = "INSERT INTO users (username, password, api_key, is_admin) VALUES (?, ?, ?, ?)";

        if($stmt = $conn->prepare($sql)){
            // bind variables to the prepared statement as parameters
            $stmt->bind_param("sssi", $param_username, $param_password, $param_api_key, $param_is_admin);

            // set parameters
            $param_username = $username;
            $param_password = password_hash($password, PASSWORD_DEFAULT); // creates a password hash
            $param_api_key = bin2hex(random_bytes(16)); // generate api key
            $param_is_admin = 0; // set is_admin to false

            // attempt to execute the prepared statement
            if($stmt->execute()){
                // redirect to login page
                header("location: login.php");
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }

            // close statement
            $stmt->close();
        }
    }

    // close connection
    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>YourListOnline - Sign Up</title>
    <link rel="icon" href="https://cdn.yourstreaming.tools/img/logo.png" type="image/png" />
    <link rel="apple-touch-icon" href="https://cdn.yourstreaming.tools/img/logo.png">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.yourstreaming.tools/css/style.css">
    <style type="text/css">
      body {
        font: 14px sans-serif;
      }
      .wrapper {
        width: 350px; padding: 20px;
      }
      a.popup-link {
        text-decoration: none;
        color: black;
        cursor: pointer;
      }
    </style>
</head>
<body>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="https://yourstreaming.tools/">YourStreamingTools</a>
            </div>
            <ul class="nav navbar-nav">
                <li><a href="index.php">Home</a></li>
                <li><a href="login.php">Login</a></li>
                <li class="active"><a href="register.php">Sign Up</a></li>
            </ul>
            <p class="navbar-text navbar-right">&copy; <?php echo date("Y"); ?> YourStreamingTools. All rights reserved.</a></p>
        </div>
    </nav>
    <div class="col-md-6">
        <h2>Sign Up</h2>
        <p>Please fill this form to create an account.</p>
        <?php if (!$registration_enabled) { echo '<div id="registration-error" style="color: red;">Registration is currently disabled.</div>'; } ?>
        <form action="register.php" method="post">
          <div class="form-group">
            <label>Username</label>
            <input type="text" name="username" class="form-control">
          </div>   
          <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" class="form-control">
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Submit">
            <input type="reset" class="btn btn-default" value="Reset">
          </div>
          <p>Already have an account? <a href="login.php">Login here</a>.</p>
        </form>
    </div>
</body>
</html>