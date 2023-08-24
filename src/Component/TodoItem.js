import React from 'react'



function TodoItem(props) {
    const remove = () => {
        props.removeTodo(props.id);
    }
  return (
    <div onClick={remove} className='itemContainer'>
        <h1>{props.title}</h1>  
        

    </div>
  )
}

export default TodoItem