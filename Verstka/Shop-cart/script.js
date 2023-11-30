
let amount = Array.from(document.getElementsByClassName('number'));
let onePrice = document.getElementsByClassName('oneprice');
let morePrice = document.getElementsByClassName('moreprice');

let parent = document.getElementById('items');
let child = document.getElementsByClassName('item');
let sum = 0;

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

        if(+(amount[key].textContent) <= 0) {
            parent.removeChild(child[key]);
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
