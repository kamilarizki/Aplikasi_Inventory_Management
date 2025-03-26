<?php
include 'db.php';

$query = "SELECT name, quantity FROM inventory";
$result = $conn->query($query);

$inventory = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $inventory[] = $row;
    }
}

echo json_encode($inventory);

$conn->close();
?>