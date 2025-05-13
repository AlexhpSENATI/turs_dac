<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// header("Access-Control-Allow-Origin: http://localhost:3002");
// header("Access-Control-Allow-Headers: Content-Type");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Methods: GET, POST, DELETE");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "turismo_yanahuanca";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Obtener todas las reservas
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM reservas";
    $result = $conn->query($sql);

    $reservas = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $reservas[] = $row;
        }
    }
    echo json_encode($reservas);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $lugar = $data['lugar'];
    $nombre = $data['nombre'];
    $apellido = $data['apellido'];
    $celular = $data['celular'];
    $email = $data['email'];
    $fecha_salida = $data['fecha_salida'];
    $adultos = $data['adultos'];
    $paquete = $data['paquete'];
    $precio_total = $data['precio_total'];

    $stmt = $conn->prepare("INSERT INTO reservas (lugar, nombre, apellido, celular, email, fecha_salida, adultos, paquete, precio_total) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssisd", $lugar, $nombre, $apellido, $celular, $email, $fecha_salida, $adultos, $paquete, $precio_total);

    if ($stmt->execute()) {
        echo json_encode(array("message" => "Reserva creada exitosamente."));
    } else {
        echo json_encode(array("message" => "Error al crear reserva."));
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'] ?? null;
    
    if (!$id) {
        http_response_code(400);
        echo json_encode(["message" => "ID no proporcionado"]);
        exit();
    }

    $stmt = $conn->prepare("DELETE FROM reservas WHERE id = ?");
    $stmt->bind_param("i", $id);
    
    if ($stmt->execute()) {
        echo json_encode(["message" => "Reserva eliminada exitosamente"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Error al eliminar reserva: " . $conn->error]);
    }
    exit();
}

$conn->close();
