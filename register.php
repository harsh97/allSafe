<?php
$servername = "localhost";
$username = "admin";
$password = "admin";
$sql="use allSafe";
$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if(!$conn->query($sql))
{
}
$username='"'.$_POST["username"].'"';
$password='"'.$_POST["password"].'"';
$email='"'.$_POST["email"].'"';
$sql="insert into user (username,password,email) values($username,$password,$email)";
echo "$sql";
if(!$conn->query($sql))
{
  echo "not able to insert your data";
}
