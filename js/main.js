let btn = document.querySelector('.btn')
let input = document.querySelector('.input')
let wrap = document.querySelector('.lol')

let todoArray = []
///REMOVE
document.querySelector('.remove').onclick = () => {
  localStorage.clear();
  todoArray = []
  console.log('array', todoArray);
  wrap.innerHTML = ''
}
 
///LOAD ITEMS
if (JSON.parse(localStorage.getItem('array')) !== null) {
  todoArray = JSON.parse(localStorage.getItem('array'))
  todoArray.forEach((el, index) => {
    wrap.innerHTML += `<div class="${el.check ? "item active" : 'item'}" data=${el.id}>
  <div class="text">${el.item}</div>
  <input type="checkbox" id=item_${el.id} ${el.check ? 'checked' : ''}>
  <button class="${el.check ? "delete del_active" : "delete"}">Delete</button>
</div>`
  });
} else console.log('net');
///ADD ITEMS
function addElements() {
  if(input.value !== '') {
    let obj = {
      item: input.value,
      id: todoArray.length,
      check: false
    };
    todoArray.push(obj);
    wrap.innerHTML += `<div class="item" data='${obj.id}'>
    <div class="text">${input.value}</div>
    <input type="checkbox" id=item_${obj.id} ${obj.check ? 'checked' : ''}>
    <button class="delete">Delete</button>
  </div>`
    localStorage.setItem('array', JSON.stringify(todoArray))
    input.value = ''
  }
}
///
btn.addEventListener('click', () => {
  addElements()
})

//////REMOVE ITEM
wrap.addEventListener('change', (e) => {
  let checkBox = e.target.getAttribute('id');
  let forlab = wrap.querySelector(`#${checkBox}`)
  let itemData = forlab.parentElement
  let valueLab = forlab.previousElementSibling.innerHTML
  let btnHide = forlab.nextElementSibling
  
  todoArray.forEach((el, index) => {
    if(el.item === valueLab) {
      el.check = !el.check
      el.check ? itemData.classList.add('active') : itemData.classList.remove('active')
      el.check ? btnHide.classList.add('del_active') : btnHide.classList.remove('del_active')
      btnHide.addEventListener('click',() =>  {
        todoArray.splice(index, 1) 
        itemData.remove()
        console.log('click');
        localStorage.setItem('array', JSON.stringify(todoArray))
      })
      localStorage.setItem('array', JSON.stringify(todoArray))
    }
    else {
      console.log('FALSE')
    }

  })
  console.log('array', todoArray);
})