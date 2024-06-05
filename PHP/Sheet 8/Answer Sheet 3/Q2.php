<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <?php
    $one='';
    $two='';
    $result='';
    if(isset($_POST['one']))
    $one=$_POST['one'];
    if(isset($_POST['two']))
    $two=$_POST['two'];
    if(is_numeric($one)&&is_numeric($two))
    {
      if(isset($_POST['add']))
      $result=$one+$two;
      if(isset($_POST['minus']))
      $result=$one-$two;
      if(isset($_POST['multiply']))
      $result=$one*$two;
      if(isset($_POST['division']))
      $result=$one/$two;
      if(isset($_POST['mod']))
      $result=$one%$two;
    }
    else 
    {
      $result = "Please enter valid numbers for both fields.";
    }
    ?>
    <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
      <label>X=</label>
      <input type="number" name="one" value="<?php if(isset($_POST['one'])) echo $_POST['one']; ?>">
      <br>
      <br>
      <label>y=</label>
      <input type="number" name="two" value="<?php if(isset($_POST['two'])) echo $_POST['two']; ?>">
      <br>
      <br>
      <span>Result = <?php echo $result;?></span>
      <br><br>
      <input type="submit" value="+" name="add">
      <input type="submit" value="-" name="minus">
      <input type="submit" value="*" name="multiply">
      <input type="submit" value="/" name="division"> 
      <input type="submit" value="%" name="mod">
    </form>
    
  </body>
</html>