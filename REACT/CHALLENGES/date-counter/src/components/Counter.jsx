import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);
    const [step,setStep] = useState(1);

    const date = new Date('june 21 2027');
    date.setDate(date.getDate() + count);
    return (
        <>
         <div>
        <button onClick={() => setStep((c)=> c-1)}>SUB</button>
        <span>Step:{step}</span>
        <button onClick={() => setStep((c)=> c+1)}>ADD</button>
        </div>
        <div>
        <button onClick={() => setCount((c)=> c-step)}>SUB</button>
        <span>Count:{count}</span>
        <button onClick={() => setCount((c)=> c+step)}>ADD</button>
        </div>
        <p>
            <span>{count === 0 ? "Today is ": count > 0 ? `${count} days from today is `:`${Math.abs(count)} days ago was `}</span>
           <span>{date.toDateString()}</span> 
            </p>
        </>
    )
}