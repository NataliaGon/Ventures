<?php	
	header("Content-Type: text/html; charset=UTF-8");
	header('Access-Control-Allow-Origin: *');
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);
	
	$errors = array();
    $form_data = array();
	$mass = array();	
	
		if ( empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['comments']) ) 
		{ 
			$errors['name'] = 'allerror';
		}  
		
		if (!empty($errors)) 
		{ 
			$form_data['success'] = false;
			$form_data['errors']  = $errors;
			$form_data['mass']  = $mass;
		} 
		else 
		{ 	
			$e = validateEmail($_POST['email']);
			$p = validatePhone($_POST['phone']);

			if ( !validateEmail($_POST['email']) )
			{
				$errors['name'] = 'emailfalse';
				$form_data['success'] = false;
				$form_data['errors'] = $errors;
			}
			/////////////////////////////////////////////
			if ( !validatePhone($_POST['phone']))
			{
				$errors['name'] = 'phonefalse';
				$form_data['success'] = false;
				$form_data['errors'] = $errors;
			}
			
			if ( validateEmail($_POST['email']) && validatePhone($_POST['phone']))
			{
				$form_data['success'] = true;
				$form_data['errors'] = $errors;	
				sendEmail('contact@journey-ventures.com');				
			
			}

		}		

	echo json_encode($form_data);
	
	function sendEmail($to) 
	{
		$subject ='Feedback form Journey Ventures';	
		
		$message ='Name:' . $_POST['name'] . "\r\n\r\n";
		$message .='Phone:' . $_POST['phone'] . "\r\n\r\n";
		$message .='Email:' . $_POST['email'] . "\r\n\r\n";
		$message .='Comments:' . $_POST['comments'] . "\r\n\r\n";		
		
		$message = '<html><body>';
		$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
		$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
		$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
		$message .= "<tr><td><strong>Phone:</strong> </td><td>" . strip_tags($_POST['phone']) . "</td></tr>";
		$message .= "<tr><td><strong>Comments:</strong> </td><td>" . strip_tags($_POST['comments']) . "</td></tr>";
		$message .= '</body></html>';
		
		$headers = "From: " . strip_tags($to) . "\r\n";	
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";			
		$send = mail($to, $subject, $message, $headers);
	}
	
	function validateEmail($email)
	{
		$emailIsValid = FALSE;
		if (!empty($email))
		{
			$domain = ltrim(stristr($email, '@'), '@') . '.';
			$user   = stristr($email, '@', TRUE);
			if( !empty($user) && !empty($domain) &&	checkdnsrr($domain)	)
			{
				$emailIsValid = TRUE;
			}
		}
		return $emailIsValid;
	}
	function validatePhone($phone)
	{
		$emailIsValid = FALSE;
		if (!empty($phone))
		{
			if (is_numeric($phone)) 
			{
				$emailIsValid = TRUE;
			}
		}
		return $emailIsValid;
	}
?>

