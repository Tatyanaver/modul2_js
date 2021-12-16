// Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let button = document.getElementById('btn');
let hide = true;
button.onclick = function () {
    if (hide) {
        document.getElementById('text').style.display = 'none';
    }
    else {
        document.getElementById('text').style.display = 'block';
    }
    hide = !hide;
};

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let button2 = document.getElementById('btn');
button2.onclick = function () {
    this.style.display = 'none';
};


// створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form = document.forms.checkoutOfAge;
form.onsubmit = function (e) {
    e.preventDefault();
    if (+this.userAge.value<18) {
        alert ('Ваш вік менше 18, що не передбачено для відвідування сайту');
    }
}

// Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.getElementsByClassName('menu')[0];
menu.onclick = function () {
    this.classList.toggle('collapse');
}

// Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem111', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem222', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem333', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem444', body:'lorem ipsum dolo sit ameti'},
];

for (const comment of comments) {
let divForComment = document.createElement('div');
divForComment.classList.add('com');
let titleDiv = document.createElement('div');
titleDiv.innerText = comment.title;
let divForBody = document.createElement('div');
divForBody.classList.add ('comment');
divForBody.innerText = comment.body;
let btn = document.createElement('button');
btn.innerText = 'hide comment';
btn.onclick = function () {
    divForBody.classList.toggle('hide-comment');
}

document.body.appendChild(divForComment);
divForComment.append(titleDiv,divForBody,btn);
}
