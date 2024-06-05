<?php
  require_once 'config.php';
  try
  {
    $conn=new PDO("mysql:host=$servername; dbname=$db",$username,$password);
    //echo "Connected To The $db Successfully!";
  }
  catch(PDOException $e)
  {
    echo "Connect Failed: " . e->getMessage();
  }

?>