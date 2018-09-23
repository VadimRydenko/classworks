import './lesson-13.scss';



/*
function AddWord () {

    const select = document.querySelectorAll('.select')
    const main  = document.querySelector ('.main__close')

    for (let i = 0; i < select.length; i++){
        select[i].onclick = switchOn;
    }
    function toggle () {
        switchOn ();
        for (let i= 0; i<main.length; i++){
            main[i].classlist.add('main__close__open')
       }
    }

    function switchOn () {
         for (let i= 0; i<main.length; i++){
             main[i].classlist.add('main__close__open')
        }
    }
}

AddWord(document.querySelectorAll('#one'))
AddWord(document.querySelectorAll('#two'))
*/




function greetngWidget (parentNode) {
    const btn  = parentNode.querySelector('.control');
    const block = parentNode.querySelector('.block');

   //  btn.onclick = toggle;

    btn.addEventListener('click', toggle);

    function toggle () {
        block.classList.toggle('block_visible');

        let name = prompt('Enter name');

        block.textContent = 'Hello ' + name;
    }
}
greetngWidget (document.querySelector('.element-1'));
greetngWidget (document.querySelector('.element-2'));




