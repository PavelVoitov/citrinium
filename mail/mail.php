<?php
/**
 * This example shows sending a message using PHP's mail() function.
 */
require 'phpmailer/PHPMailerAutoload.php';
//Create a new PHPMailer instance
$mail = new PHPMailer;
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) ) {
	//Important - UPDATE YOUR RECEIVER EMAIL ID, NAME AND SUBJECT
		
	// Please enter your email ID 	
	$to_email = 'voitovpavelpost@gmail.com';
	// Please enter your name		
	$to_name ="Paul Credo";
	// Please enter your Subject

	$subject="Новая запись - Цитриниум";
	$sender_name = $_POST['name'];
	$from_mail = $_POST['email'];
	$sender_message = $_POST['message'];
	$mail->CharSet  = 'UTF-8';                             // the same as 'utf-8'
	$mail->SetFrom( "booking@citrinium.by" , $sender_name );
	$mail->AddAddress( $to_email , $to_name );
	$mail->Subject = $subject;
	$mail->isHTML(true);                                  // Set email format to HTML

	
	$received_content = "<div>ИМЯ : ".$sender_name."</div> <div> ТЕЛЕФОН : ".$from_mail."</div> <div> КОММЕНТАРИЙ: ".$sender_message."</div>";
	$mail->Body = $received_content;
	
	echo $mail->Send();
	exit;	
}