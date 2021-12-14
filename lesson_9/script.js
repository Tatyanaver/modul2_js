// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let divElement = document.createElement('div');
divElement.classList.add ('wrap');
divElement.classList.add ('collapse');
divElement.classList.add ('alpha');
divElement.classList.add ('beta');
divElement.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate deleniti molestias mollitia pariatur porro saepe! Dolorem eaque earum eligendi, iste maxime molestias quam vitae. Dolore hic in quae sed.';
divElement.style.color = 'brown';
divElement.style.backgroundColor = 'silver';
divElement.style.fontSize = '30px';
document.body.appendChild(divElement);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let menu = document.getElementsByClassName('menu')[0];
let arrayOfList = ['Main','Products','About us','Contacts'];
for (const item of arrayOfList) {
    let listElement = document.createElement('li');
    listElement.innerText = `${item}`;
    menu.appendChild(listElement);
}


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const courses of coursesAndDurationArray) {
    let divElem = document.createElement('div');
    divElem.innerText = `${courses.title} ${courses.monthDuration}`;
    document.body.appendChild(divElem);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
    // Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    let newDivElement = document.createElement('div');
    newDivElement.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `${element.title}`;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `${element.monthDuration}`;

    document.body.appendChild(newDivElement);
    newDivElement.appendChild(h1);
    newDivElement.appendChild(p);
}