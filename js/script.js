let todos = [];

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    if (validateInput(todoInput, todoDate)) {
        const todo = {
            text: todoInput.value,
            date: todoDate.value
        };
        todos.push(todo);

        renderTodos();
    }
}

function renderTodos() {
    const todoTable = document.getElementById('todo-table');

    todoTable.innerHTML = `
    <thead>
        <tr>
            <th>No</th>
            <th>Task</th>
            <th>Date</th>
        </tr>
    </thead>
    
    <tbody id="table-body">
    `;

    const tbody = todoTable.querySelector('tbody');
    tbody.innerHTML = '';


    todos.forEach((todo, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${todo.text}</td>
            <td>${todo.date}</td>
        `;
        tbody.appendChild(row);
    }
    );

    // Clear input fields
    document.getElementById('todo-input').value = '';
    document.getElementById('todo-date').value = '';
}

function validateInput(todoInput, todoDate) {
    if (todoInput.value === '' || todoDate.value === '') {
        alert('Todo dan Tanggal tidak boleh kosong');
        return false;
    }
    return true;
}

function todoDelete() {
    todos = [];
    renderTodos();
}

function sortTodos() {
    const sortOption = document.getElementById('sort-option').value;

    if (sortOption === 'date-asc') {
        todos.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOption === 'date-desc') {
        todos.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === 'text-asc') {
        todos.sort((a, b) => a.text.localeCompare(b.text));
    } else if (sortOption === 'text-desc') {
        todos.sort((a, b) => b.text.localeCompare(a.text));
    }

    renderTodos();
}

