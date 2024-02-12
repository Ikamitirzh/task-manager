import { useState } from "react";

function Form({todos, setTodos }) {
    const [newTodo, setNewTodo] = useState('');
    
 

  function handleSubmit(e){
    e.preventDefault();     // protect from reload the page
  

     // to add the todos
    if(!newTodo) return;
    if (newTodo.trim() !== '') {
       setTodos([...todos, newTodo]);
       setNewTodo('');
    }

             
    
  }






    return (
        <div className='add-form'>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
        <button>Add</button>
      </form>
        </div>
    )
}

export default Form
