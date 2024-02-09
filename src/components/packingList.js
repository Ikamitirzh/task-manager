
import  Item  from "./Item.js";

export default function Packinglist({
  items,
  setEditTodo,
  setItems
  
}) {

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
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



  const handleEditItem = (id)=>{
    const findItem = items.find((item)=> item.id === id);
    setEditTodo(findItem);
  }
 
  let temp = items;
  return (
    <div className="list">
      <ul>
        {temp.map((item) => (
          <Item
            item={item}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
            onEditItem={handleEditItem}
            key={item.id}
          />
        ))}
      </ul>

      
        <button onClick={handleClearList}>clear list</button>
      
    </div>
  );
}
