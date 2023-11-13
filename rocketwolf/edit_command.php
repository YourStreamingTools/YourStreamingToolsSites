<?php
$dbFile = "commands.db"; // Path to your SQLite database file

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["edit_command"])) {
    $commandId = $_POST["edit_command"];

    try {
        $db = new SQLite3($dbFile);

        // Fetch the selected command from the database
        $query = "SELECT id, command_name, response FROM commands WHERE id = :commandId";
        $stmt = $db->prepare($query);
        $stmt->bindParam(":commandId", $commandId, SQLITE3_INTEGER);
        $result = $stmt->execute();

        if ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $commandId = $row["id"];
            $commandName = $row["command_name"];
            $response = $row["response"];
        } else {
            // Redirect back to the command list page if the command was not found
            header("Location: commands.php");
            exit();
        }

        // Close the database connection
        $db->close();
    } catch (Exception $e) {
        die("Error: " . $e->getMessage());
    }
} elseif ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["update_command"])) {
    $commandId = $_POST["update_command"];
    $updatedCommandName = $_POST["updated_command_name"];
    $updatedResponse = $_POST["updated_response"];

    try {
        $db = new SQLite3($dbFile);

        // Update the selected command in the database
        $query = "UPDATE commands SET command_name = :updatedCommandName, response = :updatedResponse WHERE id = :commandId";
        $stmt = $db->prepare($query);
        $stmt->bindParam(":commandId", $commandId, SQLITE3_INTEGER);
        $stmt->bindParam(":updatedCommandName", $updatedCommandName, SQLITE3_TEXT);
        $stmt->bindParam(":updatedResponse", $updatedResponse, SQLITE3_TEXT);
        $stmt->execute();

        // Close the database connection
        $db->close();

        // Redirect back to the command list page after updating the command
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
    <title>Edit Command</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <header>
        <h1>Edit Command</h1>
    </header>
    <div class="container">
        <?php if (isset($commandId)) : ?>
            <h2>Edit Command</h2>
            <form method="POST" action="edit_command.php">
                <input type="hidden" name="update_command" value="<?php echo $commandId; ?>">
                <label for="updated_command_name">Updated Command Name:</label>
                <input type="text" id="updated_command_name" name="updated_command_name" value="<?php echo $commandName; ?>" required>
                <label for="updated_response">Updated Response:</label>
                <textarea id="updated_response" name="updated_response" required><?php echo $response; ?></textarea>
                <button type="submit">Update Command</button>
            </form>
        <?php else : ?>
            <h2>Select a command to edit:</h2>
            <form method="POST" action="edit_command.php">
                <select name="edit_command" required>
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
                <button type="submit" class="submit-button">Edit Command</button>
            </form>
        <?php endif; ?>
    </div>
</body>
</html>
