export function renderTask(container, tasks) {

    container.innerHTML = tasks.map((task) => {
        return `
        <article class="task">
                <div class="task-left">
                    <input type="checkbox" name="check" data-id="${task.id}" ${task.completed ? 'checked' : ''}>
                    <p>${task.text}</p>
                </div>

                <div class="task-right">
                    <button class="btn-remove">
                        X
                    </button>

                    <button class="edit">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                </div>
            </article>
        `
    }).join('')
}