<?php
$name = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$text = $_POST['texto'];

$to = $email;
$subject = $name;
$txt = $email . "\r\n" . $telefono . "\r\n" . $text;
$headers = "From: info@antenasabaso.com\r\n";
$headers .= "Bcc: billyndavid@gmail.com\r\n";

$secret = "6LfAK-YUAAAAAH7Z0WtYaDdG1QBwPJJa6svUIhAC";

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
    $send = mail('antenasabaso@gmail.com', $subject, $txt, $headers);
} else {
// error
    $result['result'] = 0;
}

echo json_encode($result);
