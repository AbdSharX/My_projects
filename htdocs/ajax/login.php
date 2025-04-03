<?php

        $login = trim(filter_var($_POST['login']), FILTER_SANITIZE_SPECIAL_CHARS);
        $pass = trim(filter_var($_POST['pass']), FILTER_SANITIZE_SPECIAL_CHARS);

        $error = '';

        if(strlen($login) < 3)
            $error = 'Введите логин!';
        else if(strlen($pass) < 5)
            $error = 'Введите пароль!';

        if($error != '') {
            echo $error;
            exit();
        }

         require_once "../db.php";

          $sql = "SELECT id FROM users WHERE `login` = ? AND `pass` = ?";
          $query = $pdo->prepare($sql);
          $query->execute([$login, $pass]);

          
          if($query->rowCount() == 0) 
            echo "Такого пользователя нет!";
          else {
            setcookie('log', $login, time() + 3600 * 24 * 30, "/");
            echo "Done";
          }
          
  
        
      
        
