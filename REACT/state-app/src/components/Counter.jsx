import { useState } from "react";
export default function Counter(){
    const [count,setCount] = useState(1);

    function increment(){
        setCount(count+1);
    }
    function decrement(){
        if(count > 0){
            setCount(count-1);
        }
    }
    return (
        <div>
            <h2>Count: {count}</h2>
            {count === 0 && <p>Zero reached</p>}
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Sub</button>
        </div>
    );
}