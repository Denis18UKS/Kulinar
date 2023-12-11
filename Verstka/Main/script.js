function error(){
    alert("Вы не зарегистрированы!")
}

let itemBtns = document.querySelectorAll('.item__btn');
itemBtns.forEach((el) => {
    el.addEventListener('click', error);
});