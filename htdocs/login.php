<!DOCTYPE html>
<html lang="ru">
<head>
    <?php 
    $website_title = "Страница авторизации";
    require "block/head.php" ?>
</head>
<body>
    
        
        <?php require "block/header.php" ?>

        <main>
               <?php if(!isset($_COOKIE['log'])) : ?>
                <h1>Авторизация</h1>
                <form>
                    

                    <label for="login">Логин</label>
                    <input type="text" name="login" id="login">

                    <label for="pass">Пароль</label>
                    <input type="password" name="pass" id="pass">

                    <div class="error" id="error-block"></div>

                    <button type="button" id="login_user" >Войти</button>

                </form>
                <?php else: ?>
                    <h2><?=  $_COOKIE['log'] ?> </h2> 
                    <form>
                        <button type="button" id="exit_user">
                                Выйти
                        </button>
                    </form>
                <?php endif; ?> 

        </main>

        <?php require "block/aside.php" ?>

        <?php require "block/footer.php" ?>
    
        <script>

                $('#login_user').click(() => {
                    let login = $('#login').val();
                    let pass = $('#pass').val();

                    $.ajax({
                        url: "ajax/login.php",
                        type: "POST",
                        cache: false,
                        data: {
                             'login' : login, 'pass' : pass
                        },
                        dataType: 'html',
                        success: function(data) {
                            if(data == 'Done') {
                                $('#login_user').text('Вcе готово');
                                $('#error-block').hide();
                                document.location.reload();
                            }
                            else {
                                $('#error-block').show();
                                $('#error-block').text(data);
                            }
                        }
                    }) 
                })

                $('#exit_user').click(() => {
                    
                    $.ajax({
                        url: "ajax/exit.php",
                        type: "POST",
                        cache: false,
                        data: {},
                        dataType: 'html',
                        success: function(data) {
                            
                                document.location.reload(true);

                        
                        }
                    }) 
                })


                

        </script>
</body>
</html>