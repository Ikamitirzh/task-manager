
function Doing({todos, setTodos , deletedTodos , setDeletedTodos, completedTodos, setCompletedTodos}) {
  

    // to handle and add task to a complete (Done) tasks
    const handleCompleteTodo = (id) => {
        const completedTodo = todos[id];
        setCompletedTodos([...completedTodos, completedTodo]);
        const updatedTodos = todos.filter((todo, i) => i !== id);
        setTodos(updatedTodos);
        
      };

     
       
      // this function is for delete tasks
      const handleDeleteTodo = (id) => {
        const deletedTodo = todos[id];
        setDeletedTodos([...deletedTodos, deletedTodo]);
        const updatedTodos = todos.filter((todo, i) => i !== id);
        setTodos(updatedTodos);
      };


      //to show the todos 

    return (
        <div className="list">
            <ul>
                
            
                {todos.map((todo, id) => (
                <li key={id}>
                {todo}
               
                
                {/* <button onClick={() => handleEditItem(todo.id)}>Edit</button> */}
                <button onClick={() => handleDeleteTodo(id)}>Delete</button>
                <input
                type="checkbox"
                onChange={() => handleCompleteTodo(id)}
              />
          </li>
        ))}
      </ul>
        </div>
    )
}

export default Doing
