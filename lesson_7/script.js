// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User (1, 'ivan', 'petrov', 'petrov@gmail.com', '+380991212123'),
    new User (9, 'masha', 'petrova', 'petrova@gmail.com', '+380991212124'),
    new User (2, 'nikolay', 'ivanov', 'ivanov@gmail.com', '+380991212126'),
    new User (8, 'olya', 'ivanova', 'ivanova@gmail.com', '+380991212125'),
    new User (3, 'petya', 'sidorov', 'sidorov@gmail.com', '+380991212128'),
    new User (7, 'tanya', 'sidorova', 'sidorova@gmail.com', '+380991212129'),
    new User (4, 'sasha', 'nikiforov', 'nikiforov@gmail.com', '+380991212122'),
    new User (5, 'dasha', 'nikiforova', 'nikiforova@gmail.com', '+380991212127'),
    new User (6, 'petr', 'kulikov', 'kulikov@gmail.com', '+380991212133'),
    new User (10, 'irina', 'kulikova', 'kulikova@gmail.com', '+380991212135'),
];



// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUser = users.filter(value => value.id%2 === 0);
console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUser = users.sort((u1,u2) => u1.id - u2.id);
console.log(sortUser);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id,name,surname,email,phone,order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
    }
}


// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(10, 'igor', 'pavlov', 'pavlov@i.ua', '+380661122333', ['cookies', 'candies']),
    new Client(12, 'fedir', 'ivanov', 'ivanov@i.ua', '+380661122334', ['book', 'pencil', 'pen']),
    new Client(13, 'petro', 'nesterov', 'nesterov@i.ua', '+380661122335', ['bike', 'gloves']),
    new Client(19, 'anna', 'nesterova', 'nesterova@i.ua', '+380661122336', ['cap', 'pen', 'marker', 'plates']),
    new Client(20, 'irina', 'kulikova', 'kulikova@i.ua', '+380661122338', ['glasses', 'umbrella', 'scarf','belt','purse']),
    new Client(24, 'inna', 'bublikova', 'bublikova@i.ua', '+380661122337', ['notebook', 'marker', 'router']),
    new Client(25, 'sasha', 'nikolaev', 'nikolaev@i.ua', '+380661122332', ['vine', 'cheese', 'olives', 'glass', 'pie', 'cookies', 'candies']),
    new Client(11, 'dasha', 'vasileva', 'vasileva@i.ua', '+380661122330', ['milk', 'cookies','pie', 'juice', 'water']),
    new Client(22, 'nikolay', 'sidorov', 'sidorov@i.ua', '+380661122331', ['pie', 'juice']),
    new Client(27, 'sergiy', 'voronov', 'voronov@i.ua', '+380661122339', ['apples', 'pears', 'apricot', 'cherry', 'tomato', 'milk']),
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortOrder = clients.sort ((x, y) => x.order.length - y.order.length);
console.log(sortOrder);
