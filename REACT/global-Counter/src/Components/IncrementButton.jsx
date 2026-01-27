import { useContext } from "react";
import { CounterContext } from "../Contexts/CounterContext";

export default function IncrementButton(){
    const { increment } = useContext(CounterContext);
    return <button onClick={increment}>+</button>
}

// triggers logic => just calls a function
