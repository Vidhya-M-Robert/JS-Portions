import { useState } from "react";
export default function StepCounter(){
    const [count, setCount] = useState(0);
    const[step,setStep] = useState(1);

    function increment(){
        setCount(count + step);
    }
    function decrement(){
        if(count-step >= 0){
            setCount(count-step);
        }
        else{
            setCount(0);
        }
    }
    return(
        <div>
            <h2>Count : {count}</h2>
            <label>
                Step: <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))}/>
            </label>

            <br />

            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Subtract</button>
        </div>
    )
}