const list = document.querySelector('.list')

const renderList = (data, id) => {
  const newItem = `
    <div class="card" data-id="${id}">
      <div class="card__title">${data.item}</div>
      <div class="btn__delete">
        <i class="fa-regular fa-trash-can icon__delete" data-id="${id}"></i>
      </div>
    </div>
    <div class="divider"></div>
  `
  list.innerHTML += newItem
}

// remove item from DOM
const removeItem = (id) => {
  const list = document.querySelector(`.list[data-id=${id}]`)
  list.remove()
}
