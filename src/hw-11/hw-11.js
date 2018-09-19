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
    console.log(isOpened);
}
btnToggle.onclick = toggle;


let mainBtn = document.querySelector('#main');
let nameBtn = document.querySelector('#name');
let dateBtn= document.querySelector('#date');
let priceBtn = document.querySelector('#price');
let sizeBtn = document.querySelector('#size');

nameBtn.onclick = close1;
dateBtn.onclick = close2;
priceBtn.onclick = close3;
sizeBtn.onclick = close4;



function close1 () {
        mainBtn.innerHTML="Name";
        nav.classList.add(openedClassName);
        isOpened = false;
} 

function close2 () {
        mainBtn.innerHTML="Date";
        nav.classList.add(openedClassName);
        isOpened = false;
} 

function close3 () {
        mainBtn.innerHTML="Price";
        nav.classList.add(openedClassName);
} 

function close4 () {
        mainBtn.innerHTML="Size";
        nav.classList.add(openedClassName);
} 






















/*
let mainBtn = document.querySelector('#toggleBtn');
let nameBtn = document.querySelector('#name');
let dateBtn= document.querySelector('#date');
let priceBtn = document.querySelector('#price');
let sizeBtn = document.querySelector('#size');

function ChangeText()
{
  document.querySelector('#name').innerHTML="Новый текст!";
}
onclick= $("#name").("#toggleBtn");*/
