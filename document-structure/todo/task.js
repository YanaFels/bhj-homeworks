'use strict'

const input = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
const btnAdd = document.querySelector('.tasks__add');

function addTask(e) {
    if(input.value !== '') {
        const newTask = document.createElement('div');
        newTask.classList.add('task');
        newTask.insertAdjacentHTML('beforeend', `
            <div class="task__title">
                ${input.value}
            </div>
            <a href="#" class="task__remove">&times;</a>`)
        tasksList.appendChild(newTask);
        input.value = '';
        
        newTask.querySelector('.task__remove').addEventListener('click', () =>{
            newTask.remove();
        });
    }
}

btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    addTask();
});