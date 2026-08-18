export function renderTask(container, tasks) {

    container.innerHTML = tasks.map((task) => {
        return `
        <article class="task">
                <div class="task-left">
                    <input type="checkbox" name="check" id="check">
                    <p>${task.text}</p>
                </div>

                <div class="task-right">
                    <button class="btn-remove">
                        X
                    </button>

                    <button class="edit">
                        /
                    </button>
                </div>
            </article>
        `
    }).join('')
}