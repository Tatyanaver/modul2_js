let favorUser = JSON.parse(localStorage.getItem('favourite'));
console.log(favorUser);
for (const user of favorUser) {
    let userDiv = document.createElement('div');
    userDiv.innerText = `${user.name + ' ' + user.age + ' ' +user.status}`;

    document.body.appendChild(userDiv);
}