import { useState } from "react";

import Form from "./Form.js";
import Packinglist from "./packingList.js"



export default function App() {
  const [items, setItems] = useState([]);
  const [editTodo, setEditTodo]= useState(null)

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

 

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }


 

  return (
    <div className="app">
      
      <h1>ikami TodoList</h1>
      <Form onAddItems={handleAddItems} editTodo={editTodo} setEditTodo={setEditTodo} items={items} setItems={setItems}/>
      
      <Packinglist 
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
        setEditTodo={setEditTodo}
      />
   
    </div>
  );
}
