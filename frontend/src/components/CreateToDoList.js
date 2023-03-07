import React, { useState } from 'react';

function CreateToDoList() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <div className='outer-box'>
        <div text-end>
        <h2>React Todo App</h2>
        <h4>Add a new Todo</h4>
        </div>

        <div>
        <input className='text-addTodo' type="text" name='todo' placeholder='write here........' />
        <button className='btn-addTodo' type='button' name='addTodo'>Add Todo</button>
        </div>
      
      </div>
      
    </div>
  )
}

export default CreateToDoList;
