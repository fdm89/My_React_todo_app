import React, {useState} from 'react';


function AddToDo(props) {
    const [todo, SetTodo] = useState('');

    const handleInputChange = (e) => {
       SetTodo(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
       const newTodo = {
        title: todo,
        id: Math.random().toString(36)
       }
       props.handleTodo(newTodo);
       SetTodo('');
    }

  return (
    <form onSubmit={submitHandler}>
        <input onChange={handleInputChange} type='text' value={todo}/>
        <button type='submit'>Add to do</button>
    </form>
  )
}

export default AddToDo