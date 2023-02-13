const listItem = `<li class="todo-item"></li>`
const arr = ["Charlie", "Omwansa", "Eric", "June", "July"]
const todoListContainer = document.getElementById('todo-list')
console.log(todoListContainer)
const ul = document.querySelector('ul');
const taskInput = document.getElementById('task')
console.log(taskInput)
let taskInputValue = ""

const handleChange = (e) =>{
    console.log(e)
    taskInputValue = e

}


const displayListItems = (arr) => {
    todoListContainer.innerHTML = ""
    todoListContainer.style = 'color: skyblue';
    let output = ""
    for  (let i=0; i<arr.length; i++){
        output += `<li class="todo-item">${arr[i]}</li>`

    }

    todoListContainer.innerHTML += output;


}
displayListItems(arr)