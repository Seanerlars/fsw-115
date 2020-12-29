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
    isComplete ? completeButtonText = 'Mark Complete' : completeButtonText = 'Mark inomplete'
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

