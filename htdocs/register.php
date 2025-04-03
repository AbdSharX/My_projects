<!DOCTYPE html>
<html lang="ru">
<head>
    <?php 
    $website_title = "Страница регистрации";
    require "block/head.php" ?>
</head>
<body>
    
        
        <?php require "block/header.php" ?>

        <main>
                <h1>Регистрация</h1>
                <form>
                    <label for="username">Ваше имя</label>
                    <input type="text" name="username" id="username">

                    <label for="username">Email</label>
                    <input type="email" name="email" id="email">

                    <label for="login">Логин</label>
                    <input type="text" name="login" id="login">

                    <label for="pass">Пароль</label>
                    <input type="password" name="pass" id="pass">

                    <div class="error" id="error-block"></div>

                    <button type="button" id="reg_user" >Зарегистрироваться</button>

                </form>
        </main>

        <?php require "block/aside.php" ?>

        <?php require "block/footer.php" ?>
    
        <script>

                $('#reg_user').click(() => {
                    let name = $('#username').val();
                    let email = $('#email').val();
                    let login = $('#login').val();
                    let pass = $('#pass').val();

                    $.ajax({
                        url: "ajax/reg.php",
                        type: "POST",
                        cache: false,
                        data: {
                            'username' : name, 'email' : email, 'login' : login, 'pass' : pass
                        },
                        dataType: 'html',
                        success: function(data) {
                            if(data == 'Done') {
                                $('#reg_user').text('Вcе готово');
                                $('#error-block').hide();
                            }
                            else {
                                $('#error-block').show();
                                $('#error-block').text(data);
                            }
                        }
                    }) 
                })

        </script>
</body>
</html>