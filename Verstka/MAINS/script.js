document.querySelectorAll('.button').forEach((el) => {
    let regButton = document.getElementById('reg__button');
    if (regButton.textContent == 'Регистрация') {
        el.addEventListener('click', () => {
            alert('Вы не зарегестрированы!');
        });
    } else {
        el.addEventListener('click', () => {
            alert('Добавлено в корзину');
        });
    }
});

//Код выше отвечает за добавление товара в корзину , если пользователь не зареган или не вошёл в систему, то он не сможет
//добавить блюдо в корзину

//Иначе - товар будет "добавлен" в корзину