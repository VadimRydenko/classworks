import './lesson-9.scss';


let isOpened = false;

const openedClassName = 'global-nav_opened';
const btnToggle = document.querySelector('#toggleBtn');
const nav = document.querySelector('#nav');

function toggle () {
        console.log('Hello world');
        if (isOpened) {
            nav.classList.remove (openedClassName);
            isOpened = false;
        }else {
            nav.classList.add(openedClassName);
            isOpened = true;
        }
}

btnToggle.onclick = toggle;
