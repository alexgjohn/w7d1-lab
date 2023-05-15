document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const newItemForm = document.querySelector('#new-item-form')
  newItemForm.addEventListener('submit', handleForm)

  const deleteButton = document.querySelector('#delete')
  deleteButton.addEventListener('click', deleteAll)
})


const handleTitle = function(event) {
  event.preventDefault()
  console.log('title submitted')
}

const handleAuthor = function(event) {
  event.preventDefault()
  console.log('author submitted')
}

// const handleCategory = function(event) {
//   const categorySelected = document.querySelector('#reading-list')
//   categorySelected.appendChild()
// }



const handleForm = function(event) {
  event.preventDefault()
  console.dir(event)

  const title = event.target.title.value
  const author = event.target.author.value
  const category = event.target.category.value

  const newListItem = document.createElement('li')
  newListItem.textContent = `Title: ${title}, Author: ${author}, Category: ${category}`

  const readingList = document.querySelector('#reading-list')
  readingList.appendChild(newListItem)
  event.target.reset()
  // const title = document.querySelector('#title')
  // title.addEventListener('input', handleTitle)

  // const author = document.querySelector('#author')
  // author.addEventListener('input', handleAuthor)
  
  // const category = document.querySelector('#category')
  // category.addEventListener('change', handleCategory)
}

const deleteAll = function() {
  const readingList = document.querySelector('#reading-list')
  let itemToDelete = readingList.firstChild
  while (itemToDelete) {
    readingList.removeChild(itemToDelete)
    itemToDelete = readingList.firstChild
  }
}
