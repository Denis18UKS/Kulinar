document.addEventListener('DOMContentLoaded', function() {
    let regForm = document.querySelector('#reg__button');
    let form = document.querySelector('#form');
    let back = document.querySelector('#back');
    let reg = document.querySelector('#registr');
    let bg = document.querySelector('#bg');
    let win = document.querySelector('#win');

    regForm.addEventListener('click', (e) => {
        e.preventDefault();
        let modalId = this.getAttribute('data-modal');
        let modalElem = document.querySelector('#win[data-modal="1"]');

        modalElem.classList.add('active');
        bg.classList.add('active');
        win.classList.add('active');
    });


    
});