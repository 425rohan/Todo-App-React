import { useState } from 'react'
import './App.css';
import Header from './component/header';
import TodoList from './component/todo-list';

function App() {
  // creting state varibales todos, and editingTodo
const [todos,setTodos] = useState([{ id: Date.now(), item: 'Sample Item 1', completed: false }]);
const [editingTodo, setEditingTodo] = useState(null);

function addTodo(todo){
  if (editingTodo) { // Updating the existing todo item
     setTodos(todos.map(t => t.id === editingTodo.id ? { ...t, item: todo } : t)); 
     setEditingTodo(null); // Clearing the editing state
    } 
  else {
     // Add a new todo item setTodos
     setTodos([...todos, { id: Date.now(), item: todo, completed: false }]); 
    }
}
function handleDelete(id){
  // filtering todo based on id
  setTodos(todos.filter(todo => todo.id !== id));
}

function handleComplete(id){
  //handling complete functionality of the component

    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    }));
  
}


function handleEdit(id){
  // handling edit functionality
  const todoToEdit = todos.find(todo => todo.id === id); 
  setEditingTodo(todoToEdit);
}
 
  return (
    <div className='TodoContainer'>
      <Header onAddTodo ={addTodo} editingTodo={editingTodo}></Header>
      <TodoList todos ={todos} onComplete={handleComplete} onDelete= {handleDelete} onEdit= {handleEdit}></TodoList>
    </div>
  )
}

export default App
