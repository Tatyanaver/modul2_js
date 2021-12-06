// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
        this.info = function () {
                console.log(`модель авто - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, обсяг двигуна - ${this.volume}`)
        };
        this.increaseMaxSpeed = function (newSpeed) {
                this.maxSpeed = this.maxSpeed + newSpeed;
        };
        this.changeYear = function (newValue) {
                this.year = newValue;
        };
        this.addDriver = function (driver) {
                this.driver = driver;
        }
}

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class carDescription {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        drive()
        {console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)}
        info()
        {console.log(`модель авто - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, обсяг двигуна - ${this.volume}`)
        }
        increaseMaxSpeed(newSpeed)
        {this.maxSpeed = this.maxSpeed + newSpeed;}
        changeYear(newValue)
        {this.year = newValue;}
        addDriver(driver)
        {this.driver = driver;}
        }
}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let Array = [
    new Cinderella('Попелюшка', 17, 36),
    new Cinderella('Попелюшка_2', 18, 37),
    new Cinderella('Попелюшка_3', 18.5, 37.5),
    new Cinderella('Попелюшка_4', 20, 39),
    new Cinderella('Попелюшка_5', 22, 38),
    new Cinderella('Попелюшка_6', 21, 35),
    new Cinderella('Попелюшка_7', 20, 36.5),
    new Cinderella('Попелюшка_8', 19.5, 38.5),
    new Cinderella('Попелюшка_9', 19, 35.5),
    new Cinderella('Попелюшка_10', 18, 34),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
    }
}
let prince = new Prince ('Prince', 25, 37);


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let i=0; i < Array.length; i++) {
    const element = Array[i];
    if (element.footSize === prince.shoeSize) {
        console.log(`${element.name} повинна бути з принцем`);
    } else {
        console.log(`${element.name} не відповідає`)
    }
}


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let cinderella = Array.find(value => value.footSize === prince.shoeSize);
console.log(cinderella);