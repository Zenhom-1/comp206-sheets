<?php
  require_once 'Connect.php';
  echo "<h2>Delete The ID Of Student</h2>";
  echo "<form method='post'>";
  echo "ID Delete: <input type='text' name='iddelete'value=''><br><br>";
  echo "<input type='submit' name='submitdelete'value='Delete'>";
  echo "</form>";

  if(isset($_POST['iddelete']))
  {
    $Query7 = 'delete from student where StudentID = :i';
    $statment7 = $conn->prepare($Query7);
    $statment7->execute(array(
      ':i' =>$_POST['iddelete']
    )
    );
  }
?>