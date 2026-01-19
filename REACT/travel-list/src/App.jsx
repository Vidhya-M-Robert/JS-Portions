import Form from "./components/Form"
import Logo from "./components/Logo"
import PackingList from "./components/PackingList"
import Stats from "./components/Stats"
import { useState } from "react"

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

function App() {
  const [items,setItem] = useState([]);

   function handleAddItems(item){
      setItem(items => [...items,item])    //current item + new item should be displayed ,so current depends on new , therefore a callback fn is needed.
      // React is immutable, we can't mutate the array like  [items.push(item)];  , so create new array with current(spread the current item) and (add) new items.
  }
  function handleDelete(id){
    console.log(id);
    setItem(items => items.filter(item => item.id !==id))
  }

  function handleToggle(id){
    setItem(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  }
  function handleclearList(){
    const confirmed = window.confirm("Are you sure you want to clear all the items?")
    if (confirmed) setItem([]);
  }
  return (
   <div className="app"> 
    <Logo />
    <Form onAddItems = {handleAddItems}/>
    <PackingList  items = {items} onDeleteItem={handleDelete} onToggleItem={handleToggle} onallDelete={handleclearList}/>
    <Stats items={items}/>
   </div>
  )
}

export default App


// Whenever multiple sibling component needs same state , we move that state up to the first common parent component
// By lifting state up, we have successfully shared one piece of state with multiple componenets in different positions in the component tree
// If data flows from parent to child, how can child update state in parent ? => To do that pass the set function also to the child as prop so,it can update the parent component
// Passing down a setter fn => child-to-parent communication / inverse data flow


// DERIVED STATE
// State that is computed from an existing piece of state or from props
// Just regular variable is required no seperate useState as it depends on other state
// works because(updating the single source of truth will re-render i.e, the function is called again) re-rendering component will automatically re-calculate derived state.

// eg: Stats need derived state
