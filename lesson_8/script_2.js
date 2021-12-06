// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let addNewClass = document.getElementById('main_header');
console.log(addNewClass);
let addClass = addNewClass.classList.add('sept_2021');


// b) робить шириниу елементу ul 400px
let widthOfElement = document.getElementsByTagName('ul');
console.log(widthOfElement);
for (const element of widthOfElement) {
    element.style.width = '400px';
}


// c) робить шириниу всіх елементів з класом linkList шириною 50%
let widthOfListElements = document.getElementsByClassName('linkList');
console.log(widthOfListElements);
for (let w of widthOfListElements) {
    w.style.width = '50%';
}


// d) отримує текст який зберігається в елементі з класом listElement2
let text = document.getElementsByClassName('listElement2');
console.log(text);



// e) отримує всі елементи li та змінює ім колір фону на сірий
let elementsOfList = document.getElementsByTagName('li');
for (const elem of elementsOfList) {
    elem.style.backgroundColor = 'silver';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let aElements = document.getElementsByTagName('a');
console.log(aElements);
for (const a of aElements) {
    a.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const link of aElements) {
    if (link.innerText.includes('link3')) {
        link.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const addElem of aElements) {
    let xxx = addElem.innerText;
    addElem.classList.add(`element_${xxx}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let changeOfColor = document.getElementsByClassName('sub-header');
let c = prompt('what color is of the background?');
for (const color of changeOfColor) {
    color.style.backgroundColor = c;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let colorOfText = prompt('what color is of the text?');
for (const colors of changeOfColor) {
    if (colors.innerText.includes('content 2 segment')) {
        colors.style.color = colorOfText;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let contentElement = document.getElementsByClassName('content_1');
console.log(contentElement);
let textOfElement = prompt('What text must enter?');
contentElement.innerText = textOfElement;

// l) отримати елементи p та змінити їм padding на 20px
let pElements = document.getElementsByTagName('p');
for (const pElem of pElements) {
    pElem.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let content = document.getElementsByClassName('text2');
content[0].innerText = 'september-2021';
