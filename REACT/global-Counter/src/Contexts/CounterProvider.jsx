import { useState } from "react";
import { CounterContext } from "./CounterContext";

export function CounterProvider({children}){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(prev => prev + 1);
    }
    return(
        <CounterContext.Provider value={{count, increment}} >
            {children}
        </CounterContext.Provider>
    )
}

// Controls the data
