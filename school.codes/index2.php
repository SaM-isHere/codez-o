<?php

$name="samson";
$age=22;
$users=6;
$books=4;//integers
$dollars=59.99;//floats
$tax_rate=6;
$total=null;
$total=$users*$age;

echo "Hey {$name} you are {$age} years old <br>";
echo "There are {$users} users online <br>";
echo "There are only {$books} in the store <br>";
echo "The book costs \${$dollars}<br>";
echo "The tax rate is {$tax_rate}% <br>";
echo "{$users} users will cost \${$total} for the upload<br><hr/>";



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php.powered site</title>
</head>
<body>
    
    <hr/>
    <form action="index2.php" method="post">
        <label><b>USERNAME:</b></label><br>
    <input type="text" name="username"><br>
    <label><b>AGE:</b></label><br>
    <input type="text" name="age"><br>
    <label><b>EMAIL:</b></label><br>
    <input type="text" name="email"><br>
    <input type="submit" name="submit" value="Click to display">
    </form>
</body>
</html>
<?php
// include("OO.html");
if(isset($_POST["submit"])){
    $username = filter_input(INPUT_POST,"username",
    FILTER_VALIDATE_INT);
    $age = filter_input(INPUT_POST,"age",
    FILTER_VALIDATE_INT);
    $email = filter_input(INPUT_POST,"email",
    FILTER_VALIDATE_EMAIL);
    echo $username."<br>";
    echo "{$age} <br>";
    echo "Your email is: {$email}";     
}
?>
