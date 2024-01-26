'use strict'

const inputEl = document.querySelector('input')
const pressEl = document.querySelector('button[data-create]')
const buttonEl = document.querySelector('button[data-destroy]')
const divEl = document.querySelector('#boxes')
console.log(inputEl)
console.log(pressEl)
console.log(buttonEl)
console.log(divEl)

function clickHandler() {
  if (inputEl.textContent <= 100) {
    // divEl.insertAdjacentHTML('afterBegin', `<div class='box' style='width: 30px; height: 30px; backgroundcolor: green'></div>`)
    // divEl.style.height = '30px';
    // divEl.style.backgroundColor = getRandomHexColor()
    let amount = inputEl.textContent
     function createBoxes(amount) {
      divEl.insertAdjacentHTML('afterbegin', `div.box*${amount}+enter`)
    }

     createBoxes(amount)
  }
}

// спробувати через стилі діва поставити дісплей флекс, перенос і ширину через калькулятор з використання емаунт - 1 та емаунт


  

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

pressEl.addEventListener('click', clickHandler)
