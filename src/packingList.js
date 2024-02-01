
import  Item  from "./Item.js";

export default function Packinglist({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
  onEditItem
}) {
 
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
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
