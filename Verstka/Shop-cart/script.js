let amount = document.getElementsByClassName('number');
let onePrice = document.getElementsByClassName('oneprice');
let morePrice = document.getElementsByClassName('moreprice');

console.log(amount[0].textContent);


    document.querySelector('.minus').addEventListener('click', function() {
        amount[0].textContent = +(amount[0].textContent) - 1;
    });
    
    document.querySelector('.plus').addEventListener('click', function() {
        if (amount[0].textContent == 9) {
            return;
        }
        amount[0].textContent = +(amount[0].textContent) + 1;
    });

