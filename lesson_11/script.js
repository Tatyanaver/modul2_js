// створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage


document.getElementById('btn').onclick = function () {
    let firstValue = document.forms.f1.name_user.value;
    let secondValue = document.forms.f1.age.value;
    let v = JSON.stringify({firstValue, secondValue});
    localStorage.setItem('information', v);

}

// створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

document.getElementById('btn2').onclick = function () {
    let model = document.forms.f2.model.value;
    let type = document.forms.f2.type.value;
    let volume = document.forms.f2.volume.value;
    let description = JSON.stringify([model, type, volume]);
    localStorage.setItem('car', description);
}
