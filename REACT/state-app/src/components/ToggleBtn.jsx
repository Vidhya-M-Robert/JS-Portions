import { useState } from "react";
export default function ToggleBtn(){
    const[isOn,setIsOn] = useState(false);

    function Toggle(){
        setIsOn(prev => !prev);
    }
    return(
        <div>
            <h1>Toggle</h1>
            <button onClick={Toggle} style={{backgroundColor: isOn ? "green": "red", padding:"10px 16px",color:"white",border:"none",borderRadius:"6px"}}>
                {isOn ? "ON" : "OFF"}
            </button>
        </div>
    )
}