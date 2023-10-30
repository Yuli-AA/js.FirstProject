console.log('Hello,world'); 
console.log(4);
console.log('Добро '+'пожаловать '+'на курс ' +'  Юлия');

//alert('26 октября 2023 года');

// 1 тип данных Number(число)
// infinity математическая бесконечность
// NaN(Not a Number) результат вычеслительной ошибки
// Infinity
console.log(1000 / 0);
console.log(Infinity);

// // NaN
console.log("1" * 1);
// // исключение
console.log(NaN ** 0);

// bigint

console.log(12333333333333333321111111111n);

// string строка

let str1 = "Anime ${2 + 2 * 10}";
let str2 = "Naruto ${2 + 2 * 10}";
let str3 = `Anime ${2 + 2 * 10}`;

console.log(str1);
console.log(str2);
console.log(str3);

// boolean логический
// true и false

let check = true;
let offCheck = false;
console.log(4 < 1);

// null

//let nuller = null;
//console.log(nuller);

// // undifined
let a = undefined;
console.log(a);

//typeof a;
//console.log(typeof 10213);
//console.log(typeof 10n);
//console.log(typeof false);
//console.log(typeof "flase");
//console.log(typeof undefined);
//console.log(typeof null);



document.getElementById('one').innerHTML = "<h1>Так тоже можно</h1>"
document.getElementById('one').innerHTML = 123
document.getElementById('one').innerHTML = "<h1>И так тоже можно</h1>"




let jojo = 'jojo'
jojo = 'Нет не в этот раз'
console.log(jojo);

document.querySelector('#one').innerHTML = '<h1>Текст какой-то</h1>'

document.querySelector('p').innerHTML = 'Хакуна матата'


let inputIN = document.querySelector(".text")
let btn = document.querySelector('.check')
let div = document.querySelector('.out')

btn.onclick = function(){
    let e = inputIN.value
    div.innerHTML += "${e}<br>"
}

let myhappy = prompt('99+1')
console.log(myhappy);
// if(условие){
// действие котрое должно будет быть выполнено
// }
if (myhappy == '100'){
  div.innerHTML = '<h1>Правильно</h1>'
}else{
    div.innerHTML = '<h1>Не правильно</h1>'
}