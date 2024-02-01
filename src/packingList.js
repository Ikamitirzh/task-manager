
import  Item  from "./Item.js";

export default function Packinglist({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
  setEditTodo
  
}) {

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
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            onEditItem={handleEditItem}
            key={item.id}
          />
        ))}
      </ul>

      
        <button onClick={onClearList}>clear list</button>
      
    </div>
  );
}
