import "../styles/lighter.scss";


export class Lighter {
    constructor (parentNode, lampColor) {
        this.parentNode = parentNode;
        this.lampColor = lampColor;
        this.isActive = false;
        this.render();
        this.handlEvent();
    }
    handlEvent () {
        this.control.addEventListener('click',() =>{
            this.lamp.style.backgroundColor = this.lampColor || 'red';
            if (this.isActive ===false){
                this.active ();
            }else {
                this.deactive();
            }
        });
    }

    active () {
        this.lamp.style.backgroundColor = this.lampColor || 'red';
        this.isActive = true;
    }

    deactive () {
        this.lamp.style.backgroundColor = 'transparent';
        this.isActive = false;
    }

    render () {
        this.lamp = document.createElement('div');
        this.control = document.createElement('button');

        this.lamp.classList.add('lighter__lamp');
        this.control.classList.add('lighter__control');
        this.parentNode.classList.add('lighter');

        this.parentNode.appendChild(this.lamp);
        this.parentNode.appendChild(this.control);
    }
}