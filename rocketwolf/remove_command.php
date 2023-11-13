<?php
$dbFile = "commands.db"; // Path to your SQLite database file

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["remove_command"])) {
    $commandId = $_POST["remove_command"];

    try {
        $db = new SQLite3($dbFile);

        // Delete the selected command from the database
        $query = "DELETE FROM commands WHERE id = :commandId";
        $stmt = $db->prepare($query);
        $stmt->bindParam(":commandId", $commandId, SQLITE3_INTEGER);
        $stmt->execute();

        // Close the database connection
        $db->close();

        // Redirect back to the command list page after removing the command
        header("Location: commands.php");
        exit();
    } catch (Exception $e) {
        die("Error: " . $e->getMessage());
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Remove Command</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <header>
        <h1>Remove Command</h1>
    </header>
    <div class="container">
        <h2>Select a command to remove:</h2>
        <form method="POST" action="remove_command.php">
            <select name="remove_command" required>
                <?php
                try {
                    $db = new SQLite3($dbFile);

                    // Fetch the list of commands from the database
                    $query = "SELECT id, command_name FROM commands";
                    $result = $db->query($query);

                    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                        $commandId = $row["id"];
                        $commandName = $row["command_name"];
                        echo "<option value='$commandId'>$commandName</option>";
                    }

                    // Close the database connection
                    $db->close();
                } catch (Exception $e) {
                    die("Error: " . $e->getMessage());
                }
                ?>
            </select>
            <button type="submit" class="submit-button">Remove Command</button>
        </form>
    </div>
</body>
</html>