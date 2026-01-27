// import { useEffect, useRef, useState } from "react"

// export default function StopWatch(){
//     const intervRef = useRef(null);
//     const [time, setTime] = useState(0);

//     function Start(){
//         if(intervRef.current !== null) return
//         intervRef.current = setInterval(() => {
//             setTime((prev) => prev + 1);
//         },1000)
//     }

//     function Stop(){
//         clearInterval(intervRef.current);
//         intervRef.current = null;       //reset
//     }
//     return (
//         <>
//         <button onClick={Start} className="border border-green-500 text-white bg-green-400 mr-[20px] mt-4 px-4 py-2 rounded-md">
//         Start
//         </button>

//          <button onClick={Stop} className="border border-red-500 text-white bg-red-400 mr-[20px] mt-4 px-4 py-2 rounded-md">
//         Stop
//         </button>
//         <p className="mt-4 text-xl font-bold">{time} seconds</p>
//         </>
//     )
// }