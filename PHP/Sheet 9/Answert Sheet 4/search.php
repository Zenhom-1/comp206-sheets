<?php
  require_once 'Connect.php';
  echo "<h2>Search The StudentID have mark >= 80 In The Course</h2>";
  $Query6 = 'select student_course.SID , student_course.CC ,cource.CrHour, student_course.Mark
                from student_course , cource
                where Mark >=80 and student_course.CC = cource.CourceCode';
  $statment6 = $conn->prepare($Query6);
  $statment6 ->execute();
  if($statment6)
  {
    echo '<table border=1>';
    while($table1 =$statment6->fetch(PDO::FETCH_ASSOC))
    {
      echo "<tr><td>";
      echo $table1['SID'];
      echo "</td><td>";
      echo $table1['CC'];
      echo "</td><td>";
      echo $table1['CrHour'];
      echo "</td><td>";
      echo $table1['Mark'];
      echo "</td></tr>";
    }
    echo '</table>';
  }
?>