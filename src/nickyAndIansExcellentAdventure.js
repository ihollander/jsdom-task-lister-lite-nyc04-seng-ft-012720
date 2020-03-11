const $ = (...args) => document.querySelector(...args)
const $$ = (...args) => document.querySelectorAll(...args)

NodeList.prototype.sort = function (callback) {
  Array.from(this)
    .sort(callback)
    .forEach(element => element.parentElement.append(element))
}

$("#create-task-form").addEventListener('submit', handleSubmit)
$("#tasks").addEventListener('click', handleTaskClick)
$("#tasks").addEventListener('input', handleInput)
$("h2").addEventListener('click', handleSort)

function handleSubmit(e) {
  e.preventDefault()
  addTaskToDom(e.target)
  e.target.reset()
}

function handleInput(e) {
  console.log(e.target.childNodes[0])
}

function handleTaskClick(e) {
  e.target.matches("button") && e.target.parentElement.remove()
}

function handleSort() {
  $$("li").sort((el1, el2) => el1.style.backgroundColor.localeCompare(el2.style.backgroundColor))
}

function addTaskToDom(form) {
  $("#tasks").innerHTML += `<li contenteditable="true" style="background-color: ${form["priority"].value}">${form["new-task-description"].value}<button>X</button></li>`
}
