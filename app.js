const input = document.getElementById('todoInput');
const button = document.getElementById('addBtn');
const list = document.getElementById('todoList');

button.addEventListener('click', () => {
    const task = input.value.trim();
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        list.appendChild(li);
        input.value = '';
    } 
})