<?php
/* use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Asegúrate de que esta ruta sea correcta
 */
/* if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $apellido = htmlspecialchars($_POST['apellido']);
    $email = htmlspecialchars($_POST['email']);
    $ciudad = htmlspecialchars($_POST['ciudad']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.tu-servidor.com'; // Cambia esto a tu servidor SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'tu-correo@example.com'; // Tu correo
        $mail->Password = 'tu-contraseña'; // Tu contraseña
        $mail->SMTPSecure = 'tls'; 
        $mail->Port = 587;

        // Configuración del correo
        $mail->setFrom($email, "$nombre $apellido");
        $mail->addAddress('ferneyvallejogonzalez@gmail.com');

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = "Nuevo mensaje de contacto de $nombre $apellido";
        $mail->Body    = "Nombre: $nombre<br>Apellido: $apellido<br>Email: $email<br>Ciudad: $ciudad<br>Mensaje:<br>$mensaje";
        $mail->AltBody = "Nombre: $nombre\nApellido: $apellido\nEmail: $email\nCiudad: $ciudad\nMensaje:\n$mensaje";

        $mail->send();
        echo 'Mensaje enviado con éxito.';
    } catch (Exception $e) {
        echo "Error al enviar el mensaje: {$mail->ErrorInfo}";
    }
} else {
    echo "Método de solicitud no válido.";
} */
if (isset($_POST['enviar'])) {
    if (!empty($_POST['nombre']) && !empty($_POST['apellido']) && !empty($_POST['email']) && !empty($_POST['ciudad']) && !empty($_POST['mensaje'])) {
        $nombre = htmlspecialchars($_POST['nombre']);
        $apellido = htmlspecialchars($_POST['apellido']);
        $email = htmlspecialchars($_POST['email']);
        $ciudad = htmlspecialchars($_POST['ciudad']);
        $mensaje = htmlspecialchars($_POST['mensaje']);

        $header = "From: ferneyvallejogonzalez@gmail.com" . "\r\n";
        $header .= "Reply-To: ferneyvallejogonzalez@gmail.com" . "\r\n";
        $header .= "X-Mailer: PHP/" . phpversion();

        $asunto = "Mensaje de contacto de $nombre $apellido";
        $cuerpoMensaje = "Nombre: $nombre\nApellido: $apellido\nEmail: $email\nCiudad: $ciudad\nMensaje: $mensaje";

        $mail = mail($email, $asunto, $cuerpoMensaje, $header);

        if ($mail) {
            echo "<h4>¡Mail enviado exitosamente!</h4>";
        }
    }
}
