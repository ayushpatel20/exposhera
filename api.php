<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Admin authorization matching admin.html credentials
define('ADMIN_USER', 'admin');
define('ADMIN_PASS', 'Exposhera@2026');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Read JSON input payload
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if (!$data) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Invalid JSON payload"]);
        exit;
    }

    // Auth verification
    $user = isset($data['username']) ? $data['username'] : '';
    $pass = isset($data['password']) ? $data['password'] : '';

    if ($user !== ADMIN_USER || $pass !== ADMIN_PASS) {
        http_response_code(401);
        echo json_encode(["status" => "error", "message" => "Unauthorized Access"]);
        exit;
    }

    $content = isset($data['content']) ? $data['content'] : null;

    if (!$content) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "No content data provided"]);
        exit;
    }

    // Write content to content.json file
    $result = file_put_contents('content.json', json_encode($content, JSON_PRETTY_PRINT));

    if ($result === false) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to save content to disk"]);
        exit;
    }

    echo json_encode(["status" => "success", "message" => "Content updated successfully"]);
    exit;
}

http_response_code(405);
echo json_encode(["status" => "error", "message" => "Method not allowed"]);
