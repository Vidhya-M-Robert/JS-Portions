import { useContext } from "react";
import { CounterContext } from "../Contexts/CounterContext";

export default function DisplayCount(){
    const {count} = useContext(CounterContext);
    return <h2>Count: {count}</h2>
}

// the file that only reads data
// just displays value => make it reusable anywhere