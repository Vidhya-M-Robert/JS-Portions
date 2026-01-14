import { useState } from "react"
export default function ResettableCounter({initialValue=0,step=1}){
    const[count,setCount] = useState(initialValue);

    function Increment(){
        setCount(prev=>prev+step);
    }

    function Decrement(){
        setCount(prev => Math.max(0,prev-step));
    }

    function reset(){
        setCount(initialValue);
    }
    return(
        <div>
            <h1>Count: {count}</h1>

        <button onClick={Increment}>Add</button>
        <button onClick={Decrement}>Sub</button>
        <button onClick={reset}>Reset</button>
        </div>
    )
}