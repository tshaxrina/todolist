let grid = document.createElement('div')
let item = document.createElement('div')
let text_h3 = document.createElement('h3')
let clock = document.createElement('p')
let cancal = document.createElement('img')
let wrap = document.querySelector('.wrap')

grid.classList.add('grid')
item.classList.add('item')
text_h3.classList.add('text')
clock.classList.add('clock')
cancal.classList.add('cancal')

text_h3.innerHTML = 'Buy milk ;)'
clock.innerHTML = '18:44'
cancal.src = "./img/Group 14.svg"

wrap.after(grid)
grid.append(item)
item.append(text_h3)
text_h3.after(cancal)
text_h3.after(clock)


let item_2 = document.createElement('div')
let text_h3_2 = document.createElement('h3')
let clock_2 = document.createElement('p')
let cancal_2 = document.createElement('img')

item_2.classList.add('item')
text_h3_2.classList.add('text')
clock_2.classList.add('clock')
cancal_2.classList.add('cancal')

text_h3_2.innerHTML = 'End the project'
clock_2.innerHTML = '18:44'
cancal_2.src = "./img/Group 14.svg"

item.after(item_2)
item_2.append(text_h3_2)
text_h3_2.after(cancal_2)
text_h3_2.after(clock_2)


let item_3 = document.createElement('div')
let text_h3_3 = document.createElement('h3')
let clock_3 = document.createElement('p')
let cancal_3 = document.createElement('img')

item_3.classList.add('item')
text_h3_3.classList.add('text')
clock_3.classList.add('clock')
cancal_3.classList.add('cancal')

text_h3_3.innerHTML = 'Call mom'
clock_3.innerHTML = '18:44'
cancal_3.src = "./img/Group 14.svg"

item_2.after(item_3)
item_3.append(text_h3_3)
text_h3_3.after(cancal_3)
text_h3_3.after(clock_3)


let item_4 = document.createElement('div')
let text_h3_4 = document.createElement('h3')
let clock_4 = document.createElement('p')
let cancal_4 = document.createElement('img')

item_4.classList.add('item')
text_h3_4.classList.add('text')
clock_4.classList.add('clock')
cancal_4.classList.add('cancal')

text_h3_4.innerHTML = 'Sleep 10 hrs'
clock_4.innerHTML = '18:44'
cancal_4.src = "./img/Group 14.svg"

item_3.after(item_4)
item_4.append(text_h3_4)
text_h3_4.after(cancal_4)
text_h3_4.after(clock_4)