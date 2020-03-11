/**** DOM Elements ****/
const tasksUl = document.querySelector("#tasks")
const createTaskForm = document.querySelector("#create-task-form")


/**** Event Listeners ****/
createTaskForm.addEventListener("submit", handleCreateTaskSubmit)


/**** Event Handlers ****/
function handleCreateTaskSubmit(e) {
  // prevent the form from making network request/refreshing the page
  e.preventDefault()

  // get the input values
  const newTask = {
    description: createTaskForm["new-task-description"].value,
    priority: createTaskForm["priority"].value
  }

  // you can also use querySelector to get the input values
  // const newTask = {
  //   description: document.querySelector("#new-task-description").value,
  //   priority: document.querySelector("#priority").value
  // }

  // slap on the DOM
  renderTask(newTask)
}


/**** Render Helpers ****/
function renderTask(task) {
  // add a li for the task
  const taskLi = document.createElement("li")
  taskLi.textContent = task.description
  taskLi.style.color = task.priority

  // add a delete button
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "X"
  taskLi.append(deleteButton) // append button to li

  // add an event listener to the delete button
  deleteButton.addEventListener("click", function () {
    taskLi.remove() // we have access to taskLi from the outer scope, so we can remove it
  })

  tasksUl.append(taskLi) // append li to ul
}
