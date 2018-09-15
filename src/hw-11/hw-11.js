import './hw-11.scss';

let isOpened = false;

const openedClassName = 'open_menu';
const btnToggle = document.querySelector('#toggleBtn');
const nav = document.querySelector('#nav');

function toggle () {
    if (isOpened) {
        nav.classList.remove (openedClassName);
        isOpened = false;
    }else {
        nav.classList.add(openedClassName);
        isOpened = true;
    }
}
btnToggle.onclick = toggle;