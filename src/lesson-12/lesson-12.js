import './lesson-12.scss';

const container = document.querySelector('.select');
const header = document.querySelector('.select__header');
const controls =  document.querySelectorAll('.select__control');


for (let i = 0;i< controls.length;i++) {
    controls[i].onclick = selectOption;
}

function toggle () {
    if (container.classList.contains('select__opened')) {
        close ();
    }else {
        open ();
    }
}

function close () {
    container.classList.remove('select__opened');
}
function open () {
    container.classList.add('select__opened');
}

function selectOption ()  {
    console.log(this);
    const text = this.textContent;
    header.textContent = text;
    close ();

}

header.onclick = toggle;