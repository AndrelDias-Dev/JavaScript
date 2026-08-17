export const tasks = [];

export function addTask(text) {

    const task = {
        id: Date.now(),
        date:diaFormatado,
        hours:horaFormatado,
        text: text,
        completed:false
};

tasks.push(task)

}

const diaFormatado = new Date().toLocaleDateString('pt-BR')
const horaFormatado = new Date().toLocaleTimeString('pt-BR')