'use strict'

const inputEl = document.querySelector('input')
const pressEl = document.querySelector('button[data-create]')
const buttonEl = document.querySelector('button[data-destroy]')
const divEl = document.querySelector('#boxes')
// console.log(inputEl)
// console.log(pressEl)
// console.log(buttonEl)
// console.log(divEl)

    
function clickHandler(event) {
  event.preventDefault()

  if (inputEl.value.trim() <= 100) {
    divEl.innerHTML = `<div class='box'></div>`
    const divBox = document.querySelector('.box')
    divBox.style.backgroundColor = getRandomHexColor()
    divBox.style.width = '30px'
    divBox.style.height = '30px'

    inputEl.reset()



    // let amount = Number(inputEl.value.trim())

    //    function createBoxes(amount) {
    //   divEl.createElement(div)
    // }

    //    createBoxes(amount)
    // }
  }
}

pressEl.addEventListener('click', clickHandler)

function destroyBoxes(event) {
  divEl.reset()
}

buttonEl.addEventListener('click', destroyBoxes)



  

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// спробувати через стилі діва поставити дісплей флекс, перенос і ширину через калькулятор з використання емаунт - 1 та емаунт
