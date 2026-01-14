// import { useState } from "react"
// export default function DoubleIncrement({step=2}){
//     const [count,setCount] = useState(0)
    
//     function Increment(){
//         setCount(count+step);    //STALE STATE  (Count is not always the latest value, React does NOT update state immediately)
//     }
//     function decrement(){
//         if(count-step > 0){
//             setCount(count-step);
//         }
//     }
//     return(
//         <div>
//             <h1>Count: {count}</h1>
//             <br />
//             <button onClick={Increment}>Add</button>
//             <button onClick={decrement}>Subtract</button>

//         </div>
//     )
// }

import { useState } from "react";
export default function DoubleInc({step=2}){
    const[count,setCount] = useState(0);
    
    function Increment(){
        setCount(prevCount => (prevCount+step));          //prevCount  is a callback function.Provided by REACT (value is not from the current render, it is the value from "React's internal state queue")[fn passed to React, not executed by you => “When you are ready to update the state, call this function and give it the latest count value.”]
    }
    function Decrement(){
        setCount(prevCount => Math.max(0,prevCount-step))
    }
    return(
        <div>
            <h1>Count: {count}</h1>

            <button onClick={Increment}>Add</button>
            <button onClick={Decrement}>Sub</button>
        </div>
    )
}

// prevCount => React's internal,latest state 
// count => snapshot at render
// Functional updater prevents stale state bugs because all updates use live internal state, not the old snapshot