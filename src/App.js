import React, { useState } from 'react';
import Form from './components/form/Form';
import Doing from './components/doing/Doing';
import Done from './components/done/Done';
import Deleted from './components/deleted/Deleted';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [deletedTodos, setDeletedTodos] = useState([]);
  // const [editTodo, setEditTodo]= useState(null)
  

  

  

  return (
    <div className='app'>
      <h1> IKAMI Todo List</h1>

      {/* ---------------------------------------------Form---------------------------------------------- */}

      <Form  todos={todos}  setTodos={setTodos}   />



      {/* ---------------------------------------------Doing---------------------------------------------- */}

      <h2>Tasks to do:</h2>
      <Doing  
        todos={todos}
        setTodos={setTodos}
        deletedTodos={deletedTodos} 
        setDeletedTodos={setDeletedTodos}
        completedTodos={completedTodos}  
        setCompletedTodos={setCompletedTodos}
        
      />


      {/* ---------------------------------------------Done---------------------------------------------- */}


      <h2>Completed Tasks:</h2>
      <Done 
        completedTodos={completedTodos} 
      />




      {/* ---------------------------------------------Delete---------------------------------------------- */}

      <h2>Deleted Tasks:</h2>
      <Deleted deletedTodos={deletedTodos}/>
    </div>
  );
};

export default TodoList;