import { Lighter } from "./lighter";

export class LampController {
    constructor (parentNode){
        this.parentNode = parentNode;
        this.lighters = [];
        this.render ();
        this.render2 ();
        this.handleEvents();
    }
    render (){
        this.btnAdd = document.createElement('button');
        this.btnAdd.textContent = "Add";
        this.lampsWrapper = document.createElement('div');

        this.parentNode.appendChild(this.btnAdd);
        this.parentNode.appendChild(this.lampsWrapper);
    }
    render2 (){
        this.btnAdd = document.createElement('button');
        this.btnAdd.textContent = "remove";
        this.lampsWrapper = document.createElement('div');

        this.parentNode.appendChild(this.btnAdd);
        this.parentNode.appendChild(this.lampsWrapper);
    }

    handleEvents() {
        this.btnAdd.addEventListener('click', () => {
            this.addLamp ();
        });
    }


    addLamp() {
        const lighterContainer = document.createElement('div');
        const lighter = new Lighter(lighterContainer);

        this.lampsWrapper.appendChild(lighterContainer);
        this.lighters.push(lighter);
    }
}


