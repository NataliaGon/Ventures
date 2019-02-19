<!DOCTYPE html>
<html>
<body>

<?php
 if (isset($_POST['sent'])){
     $to ='journeyventures2019@gmail.com';
     $subject ='Feedback form Journey Ventures';
     $message .='Name:' . $_POST['name'] . "\r\n\r\n";
     $message .='Phone:' . $_POST['phone'] . "\r\n\r\n";
     $message .='Email:' . $_POST['email'] . "\r\n\r\n";
     $message .='Comments:' . $_POST['comments'] . "\r\n\r\n";
    
     echo $message;
 }
?>
<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "doctype.dtd"> 
<html xmlns="w3org1999xhtml"> 
  <head> 
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
    <title>Title of Page</title> 
  </head> 
  <body></body> 
</html>  -->
</body>
</html>