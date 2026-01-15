import { useState } from "react";
export default function ShowHide(){
    const [isvisible,setIsVisible] = useState(false);

    function ToggleVisible(){
        setIsVisible(prev =>!prev)
    }
    return(
        <div>
            <button onClick={ToggleVisible}>{isvisible ? "Show" : "Hide"}</button>
            {isvisible && <p>The BMW M5 is a high-performance version of the BMW 5 Series automobile developed by BMW's motorsport division, BMW M GmbH, built since 1984 with periodic interruptions. The M5 has continuously been produced in the saloon body style, in some countries also as an estate.The BMW M5 is a high-performance version of the BMW 5 Series automobile developed by BMW's motorsport division, BMW M GmbH, built since 1984 with periodic interruptions. The M5 has continuously been produced in the saloon body style, in some countries also as an estate.The BMW M5 is a high-performance version of the BMW 5 Series automobile developed by BMW's motorsport division, BMW M GmbH, built since 1984 with periodic interruptions. The M5 has continuously been produced in the saloon body style, in some countries also as an estate.The BMW M5 is a high-performance version of the BMW 5 Series automobile developed by BMW's motorsport division, BMW M GmbH, built since 1984 with periodic interruptions. The M5 has continuously been produced in the saloon body style, in some countries also as an estate.</p>}
        </div>
    )
}