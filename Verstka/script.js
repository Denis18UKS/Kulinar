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