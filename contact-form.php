<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Your email address where notifications will be sent
    $to = "your-email@example.com";

    // Subject of the email
    $subject = "New Contact Form Submission from: $name";

    // Message Body
    $message = "
    <html>
    <head>
    <title>Contact Form Submission</title>
    </head>
    <body>
    <p><strong>Name:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    </body>
    </html>
    ";

    // Headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: no-reply@yourwebsite.com" . "\r\n";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for contacting us, we will get back to you soon!";
    } else {
        echo "There was an error sending your message, please try again.";
    }
}
?>