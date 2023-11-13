<?php
$dbFile = "commands.db";

try {
    $db = new SQLite3($dbFile);

    // Fetch commands from the database
    $query = "SELECT command_name FROM commands";
    $result = $db->query($query);
} catch (Exception $e) {
    die("Error: " . $e->getMessage());
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Command List</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script>
        function copyToClipboard(text) {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert("Command copied to clipboard: " + text);
        }
    </script>
</head>
<body>
    <header>
        <h1>Command List</h1>
    </header>
    <div class="container">
        <input type="text" id="search" placeholder="Search commands...">
        <ul id="command-list">
            <?php
            // Display commands fetched from the SQLite database
            while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                $commandName = $row["command_name"];
                echo "<li>";
                echo $commandName;
                echo '<button onclick="copyToClipboard(\'' . $commandName . '\')">Copy</button>';
                echo "</li>";
            }
            ?>
        </ul>
    </div>
</body>
</html>
