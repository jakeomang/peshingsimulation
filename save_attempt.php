<?php

header("Content-Type: application/json");

$host = "localhost";
$username = "root";
$password = "";
$database = "school_phishing_demo";

$conn = new mysqli(
    $host,
    $username,
    $password,
    $database
);

if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "message" => "Database connection failed."
    ]);

    exit;
}

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$email = trim(
    $data["email"] ?? ""
);

if ($email === "") {
    echo json_encode([
        "success" => false,
        "message" => "Demo email is required."
    ]);

    exit;
}

/*
    Fixed simulation value.
    The password typed by the user is never sent here.
*/
$demoPassword = "DemoPass123";

$stmt = $conn->prepare(
    "INSERT INTO login_attempts
    (demo_email, password_status)
    VALUES (?, ?)"
);

$stmt->bind_param(
    "ss",
    $email,
    $demoPassword
);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Simulation recorded."
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Unable to save simulation."
    ]);
}

$stmt->close();
$conn->close();

?>