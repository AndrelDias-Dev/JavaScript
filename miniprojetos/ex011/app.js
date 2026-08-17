import { renderTask } from "./renderTask.js";
import { addTask, tasks } from "./addTask.js";

const taskContainer = document.querySelector('.taskContainer')
const addButtonTask = document.querySelector('.ad-task')
const taskInput = document.querySelector('#adiciona')


addButtonTask.addEventListener('click', () => {

    const taskInput = document.querySelector('#adiciona')

    const taskValue = taskInput.value

    if (taskValue.trim() === '') {
       return
    }
    addTask(taskValue)

    renderTask(taskContainer, tasks)

    taskInput.value = ''
})


taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addButtonTask.click()
    }
})











