import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
   
  return (
    <ul>
        {props.singleTodo.map((todo) => (
            <TodoItem key={todo.id}
            id={todo.id}
            title={todo.title}
            removeTodo={props.removeTodo}/>
        ))}
    </ul>
  )
}

export default TodoList