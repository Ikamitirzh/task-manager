import { useState } from "react";

import Form from "./components/Form.js";
import Packinglist from "./components/packingList.js"



export default function App() {
  const [items, setItems] = useState([]);
  const [editTodo, setEditTodo]= useState(null)

 
  

 

 


 

  return (
    <div className="app">
      
      <h1>ikami TodoList</h1>
      {/* <h3>Todos</h3> */}
      <Form  editTodo={editTodo} setEditTodo={setEditTodo} items={items} setItems={setItems}/>
      
      <Packinglist 
        items={items}
        setItems={setItems}
        setEditTodo={setEditTodo}
      />
   
    </div>
  );
}
