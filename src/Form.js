import { useState } from "react";

export default function Form({onAddItems}) {
    const [description, setDescription] = useState("")

   
  
  
    function handleSubmit(e){
      e.preventDefault();
  
      if(!description) return;
  
      const newItem = {description, 
        packed:false, id: Date.now()}
        
  
      console.log(newItem);
  
      onAddItems(newItem)
  
      setDescription("");
   
    }

    // const hadleEditItem =(id){

    // }
  
    return (
      <form className="add-form"  onSubmit={handleSubmit}>
        <input type="text"  placeholder="Tasks..." value={description}
        onChange={(e) => setDescription(e.target.value)} />
        <button>Add</button>
      </form>
    )
  }