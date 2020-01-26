var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// var todos = [
//   'Fazer café',
//   'Estudar Javascript',
//   'Acessar comunidade da Rockeseat'
// ];

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
  listElement.innerHTML = ''; // apaga todos os elementos que estão dentro de ul

  for(todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    var pos = todos.indexOf(todo); // determina a posição do elemento dentro da lista (array)
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1); // remove o próximo item, ou seja, o item em determinada posição desejada 
  renderTodos();
  saveToStorage();
}

// armazenamento local
function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}