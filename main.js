console.log('Hello,world') 
console.log(4)
console.log('Добро '+'пожаловать '+'на курс ' +'  Юлия')

alert('26 октября 2023 года')

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

let nuller = null;
console.log(nuller);

// // undifined
let a = undefined;
console.log(a);

//typeof a;

console.log(typeof 10213);
console.log(typeof 10n);
console.log(typeof false);
console.log(typeof "flase");
console.log(typeof undefined);
console.log(typeof null);


document.getElementById('one').innerHTML = 'Наш текст';