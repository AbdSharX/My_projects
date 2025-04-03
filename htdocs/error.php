<!DOCTYPE html>
<html lang="en">
<head>
<?php 
$website_title = "Ощибка не нашлась страница";
require "block/head.php" 
?>
</head>
<body>
   
        <?php require "block/header.php" ?>

        <main>
        <p>Ошибка! Страницы не существует перейдите на <a href="index.php">главную</a> страницу.</p>
        </main>

        <?php require "block/aside.php" ?>

        <?php require "block/footer.php" ?>
    
</body>
</html>