'use strict'

const items = document.querySelectorAll(".item")
console.log(`Number of categories: ${items.length}`)
items.forEach(item => {
    const titles = item.querySelector('h2')
    console.log(`Category: ${titles.textContent}`)
    const list = item.querySelectorAll('li')
    console.log(`Elements: ${list.length}`)
})
