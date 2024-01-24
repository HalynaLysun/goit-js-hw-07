'use strict'

const itemEl = document.querySelectorAll('.item')
console.log(`Number of categories: ${itemEl.length}`)

const textEl = document.querySelectorAll("h2")
textEl.forEach(element => {

    console.log(`Category: ${element.textContent}`)
    console.log(`Elements: ${element.length}`)

})