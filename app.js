const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//Task Container

const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric'});
    dateText.textContent = date.toLocaleString('es', { weekday: 'long'});
    dateMonth.textContent = date.toLocaleString('es', {month: 'short'});
    dateYear.textContent = date.toLocaleString('es', {year: 'numeric'});
};

const addNewTask = event => {
    event.preventDefault();
    const {value} = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState) 
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset(); //Quitar despues para experimentar que pasa
};



const clear = document.querySelector('#delete');
clear.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
})

// document.querySelector('#push').onclick = evvent =>{
//         evvent.preventDefault();
//     if (document.querySelector('#newtask input').value.lenght == 0) { 
        
//     }else {
//         document.querySelector('#tasksContainer').innerHTML += `
//         <div class = "task">
//             <span id= "taskname">
//                 ${document.querySelector('#newtask input').value}
//             </span>
//             <button class="delete">
//                 <i class="far fa-check-square"></i>
//             </button>
//         </div>
//         `;
//         let current_tasks = document.querySelectorAll(".delete");
//         for(let i = 0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }
//     }
// }

const changeTaskState = event => {
    event.target.classList.toggle('done');
};





const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach(el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const renderOrderedTask = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}


setDate();