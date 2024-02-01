
import  Item  from "./Item.js";

export default function Packinglist({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
  onEditItem
}) {
 
  let temp = items;
  return (
    <div className="list">
      <ul>
        {temp.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            onEditItem={onEditItem}
            key={item.id}
          />
        ))}
      </ul>

      
        <button onClick={onClearList}>clear list</button>
      
    </div>
  );
}
