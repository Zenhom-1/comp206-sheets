<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <?php
    session_start();
    $first = $last = $email = $pass = "";
    $errorfirst = $errorlast = $erroremail = $errorpass = $error = "";
    $Counter=0;
    if (isset($_POST['submit'] ) )
    {
      if(empty($_POST['FirstName']))
      {
        $errorfirst="first name is required";
        $Counter++;
      }
      else
      {
        $first=filter_var($_POST["FirstName"],FILTER_SANITIZE_STRING);
      }
      if(empty($_POST['LastName']))
      {
        $errorlast="last name is required";
        $Counter++;
      }
      else
      {
        $last=filter_var($_POST["LastName"],FILTER_SANITIZE_STRING);
      }
      if(empty($_POST['Email']))
      {
        $erroremail="email is required!";
        $Counter++;
      }
      else
      {
        $email=filter_var($_POST["Email"],FILTER_VALIDATE_EMAIL);
      }
      if(empty($_POST['passWord']))
      {
        $errorpass="password is required!";
        $Counter++;
      }
      else
      {
        $pass=$_POST["passWord"];
      }
      if($Counter)
      {
        $error = "Required Field";
      }
      else
      {
        $_SESSION["first"] = $first;
        $_SESSION["last"] = $last;
        $_SESSION["email"] = $email;
        $_SESSION["pass"] = $pass;
        header("location: Q11.php");
      }
    }
    ?>
    <h2>Question one</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
      <span style="color:red;"><?php echo $error; ?></span>
      <br>
      First Name: <input type="text" name="FirstName" value="<?php echo $first?>" placeholder="Enter Your First Name" style="margin-left:5px;">
      <span style="color:red;"><?php echo $errorfirst; ?></span>
      <br><br> 
      Last Name: <input type="text" name="LastName" value="<?php echo $last?>" placeholder="Enter Your Last Name" style="margin-left:7px;">
      <span style="color:red;"><?php echo $errorlast; ?></span>
      <br><br>
      Email: <input type="email" name="Email" value="<?php echo $email?>" placeholder="Enter Your Email"style="margin-left:39px;">
      <span style="color:red;"><?php echo $erroremail; ?></span>
      <br><br>
      PassWord: <input type="passWord" name="passWord" value="<?php echo $pass?>" placeholder="Enter Your PassWord" style="margin-left:14px;">
      <span style="color:red;"><?php echo $errorpass; ?></span>
      <br>
      <input type="submit" name="submit" value="submit"style="margin-left:85px;">
      <br><br>
    </form>
    
  </body>
</html>