import { useState } from "react";

export default function Form(){
  const[description,setDescription] = useState("");
  const[quantity,setQuantity] = useState(5);
  // const [items,setItem] = useState([]);

  // function handleAddItems(item){
  //     setItems()
  // }

  function handleSubmit(e){
    e.preventDefault();
    if(!description) return;

    const newItem = {
      description, quantity, packed:false,id:Date.now()
    };
    console.log(newItem);
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
