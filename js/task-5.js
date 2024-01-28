'use strict'

const bodyEl = document.querySelector('body')
const pressEl = document.querySelector('.change-color')
const spanEl = document.querySelector('.color')

function clickHandler(event) {
  const color = getRandomHexColor()
  bodyEl.style.backgroundColor = color
  spanEl.textContent = color
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

pressEl.addEventListener('click', clickHandler)
