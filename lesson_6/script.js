// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
console.log(str1.length);

let str2 = 'lorem ipsum';
console.log(str2.length);

let str3 = 'javascript is cool';
console.log(str3.length);

// Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let firstUpperCase = str1.toUpperCase();
console.log(firstUpperCase);

let secondUpperCase = str2.toUpperCase();
console.log(secondUpperCase);

let thirdUpperCase = str3.toUpperCase();
console.log(thirdUpperCase);

// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let firstLowerCase = str1.toLowerCase();
console.log(firstLowerCase);

let secondLowerCase = str2.toLowerCase();
console.log(secondLowerCase);

let thirdLowerCase = str3.toLowerCase();
console.log(thirdLowerCase);

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let words = ' dirty string   ';
let trim = words.trim();
console.log(trim);

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str = 'Каждый охотник желает знать';
    function stringToArray(str) {
        let split = str.split (' ');
        return split;
}
console.log(stringToArray(str));

// Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));

function delete_characters(str, length) {
    return str.substring(0,7);
}
console.log(delete_characters (str, 7));

// Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
    // let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str));
let name = "HTML JavaScript PHP"
function insert_dash(name) {
    let nameUpperCase = name.toUpperCase();
    let replace = nameUpperCase.replaceAll(' ', '-');
    return replace;
}
console.log(insert_dash(name));

// Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
function line (x) {
    return x[0].toUpperCase() + x.slice(1);
}
console.log(line('hello world'));

// Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

function capitalize(y) {
    let part = y.split(' ');
    for (let i=0; i < part.length; i++) {
        let string = part[i].charAt(0).toUpperCase();
        part[i] = string + part[i].slice(1);
    }
return part.join (' ');
}
console.log(capitalize('hello my sunny world'));