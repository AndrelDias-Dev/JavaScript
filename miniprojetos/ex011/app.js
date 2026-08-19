import { renderTask } from "./renderTask.js";
import { addTask } from "./addTask.js";

const container = document.querySelector('.task-container')
const taskInput = document.querySelector('#adtext')
const buttonTask = document.querySelector('.adtask')

const tasks = [];

buttonTask.addEventListener('click', () => {

    const taskValue = taskInput.value

    addTask(tasks, taskValue)

    renderTask(container, tasks);

    taskInput.value = ''

})

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {

    const taskValue = taskInput.value
    
    if (taskValue === '') {
        return
    }

    addTask(tasks, taskValue)

    renderTask(container, tasks);

    taskInput.value = ''
    }
})

container.addEventListener('change', (event) => {
    
    const id = Number(event.target.dataset.id)

    const task = tasks.find((task) => {
        return task.id === id
    })
})



