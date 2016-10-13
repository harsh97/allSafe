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
  die("No allSafe");
}
$sql="select * from user";
$result=$conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "NAme: " . $row["username"]. " - password: " . $row["password"]. " " ."<br>";
    }
$user='"'.$_POST["username"].'"';
$sql="select password from user where username=$user";
echo "$sql";
$result=$conn->query($sql);
if($result->num_rows > 0)
{
  $row=$result->fetch_assoc();
  if($row["password"]==$_POST["password"])
  {
    echo "\n LOGGED IN BITCH";
  }
}


} else {
    echo "0 results";
}
$conn->close();
?>
