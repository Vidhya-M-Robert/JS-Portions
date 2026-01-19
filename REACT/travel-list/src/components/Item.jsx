export default function Item({item, onDeleteItem, onToggleItem}){
    return(
        <li>
            <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)}/>
            <span style={item.packed ? {textDecoration:"line-through"}: {}}>
            {item.quantity} {item.description}
            </span>
            <button onClick={()=>onDeleteItem(item.id)}>❌</button>  
            {/* to get id instead of event we use this onClick */}
            {/* ()=>  [to not to immediately call the function] */}
        </li>
    )
}
// here in the checkbox we use the controlled element => 
// means the element has the value defined by some state and it also has an event handler which triggers on a change and update the state accordingly.