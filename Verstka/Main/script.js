Array.from(document.getElementsByClassName('item__btn')).forEach(el => {
    el.addEventListener('click', function() {
        alert('Товар добавлен в корзину');
    });
}); 


function error(){
    alert("Вы не зарегистрированы!")
}