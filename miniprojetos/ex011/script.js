const inputTask = document.querySelector('#task-input')
const btnAddTask = document.querySelector('.add-task')



let tasks = [
    {
        id: 1, tittle: 'Devo estudar Javascript', completed: false, createdAt: "Hoje • 18:30", category: "front",
    },

    {
        id: 2, tittle: 'Lavar a louça', completed: false, createdAt: "Hoje • 18:30", category: "tarefa",
    },
]

function renderTasks() {
    const listTask = document.querySelector('.task-list')

    listTask.innerHTML = '';

    tasks.forEach((task) => {

        listTask.innerHTML += `<div class="task-card">
                <div class="task-top">
                    <div class="task-message">
                        <input type="checkbox" id="task-2">
                        <label for="task-2">${task.tittle}</label>
                    </div>

                    <div class="task-icons">
                        <button class="task-delete">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>

                        <button class="task-edit">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                    </div>
                </div>

                <div class="task-down">
                    <div class="task-date">
                         ${task.createdAt}
                    </div>
                    
                    <div class="task-category">
                        <select name="task-category-options" id="task-options">
                            <option disabled selected>Selecione uma Categoria...</option>
                            <option value="estudos">Estudos</option>
                            <option value="tarefas">Tarefas</option>
                            <option value="front">Front-End</option>
                            <option value="end">Back-End</option>
                        </select>
                    </div>
                </div>
             </div>
        </div>`

    })
}

function saveToLocaleStorage() {
    localStorage.setItem('')
}

function addTask() {
    const textoDigitado = inputTask.value.trim();
    if (textoDigitado === '') return;

    const horaFormatada = new Date().toLocaleTimeString('pt-br', {hour:'2-digit', minute:'2-digit'})
    const diaFormatado = new Date().toLocaleDateString('pt-br', {day:'2-digit'})





    const novaTarefa =  {
            id: Date.now(), 
            tittle: textoDigitado, 
            completed: false, 
            createdAt: `Dia: ${diaFormatado} • Hora: ${horaFormatada}`, 
            category: "front",
    };

    tasks.push(novaTarefa)
    renderTasks()
    saveToLocalStorage();

    inputTask.value = '';

}

btnAddTask.addEventListener('click', addTask)

renderTasks()

