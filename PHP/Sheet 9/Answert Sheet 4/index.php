<?php
  require_once 'Connect.php';
  echo '<h2 style="color:green;">Record Added</h2>';
  $Query3 = 'select student_course.SID , student.FName , student.LName , student_course.CC 
              from student , student_course
              where student.StudentID = student_course.SID';
  $statment3= $conn->prepare($Query3);
  $statment3->execute();
  if($statment3)
  {
    echo '<table border=1>';
    while($table = $statment3->fetch(PDO::FETCH_ASSOC))
    {
      echo "<tr><td>";
      echo $table['SID'];
      echo"</td><td>";
      echo $table['FName'];
      echo"</td><td>";
      echo $table['LName'];
      echo"</td><td>";
      echo $table['CC'];
      echo"</td><td>";
      echo "<a href=grade.php?ID=" , (htmlentities($table['SID'])) , "&cource=" , urldecode(htmlentities($table['CC'])) , ">Grading</a></td></tr>";
    }
    echo '</table>';
    echo "<br>";
    echo "<a href='AddStudent.php'>Regester New Student</a><br><br>";
    echo "<a href='search.php'>Search</a><br><br>";
    echo "<a href='delete.php'>Delete</a><br><br>";
  }
?>