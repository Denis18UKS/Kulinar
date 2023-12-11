let amount = Array.from(document.getElementsByClassName('number'));
let onePrice = document.getElementsByClassName('oneprice');
let morePrice = document.getElementsByClassName('moreprice');
let sum = 0;
let delKey;

amount.forEach((el, key) => {
    console.log(morePrice[key].textContent);
    sum += +morePrice[key].textContent;
    console.log(sum);
    document.getElementById('sum').textContent = sum + '₽';

    document.getElementsByClassName('minus')[key].addEventListener('click', function() {
        sum -= +onePrice[key].textContent;
        document.getElementById('sum').textContent = sum + '₽';  

        amount[key].textContent = +(amount[key].textContent) - 1;
        morePrice[key].textContent = +(amount[key].textContent) * +(onePrice[key].textContent);

        if (amount[key].textContent == 0) {
            delKey = +key;
            delChild();
        }
    });

    document.getElementsByClassName('plus')[key].addEventListener('click', function() {
        if (amount[key].textContent == 9) {
            return;
        }
        amount[key].textContent = +(amount[key].textContent) + 1;
        morePrice[key].textContent = +(amount[key].textContent) * +(onePrice[key].textContent);

        sum += +onePrice[key].textContent;
        document.getElementById('sum').textContent = sum + '₽';
    });
});

function delChild() {
    let items = document.getElementById('items');
    let item = document.querySelectorAll('.item');
    items.removeChild(item[delKey]);
    amount = Array.from(document.getElementsByClassName('number'));     
}