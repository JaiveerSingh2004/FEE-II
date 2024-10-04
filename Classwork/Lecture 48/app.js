// Selectors:

// 1. getELementByID()
var a = document.getElementById('heading')
a.style.color = 'green'
a.style.backgroundColor = 'aqua'
a.style.border = '2px dotted black'
a.style.padding = '20px'

// 2. getElementByClass()
var b = document.getElementsByClassName('test')
console.log(b)

for(let lists of b) {
    lists.style.fontWeight = 'bold'
    lists.style.color = 'purple'
}

// 3. getElementByName()


