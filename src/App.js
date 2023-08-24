import './App.css';
import React, {useState, useEffect} from 'react';
import AddToDo from './Component/AddToDo';
import TodoList from './Component/TodoList';

function App() {
  const savedTodos = JSON.parse(localStorage.getItem('todos'));
  const [newTodo, setNewTodo] = useState(savedTodos || []);


  const handleTodo = (todo) => {
    setNewTodo(prevTodos => [...prevTodos, todo]);
    
  };

  const removeTodo = (idToRemove) => {
    setNewTodo(prevTodos => prevTodos.filter(todo => todo.id !== idToRemove));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(newTodo));
  }, [newTodo]);

  

  return (
    <div className="App">
      <AddToDo handleTodo={handleTodo}/>
      <TodoList removeTodo={removeTodo} singleTodo={newTodo}/>
     
    </div>
  );
}

export default App;
