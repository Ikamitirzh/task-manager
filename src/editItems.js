import { useState } from "react";

export default function EditItemForm({editItem}) {
    const [description, setDescription] = useState("")

   
  
  
    function handleSubmit(e){
      e.preventDefault();
  
      if(!description) return;
  
      const editItem = {description, 
        isEditing:false, id: Date.now()}
        
  
      console.log(editItem);
  
      editItem(editItem )
  
      setDescription("");
   
    }

    // const hadleEditItem =(id){

    // }
  
    return (
      <form className="add-form"  onSubmit={handleSubmit}>
        <input type="text"  placeholder="Update Task..." value={description}
        onChange={(e) => setDescription(e.target.value)} />
        <button>Update Task</button>
      </form>
    )
  }