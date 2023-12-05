document.getElementById('reg__button').addEventListener('click', function() {
    document.querySelector('.reg__overlay').classList.add('active');
});
document.querySelector('.back').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.reg__overlay').classList.remove('active');
});
document.getElementById('link').addEventListener('click', function() {
    document.querySelector('.reg__overlay').classList.remove('active');
    document.querySelector('.reg__overlay-mini').classList.add('active');
});
document.querySelector('.back__mini').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.reg__overlay-mini').classList.remove('active');
});