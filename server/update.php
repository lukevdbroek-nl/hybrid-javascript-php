<?php
// server/update.php
declare(strict_types=1);
error_reporting(0); // Hide PHP notices/warnings in JSON response

require_once __DIR__ . '/page.php';

header('Content-Type: application/json; charset=utf-8');

// Decode state from JS
$input = json_decode(file_get_contents('php://input'), true) ?: [];

// Build new virtual DOM
$newVDOM = app($input);

// Encode and send JSON
echo json_encode($newVDOM, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
exit;
