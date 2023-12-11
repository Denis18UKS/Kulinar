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

//Код выше отвечает за калькуляцию итоговой суммы заказа


//Удаление блюда из корзины
function delall(){

    var c1 = document.getElementById("item1")
    var c2 = document.getElementById("item2")
    var c3 = document.getElementById("item3")
    var c4 = document.getElementById("item4")
    var c5 = document.getElementById("item5")
    var c6 = document.getElementById("item6")
    // var summ = document.getElementsByClassName("sum")
    // var summ1 = document.getElementsById("sum")
    
    
    c1.style.display = "none"
    c2.style.display = "none"
    c3.style.display = "none"
    c4.style.display = "none"
    c5.style.display = "none"
    c6.style.display = "none"
    // summ.style.display = "none"
    // summ1.style.display = "none"

}

function checkshop(){
    var c1 = document.getElementById("item1")
    var c2 = document.getElementById("item2")
    var c3 = document.getElementById("item3")
    var c4 = document.getElementById("item4")
    var c5 = document.getElementById("item5")
    var c6 = document.getElementById("item6")

    var id = Math.random()

    if(c1.style.display === "none"
    && c2.style.display === "none"
    && c3.style.display === "none"
    && c4.style.display === "none"
    && c5.style.display === "none"
    && c6.style.display === "none")



    {
        alert("Корзина Пуста!")
    } else {
        alert(`Заказ Оформлен! Номер заказка ${id}`)
    }
}

function del1(){
    var c1 = document.getElementById("item1")
    c1.style.display = "none"
}

function del2(){
    var c2 = document.getElementById("item2")
    c2.style.display = "none"
}

function del3(){
    var c3 = document.getElementById("item3")
    c3.style.display = "none"
}

function del4(){
    var c4 = document.getElementById("item4")
    c4.style.display = "none"
}

function del5(){
    var c5 = document.getElementById("item5")
    c5.style.display = "none"
}

function del6(){
    var c6 = document.getElementById("item6")
    c6.style.display = "none"
}