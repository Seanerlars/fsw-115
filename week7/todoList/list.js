let todoItems = [];

function renderTodo(todo) {
  localStorage.setItem('todoItems', JSON.stringify(todoItems));

  const list = document.querySelector('.js-todo-list');
  const item = document.querySelector(`[data-key='${todo.id}']`);
  
  if (todo.deleted) {
    item.remove();
    if (todoItems.length === 0) list.innerHTML = '';
    return
  }

  const isChecked = todo.checked ? 'done': '';
  const node = document.createElement("li");
  node.setAttribute('class', `todo-item ${isChecked}`);
  node.setAttribute('data-key', todo.id);
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;

  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
}

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}

function toggleDone(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}

function deleteTodo(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));
  const todo = {
    deleted: true,
    ...todoItems[index]
  };
  todoItems = todoItems.filter(item => item.id !== Number(key));
  renderTodo(todo);
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.js-todo-input');

  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

const list = document.querySelector('.js-todo-list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
  
  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('todoItems');
  if (ref) {
    todoItems = JSON.parse(ref);
    todoItems.forEach(t => {
      renderTodo(t);
    });
  }
});

const getTodos = () => {
  axios.get('https://api.vschool.io/SeanLarsen/todo')
  .then(res => {
      displayTodos(res.data)
  })
  .catch(err => console.log(err))
}

getTodos()

const displayTodos = (data) => {
  


let container = document.getElementById('todoContainer')

data.forEach( todo => {
  console.log(todo)
  let todoItem = document.createElement('div')
  let title = document.createElement('h3')


  let deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'Delete'
  deleteButton.id = todo._id
  deleteButton.addEventListener('click', deleteTodo)

  let completeButton = document.createElement('button')
  completeButton.addEventListener('click', updateTodo)

  let isComplete = todo.completed
  let completeButtonText = ''
  isComplete ? completeButtonText = 'Mark incomplete' : completeButtonText = 'Mark Complete'
  completeButton.innerHTML = completeButtonText
  completeButton.id = todo._id
  completeButton.value = todo.completed




  title.textContent = todo.title
  todoItem.appendChild(title)
  todoItem.appendChild(deleteButton)
  todoItem.appendChild(completeButton)
  container.appendChild(todoItem)
})
}

const createTodo = (e) => {
  e.preventDefault()
  console.log("ran")

  const todoTitle = document.getElementById('titleInput').value
  const todoDescription = document.getElementById('descriptionInput').value
  const todoPrice = document.getElementById('priceInput').value
  const todoCompleted= document.getElementById('completedInput').checked

  let newTodo = {
      title:todoTitle,
      description: todoDescription,
      price: todoPrice,
      completed: todoCompleted
  

  }

  axios.post('https://api.vschool.io/SeanLarsen/todo', newTodo)
  .then(res => location.reload())
  .catch(err => console.log(err))
  }
      

const form = document.getElementById('post-new-todo')
form.addEventListener('submit', createTodo)

const deleteTodo = (e) => {
  const id = e.target.id


axios.delete(`https://api.vschool.io/SeanLarsen/todo/${id}`)
.then(res => location.reload())
.catch(err => console.log(err))
}


const updateTodo = (e) => {
  e.preventDefault
  console.log('update')
  const id = e.target.id
let completed = e.target.value === 'true' ? true : false



  let updatedTodo = {
      completed: !completed

  }


axios.put(`https://api.vschool.io/SeanLarsen/todo/${id}`, updatedTodo)
.then(res => location.reload())
.catch(err => console.log(err))
}

