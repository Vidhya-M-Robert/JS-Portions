import { useState } from "react";

export default function Form({onAddItems}){
  const[description,setDescription] = useState("");
  const[quantity,setQuantity] = useState(5);
  // const [items,setItem] = useState([]);

  // function handleAddItems(item){
  //     setItem(items => [...items,item])    //current item + new item should be displayed ,so current depends on new , therefore a callback fn is needed.
  //     // React is immutable, we can't mutate the array like  [items.push(item)];  , so create new array with current(spread the current item) and (add) new items.
  // }

  function handleSubmit(e){
    e.preventDefault();
    if(!description) return;

    const newItem = {
      description, quantity, packed:false,id:Date.now()
    };

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
    return(
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip ?</h3>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>   {/*instead of + use Number to convert [string "number"] to number */}  
          {/* HTML <select> always returns a string, even for numbers. */}
          
          {/* <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option> */}
          {/* create a list of array and loop */}

          {Array.from({length:20}, (_,i)=> i+1).map((num)=> (<option value={num} key={num}>{num}</option>))}
        </select>
          <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)}/>
          <button>ADD</button>
      </form>
    )
}


//need item in the Form component but ca't pass it as a prop as Form is not the parent of PackingList, they are sibling components , so here we use lift up state => Take the needed state and move to the closest parent component
// So move [item,setItem] state to app component which is the common parent of form and packingList