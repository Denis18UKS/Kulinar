let itemBtn = document.querySelectorAll('.item__btn');
for (let i = 0; i < itemBtn.length; i++) {
    itemBtn[i].addEventListener('click', () => {
        alert('Добавлено в корзину');
    });
}