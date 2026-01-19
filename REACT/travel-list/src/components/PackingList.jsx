import { useState } from "react";
import Item from "./Item";

export default function PackingList({items, onDeleteItem, onToggleItem,onallDelete}){
    const[sortBy,setSortBy] = useState("input");

    let sortedItems;

    if(sortBy === 'input'){ 
        sortedItems = items
    }

    if(sortBy === 'description') sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description))               //slice make a copy of the array, as sort is a mutating method

    if(sortBy === 'packed') sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));
    return(
        <div className="list">
        <ul>
           {sortedItems.map((item) => (
               <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id}/>
            ))} 
        </ul>


            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value='input'>Sort by input order</option>
                    <option value='description'>Sort by description</option>
                    <option value='packed'>Sort by packed status</option>
                </select>
                <button onClick={onallDelete}>Clear List</button>
            </div>
        </div>
    )
}

//need item in the Form component but ca't pass it as a prop as FOrm is not the parent of PackingList, they are sibling components , so here we use lift up state => Take the needed state and move to the closest parent component

// Sorting items => to know what the currently selected element here is we use controlled element.