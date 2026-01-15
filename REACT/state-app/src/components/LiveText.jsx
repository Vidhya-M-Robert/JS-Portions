import { useState } from "react";
export default function LiveText(){
    const [text,setText] = useState("");
    return (
        <div>
            <h2>Live Text Preview</h2>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type Something" />
            <button onClick={() => setText("")} style={{marginLeft: "10px"}}>Clear</button>
            <p style={{marginTop:"20px",fontSize:"18px"}}>{text}</p>
        </div>
    )
}