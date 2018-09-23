import './hw-13.scss';

const adminName = 'admin';
const adminPassword = '111';

const btn = document.querySelector('.login_form_button');
const inputName = document.querySelector('#username');
const inputPassword = document.querySelector('#password');
const window = document.querySelector('.answer__close');

function openIcon () {
    window.classList.add('open');
}

function showMessage () {
    const username = inputName.value;
    const password = inputPassword.value;

    if (username === adminName && adminPassword === password) {
        window.textContent = 'Hello admin';
    }else {
        window.textContent = 'Hello'+ username;
    }
}
btn.addEventListener('click',openIcon,showMessage);

btn.onclick = showMessage;
