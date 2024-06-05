<?php
session_start();
  echo "
  <table border='1px'>
    <tr>
      <th>Parameter</th>
      <th>Value</th>
    </tr>
    <tr>
      <td>First Name</td>
      <td>".$_SESSION['first']."</td>
    </tr>
    <tr>
      <td>Last Name</td>
      <td>".$_SESSION['last']."</td>
    </tr>
    <tr>
      <td>Email</td>
      <td>".$_SESSION['email']."</td>
    </tr>
    <tr>
      <td>Password</td>
      <td>".$_SESSION['pass']."</td>
    </tr>
  </table>
  ";
?>