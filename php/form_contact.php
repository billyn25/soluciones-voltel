<?php
$name = trim($_POST['nombre']);
$email = trim($_POST['email']);
$telefono = trim($_POST['telefono']);
$text = trim($_POST['texto']);
$empresa = trim($_POST['empresa']);
$servicio = trim($_POST['servicio']);

$to = $email;
$subject = "consulta de " . $name;
if (empty($_POST["servicio"])) {
    $txt = "\r\n email: " . $email . "\r\n telefono: " . $telefono . "\r\n empresa: " . $empresa . "\r\n texto: " . $text;
} else {
    $txt = "\r\n email: " . $email . "\r\n telefono: " . $telefono . "\r\n empresa: " . $empresa . "\r\n servicio: " . $servicio. "\r\n texto: " . $text;
}
$headers = "From: administracion@solucionesvoltel.com\r\n";
$headers .= "Bcc: billyndavid@gmail.com\r\n";

$secret = "6LdF2-gUAAAAAHd0ZlLnhhpD9zJA35e4u4hJ6ia-";

if (isset($_POST['g-recaptcha-response'])) {
    $captcha = $_POST['g-recaptcha-response'];
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = array(
        'secret' => $secret,
        'response' => $captcha,
        'remoteip' => $_SERVER['REMOTE_ADDR']
    );

    $curlConfig = array(
        CURLOPT_URL => $url,
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POSTFIELDS => $data
    );

    $ch = curl_init();
    curl_setopt_array($ch, $curlConfig);
    $response = curl_exec($ch);
    curl_close($ch);
}

$jsonResponse = json_decode($response);

if ($jsonResponse->success === true) {
    $result['result'] = 1;
    $send = mail('administracion@solucionesvoltel.com', $subject, $txt, $headers);
} else {
// error
    $result['result'] = 0;
}

echo json_encode($result);
