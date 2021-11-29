// Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

function rightName (name) {
    name
        .replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ')
};


// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

function valueRandom(item) {
    let array = []
for (let i = 0; i< item; i++) {
    array.push(Math.round(Math.random()*100));
}
return array;
}
console.log(valueRandom(15));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arrayNumbers = valueRandom(10);
let arr1 = arrayNumbers.sort ((a,b) => a-b);
console.log(arr1);
let arr2 = arrayNumbers.sort ((a,b) => b-a);
console.log(arr2);


// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let arrayNums = valueRandom(15);
let newArray = arrayNums.filter(value => value % 2 ===0);
console.log(newArray);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arrayOfStr = valueRandom(15);
let newArrayOfStr = arrayOfStr.map(value => value + '');
console.log(newArrayOfStr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let nums = [45,500,35,99,3,7,-44,1999];
let sortNums = nums.sort((a,b) => {
    return b-a;
});
console.log(sortNums);



// - є масив, -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortCoursesDuration = coursesAndDurationArray.sort ((m1,m2) => {
    return m2.monthDuration - m1.monthDuration;
});
console.log(sortCoursesDuration);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterMonthDuration = coursesAndDurationArray.filter(value => value.monthDuration>5);
console.log(filterMonthDuration);