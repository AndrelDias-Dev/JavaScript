export function addTask(tasks, taskValue) {

    const newTask = {
        id: Date.now(),
        text: taskValue,
        completed: false
    }

    tasks.push(newTask)
}