    <?php
    // Подключение к базе данных

    // Установите значения для переменных подключения к базе данных
    $servername = "localhost";
    $username = "root";
    $password = null;
    $dbname = "MDK_GP";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Проверка соединения
    if ($conn->connect_error) {
        die("Ошибка подключения: " . $conn->connect_error);
    }

    // Функция для проверки уникальности почты в базе данных
    function isEmailUnique($conn, $email)
    {
        $sql = "SELECT * FROM users WHERE email = '$email'";
        $result = $conn->query($sql);
        return $result->num_rows == 0;
    }

    // Функция для проверки уникальности телефона в базе данных
    function isPhoneUnique($conn, $phone)
    {
        $sql = "SELECT * FROM users WHERE phone = '$phone'";
        $result = $conn->query($sql);
        return $result->num_rows == 0;
    }

    // Проверка, была ли форма отправлена
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $surname = $_POST["surname"];
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = isset($_POST["phone"]) ? $_POST["phone"] : ""; // Проверяем, есть ли значение в $_POST['phone']
        $address = $_POST["address"];
        $password = $_POST["password"];
    
        // Проверка уникальности почты и телефона
        if (!isEmailUnique($conn, $email)) {
            echo "Данный email уже зарегистрирован.";
        } elseif ($phone !== "" && !isPhoneUnique($conn, $phone)) {
            echo "Данный телефон уже зарегистрирован.";
        } else {
            // Выполнение INSERT-запроса для добавления нового пользователя
            $sql = "INSERT INTO users (surname, name, email, phone, address, password) VALUES ('$surname', '$name', '$email', '$phone', '$address', '$password')";
            if ($conn->query($sql) === TRUE) {
                echo "Новый пользователь успешно добавлен.";
            } else {
                echo "Ошибка: " . $sql . "<br>" . $conn->error;
            }
        }
    }

    // Закрытие соединения с базой данных
    $conn->close();
    ?>