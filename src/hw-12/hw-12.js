import './hw-12.scss';
const container = document.querySelectorAll('.main_block')
const active = document.querySelectorAll('.active');
const text = document.querySelectorAll('.text');


for (let i = 0; i< active.length; i++){
    active[i].onclick = toggle;
}

function open () {
 for (let i = 0 ; i<container.length; i++)
    this.parentElement.classList.add('opened');
}

function close () {
    for (let c = 0 ; c<container.length; c++)
    container[c].classList.remove('opened');
}

function toggle () {
    if (this.container.classList.contain('opened')){
        close ();
    } else {
        open.call(this);
    }
}

function offAll () {
    for (let j = 0; j< text.length; j++){
        text[j].classList.remove('opened');
    }
}

function openOne () {
    offAll ();
    toggle ()
}



