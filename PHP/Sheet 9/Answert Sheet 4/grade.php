<?php
  require_once 'Connect.php';
  echo "Grading a Student With Id = " , htmlentities($_GET["ID"]) , " in The Cource " , htmlentities($_GET["cource"]);
  echo('<form method="POST">');
  echo('<br>') ; 
  echo( 'Mark : <input type="number" name="mark" >') ; 
  echo('<br><br>') ; 
  echo('<input type="submit" name="submit" value="Update" >');
  echo('<a href="grade.php"> Cancel</a>') ; 
  echo('</form>') ; 
  if(isset($_POST['mark']))
  {
    $updatemark = 'update student_course
                  set Mark = :M
                  where SID = :id and CC=:course';
    $statment5 = $conn->prepare($updatemark);
    $statment5->execute(array(
      ':M' => $_POST['mark'],
      ':id' => htmlentities($_GET["ID"]),
      ':course' => htmlentities($_GET["cource"])
  )
  );
  if($statment5->execute()){
    echo "Student mark have been updated successfully" ; 
  }
  }
?>