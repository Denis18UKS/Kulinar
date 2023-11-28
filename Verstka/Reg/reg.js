// const regButton = document.querySelector('.reg__show');
// const regModal = document.querySelector('.reg');
// const bg = document.querySelector('.bg');

// regButton.addEventListener('click', () => {
//     regModal.classList.add('show');
//     bg.classList.add('show');
// });



let btn = document.getElementById("reg__button");
btn.addEventListener("click", showModal);

function showModal(){
    let modal = document.getElementsByClassName("reg")[0];
    let bg = document.getElementsByClassName("bg")[0];
    modal.style.top = "50%";
    bg.style.display = "block";
}

let close = document.getElementsByClassName('close');
btn.addEventListener("click", CloseWindow);

function CloseWindow(){
    let modal = document.getElementsByClassName("reg")[0];
    let bg = document.getElementsByClassName("bg")[0];
    modal.style.top = "-50%";
    bg.style.display = "none";
}

