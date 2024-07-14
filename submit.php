<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $fullName = htmlspecialchars(trim($_POST["fullName"]));
    $emailAddress = filter_var(trim($_POST["emailAddress"]), FILTER_SANITIZE_EMAIL);
    $mobileNumber = htmlspecialchars(trim($_POST["mobileNumber"]));
    $emailSubject = htmlspecialchars(trim($_POST["emailSubject"]));
    $messageBody = htmlspecialchars(trim($_POST["messageBody"]));

    // Validate email address
    if (!filter_var($emailAddress, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Set the recipient email address
    $to = "srivithya.pon@gmail.com";  // Replace with your email address

    // Create the email headers
    $headers = "From: " . $fullName . " <" . $emailAddress . ">\r\n";
    $headers .= "Reply-To: " . $emailAddress . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Compose the email content
    $emailContent = "Name: " . $fullName . "\n";
    $emailContent .= "Email: " . $emailAddress . "\n";
    $emailContent .= "Mobile: " . $mobileNumber . "\n";
    $emailContent .= "Message:\n" . $messageBody . "\n";

    // Send the email
    if (mail($to, $emailSubject, $emailContent, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request.";
}
?>
