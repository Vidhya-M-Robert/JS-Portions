// import { useEffect, useRef, useState } from "react"

// export default function PreviousVal(){
//     const [count, setCount] = useState(0);
//     const countRef = useRef(null);

//     useEffect(() => {
//         countRef.current = count;
//     },[count])
//     return(
//         <div className="p-21">
//             <h2>Current Count: {count}</h2>
//             <h2>Previous count:{countRef.current === null ? "N/A" : countRef.current}</h2>
//             <button onClick={() => setCount((prev) => prev +1)} className="border border-grey-300 bg-green-300 mt-3 px-3 py-2">Increment</button>
//         </div>
//     )
// }