async function fetchTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const todos = await res.json();
    const list = document.getElementById('todoList');
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        list.appendChild(li);
    });
}

fetchTodos();