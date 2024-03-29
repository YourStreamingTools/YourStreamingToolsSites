<?php
$dbFile = "commands.db"; // Path to your SQLite database file

try {
    $db = new SQLite3($dbFile);

    // Create the "commands" table if it doesn't exist
    $queryCreateTable = "
        CREATE TABLE IF NOT EXISTS commands (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            command_name TEXT NOT NULL,
            response TEXT
        )
    ";
    $db->exec($queryCreateTable);

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Check if the form was submitted
        if (isset($_POST["command_name"]) && !empty($_POST["command_name"])) {
            $commandName = $_POST["command_name"];

            // Insert the new command into the database
            $queryInsert = "INSERT INTO commands (command_name) VALUES (:commandName)";
            $stmt = $db->prepare($queryInsert);
            $stmt->bindParam(":commandName", $commandName, SQLITE3_TEXT);
            $stmt->execute();

            // Close the database connection
            $db->close();

            // Redirect back to the command list page after adding the command
            header("Location: add_command.php");
            exit();
        }
    }
} catch (Exception $e) {
    die("Error: " . $e->getMessage());
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Add Command</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <header>
        <h1>Add Command</h1>
    </header>
    <div class="container">
        <form method="POST" action="add_command.php">
            <label for="command_name">Command Name:</label>
            <input type="text" id="command_name" name="command_name" required>
            <button type="submit" class="submit-button">Add Command</button>
        </form>
    </div>
</body>
</html>