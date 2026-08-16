function renderTask(container, tasks) {

    container.innerHTML = tasks.map(task => `
        <li class="task">
                <div class="task-input">
                    <input type="radio" name="radio" id="radio">

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div class="task-buttons">
                    <button class="btn-remove">
                        <i class="fa-solid fa-xmark"></i>
                    </button>

                    <button class="btn-edit">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                </div>
            </li>
    `).join('');
}