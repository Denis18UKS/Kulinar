Array.from(document.getElementsByClassName('item__btn')).forEach(el => {
    el.addEventListener('click', function() {
        alert('Сначала заргистрируйтесь');
    });
}); 