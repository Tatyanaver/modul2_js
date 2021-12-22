// є масив -
//
// створити під кожен об'єкт свій блок з кнопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

    let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (const user of users) {
    let nameOfUser = document.createElement('div');
    nameOfUser.innerText = `${user.name + ' ' + user.age + ' ' +user.status}`;
    let btn = document.createElement('button');
    btn.innerText = 'favourites';
    btn.onclick = function () {
        let favor = JSON.parse(localStorage.getItem('favourite')) || [];
        favor.push(user);
        localStorage.setItem('favourite', JSON.stringify(favor));
    }

    document.body.appendChild(nameOfUser);
    nameOfUser.appendChild(btn);

}
