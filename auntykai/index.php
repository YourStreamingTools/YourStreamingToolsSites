<!DOCTYPE html>
<html lang="en">
<head>

  <!-- Page Information -->
  <meta charset="utf-8">
  <title>AKAuntyKai Links</title>
  <meta name="description" content="Find us online!">
  <meta name="author" content="AKAuntyKair">
  
  <!-- Mobile Specific Metas -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- FONT -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap" rel="stylesheet">
  
  <!-- CSS -->
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/skeleton-dark.css">
  <link rel="stylesheet" href="css/brands.css">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="logo.png">

</head>
<body>

  <!-- Primary Page Layout -->
  <div class="container">
    <div class="row">
      <div class="column" style="margin-top: 10%">

        <!-- Your Image Here -->
        <img src="logo.png" srcset="logo.png 4x" alt="GFA Logo">

        <!-- Title -->
        <h1>AKAuntyKai</h1>

        <!-- Short Bio -->
        <p></p>
        <?php
        foreach ($row as $platform => $url) {
            if ($url !== null) {
                $platformIcon = strtolower($platform) . '.svg';
                $platformLabel = ucfirst($platform);
        
                echo '<a class="button button-', $platform, '" href="', $url, '" target="_blank" rel="noopener">';
                echo '<img class="icon" src="https://cdn.yourstreaming.tools/sites/icons/', $platformIcon, '" alt="', $platformLabel, ' Logo">';
                echo $platformLabel, '</a><br>';
            }
        }
        ?>
        <br>
        <br>
        <p>&copy; <?php date_default_timezone_set("Europe/London");?><?=date("Y");?>, AuntyKai</p>
          
      </div>
    </div>
  </div>
</body>
</html>
