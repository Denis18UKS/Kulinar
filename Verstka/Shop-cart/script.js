let amount = Array.from(document.getElementsByClassName('number'));
let onePrice = document.getElementsByClassName('oneprice');
let morePrice = document.getElementsByClassName('moreprice');

let parent = document.getElementById('items');
let child = document.getElementsByClassName('item');

amount.forEach(
    (el, key) => {
    document.getElementsByClassName('minus')[key].addEventListener('click', function() {
        amount[key].textContent = +(amount[key].textContent) - 1;
        morePrice[key].textContent = +(amount[key].textContent) * +(onePrice[key].textContent);

        if(+(amount[key].textContent) <= 0) {
            items.removeChild(child[key]);
        }
    });
    
    document.getElementsByClassName('plus')[key].addEventListener('click', function() {
        if (amount[key].textContent == 9) {
            return;
        }
        amount[key].textContent = +(amount[key].textContent) + 1;
        morePrice[key].textContent = +(amount[key].textContent) * +(onePrice[key].textContent);
    });
});
