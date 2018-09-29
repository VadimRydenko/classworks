import './hw-14.scss';

function on_off (mainBlock) {
    const lights = mainBlock.querySelector('.light');
    const btn = mainBlock.querySelector('.turn');
    let activeLightIndex = 0;
    let intervalId = null;

    function stopAutoSwitch() {
        clearInterval(intervalId);
    }

    function startAutoSwitch () {
        clearInterval(intervalId);
        intervalId = setInterval (()=>{
            console.log(activeLightIndex);
            if (activeLightIndex +1 > 1 ) {
               activeLightIndex = 0;
            } else {
                activeLightIndex++; 
            }
            if (activeLightIndex === 1) {
                lights.classList.add('light__on');
            }else {
                lights.classList.remove('light__on');
            } 
        },1000);
    }

    btn.addEventListener('click',startAutoSwitch,);
    btn.addEventListener('click',switchOnOffButton,);

    function switchOnOffButton () {
        if (btn.classList.contains('turn__on')){
            off ();
            mainBlock.addEventListener('click', stopAutoSwitch);
        }else {
            on ()
           (function() {startAutoSwitch()});
            mainBlock.addEventListener('click', startAutoSwitch);
        }
    }

    function on () {
        btn.classList.add('turn__on');
        btn.innerHTML="off";
    }
    function off () {
        btn.classList.remove('turn__on');
        btn.innerHTML="on";
    }

}
 on_off (document.querySelector('#block-1'));
 on_off (document.querySelector('#block-2'));
 


