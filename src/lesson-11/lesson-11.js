import './lesson-11.scss';

 let border;

const adminName = 'admin';
const adminPassword = '111';

const btnSubmit = document.querySelector('#submit-btn');
const inputName = document.querySelector('#name');
const inputPassword = document.querySelector('#password');
const outputElement = document.querySelector('#output')


console.log(btnSubmit);


function showMessage () {
    const username = inputName.value;
    const password = inputPassword.value;

    if (username === adminName && adminPassword === password) {
        outputElement.textContent = 'Hello admin';
        inputName.classList.add ('sucsess');
        inputPassword.classList.add ('sucsess');
    
    }else {
        outputElement.textContent = 'you are not admin';
        inputName.classList.add ('notsucsesfull');
        inputPassword.classList.add ('notsucsesfull');

    }
}


btnSubmit.onclick = showMessage;

