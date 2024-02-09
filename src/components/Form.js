import { useEffect, useState } from "react";

export default function Form({onAddItems, editTodo, setEditTodo, items, setItems}) {
    const [description, setDescription] = useState("")

    const updateTodo = (description, id, packed) => {
      const newTodo = items.map((item) =>
      item.id === id ? {description, id , packed} : item
      )
    
    setItems(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if(editTodo){
      setDescription(editTodo.description);

    }else{
      setDescription("");
    }
  }, [setDescription,editTodo])

   
  
  
    function handleSubmit(e){
      e.preventDefault();
  
      if(!description) return;

      if(!editTodo){
         const newItem = {description, 
        packed:false, id: Date.now()}

        console.log(newItem);
  
        handleAddItems(newItem)
    
        setDescription("");
      }else{
        updateTodo(description, editTodo.id, editTodo.packed)
      }


     
        
  
     
   
    }

    function handleAddItems(item) {
      setItems((items) => [...items, item]);
    }
  

    // const hadleEditItem =(id){

    // }
  
    return (
      <form className="add-form"  onSubmit={handleSubmit}>
        <input type="text"  placeholder="Tasks..." value={description}
        onChange={(e) => setDescription(e.target.value)} />
        <button>{editTodo ? "Update" : "Add"}</button>
      </form>
    )
  }