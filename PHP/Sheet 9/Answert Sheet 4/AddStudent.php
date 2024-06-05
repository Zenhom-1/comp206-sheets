<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <h2>Regrsetr A New Student</h2>
    <form method="post"  action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
      First Name : <input type="text" value="" name="first"><br><br>
      Last Name : <input type="text" value="" name="Last"><br><br>
      Email : <input type="email" value="" name="email"><br><br>
      <select name="cources[]" size="3" multiple>
        <option>Comp102</option>
        <option>Comp104</option>
        <option>Comp206</option>
      </select><br><br>
      <input type="submit" value="Regestier" name="submit">
      <a href="AddStudent.php">Cancel</a>
    </form>
    <?php
      require_once 'Connect.php';
      if(isset($_POST['submit']) )
        {
          $Query1 = 'insert into student (FName,LName,Email) Values (:first,:last,:email)';
          $Stamtment = $conn->prepare($Query1);
          $Stamtment ->execute(array(
            ':first' => $_POST['first'],
            ':last' => $_POST['Last'],
            ':email' => $_POST['email']
          )
          );
          $id = $conn->lastInsertId();

          $cource = $_POST['cources'];
          foreach($cource as $c)
          {
            $Query2 = 'insert into student_course (SID,CC) Values (:id , :c)';
            $Stamtment2 = $conn->prepare($Query2);
            $Stamtment2->execute(array(
              ':id' => $id,
              ':c' =>$c
            )
            );
          }
        }
    ?>
  </body>
</html>