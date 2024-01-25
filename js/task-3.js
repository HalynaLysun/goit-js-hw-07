'use strict'

const userName = document.querySelector("input")
const helloUser = document.querySelector("#name-output")


function inputHandler(event) {
    helloUser.textContent = userName.value.trim() || 'Anonymous'
}



userName.addEventListener('input', inputHandler)

    