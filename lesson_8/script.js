// Напишіть код,  котрий :
// 1 отримує текст з параграфа з id "content"
let pElement = document.getElementById('content');
console.log(pElement);

// 2 отримує текст з блоку з id "rules"
let divElement = document.getElementById('rules');
console.log(divElement);

// 3 замініть текст параграфа з id 'content' на будь-який інший
pElement.innerHTML = "Бойцовский клуб — роман американского автора Чака Паланика, выпущенный в 1996 году в США издательством «W. W. Norton & Company». В центре сюжета находится герой, страдающий бессонницей, которая вызвана неприятием общества потребления. Также причиной его недуга является недовольство тем, как понимается мужественность в американской культуре. Следуя совету своего доктора, он начинает посещать группы поддержки для больных различными заболеваниями, вследствие чего бессонница отступает. Но через некоторое время такой способ перестаёт действовать. В процессе дальнейшей борьбы с этим герой встречает таинственного человека по имени Тайлер Дёрден и создаёт подпольный бойцовский клуб как радикальную форму психотерапии"

// 4 замініть текст параграфа з id 'rules' на будь-який інший
divElement.innerHTML = "Правила клуба: Никому не рассказывать о бойцовском клубе. Никогда никому не рассказывать о бойцовском клубе. Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен. В схватке участвуют только двое. Не более одного поединка за один раз. Бойцы сражаются без обуви и голые по пояс.Поединок продолжается столько, сколько потребуется. Новичок обязан принять бой."


//  5 змініть кожному елементу колір фону на червоний
let elementsOnPage = document.body.children;
console.log(elementsOnPage);
for (const child of elementsOnPage) {
    console.log(child);
    child.style.backgroundColor = 'red';
}

// 6 змініть кожному елементу колір тексту на синій
let changeElementsOnPage = document.body.children;
for (const element of changeElementsOnPage) {
    console.log(element);
    element.style.backgroundColor = 'blue';
}

// 7  отримати весь список класів елемента з id=rules і вивести їх в console.log
let classesOfId = document.getElementById('rules');
console.log(classesOfId);

// 8 поміняти колір тексту у всіх елементів fc_rules на червоний
let changeOfColor = document.getElementsByClassName('fc_rules');
for (const elements of changeOfColor) {
    console.log(elements);
    elements.style.color = 'red';
}
