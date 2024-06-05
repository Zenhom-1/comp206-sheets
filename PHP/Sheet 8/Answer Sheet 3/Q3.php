<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>temperature</title>
  </head>
  <body>
    <?php
    $error= $new_degree = $new_temperature = $conversions = "";
    if(empty($_POST['degree']))
    {
        $error="Enter the number Degree";
    }
    else
    {
        $new_degree=$_POST['degree'];
        $new_temperature=$_POST['temperature'];
    }
    if($new_temperature=="Fahrenheit")
    {
        $conversions=(1.8*$new_degree)+32;
        $conversions=$conversions." F";
    }
    else if($new_temperature=="Kelvin")
    {
        $conversions=$new_degree+273.15;
        $conversions=$conversions." K";
    }
    ?>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])?>">
      Enter temperature: <input type="text" name="degree" value="<?php  if(isset($degree)) echo $degree; ?>"><br>
      <p>
            <?php
            echo $conversions.$error;
            ?>
      </p>
      <input type="submit" value="Fahrenheit" name="temperature">
      <input type="submit" value="Kelvin" name="temperature">
    </form>
  </body>
</html>