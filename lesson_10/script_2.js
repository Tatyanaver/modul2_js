// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

document.getElementById('btn').onclick = function() {
    let i1 = document.forms.form1.first.value;
    let i2 = document.forms.form1.second.value;
    let i3 = document.forms.form2.third.value;
    let i4 = document.forms.form2.fourth.value;
    console.log(i1,i2,i3,i4);
}

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let form = document.forms ['tableCreate'];
form.onsubmit = function (e) {
    e.preventDefault();
    let valueRow = +form.row.value;
    let valueColumn = +form.column.value;
    let valueWord = form.words.value;
    console.log(valueRow,valueColumn,valueWord);

let table = document.createElement('table');
for (let i=0; i < valueRow; i++) {
    let tr = document.createElement('tr');
    for (let y=0; y < valueColumn; y++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.innerText = valueWord;
    }
    table.appendChild(tr);
    }
document.body.appendChild(table);
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let array = ['чорт', 'дідько', 'біс', 'трясця'];
let btn1 = document.getElementById('btn');
btn1.onclick = function () {
    let w = document.getElementById('word').value;
    for (const a of array) {
        if (a === w) {
            alert('warning!');
        }
    }
}


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let array2 = ['чорт', 'дідько', 'біс', 'трясця'];
let btn2 = document.getElementById('btn_next');
btn2.onclick = function () {
    let sentence = document.getElementById('next').value;
    for (const s of array2) {
        if (sentence.includes(s)) {
            alert ('warning')
        }
    }
}