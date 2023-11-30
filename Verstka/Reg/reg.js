document.getElementById('reg__button').addEventListener('click', function() {
    document.querySelector('.bg').classList.add('active');
    document.querySelector('.reg').classList.add('active');
});

document.querySelector('.back').addEventListener('click', function() {
    document.querySelector('.bg').classList.remove('active');
    document.querySelector('.reg').classList.remove('active');
});

document.getElementById('link').addEventListener('click', function() {
    document.querySelector('.bg').classList.remove('active');
    document.querySelector('.reg').classList.remove('active');
    document.querySelector('.reg__mini__bg').classList.add('active');
});

document.querySelector('.back__mini').addEventListener('click', function() {
    document.querySelector('.reg__mini__bg').classList.remove('active');
})
