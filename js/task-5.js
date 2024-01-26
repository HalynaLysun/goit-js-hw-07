'use strict'

const bodyEl = document.querySelector('body')
const pressEl = document.querySelector('button')
const spanEl = document.querySelector('span')

function clickHandler (event) {
  bodyEl.style.backgroundColor = getRandomHexColor()
  spanEl.textContent = getRandomHexColor()
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

pressEl.addEventListener('click', clickHandler)
