// import { useEffect, useRef } from "react"

// export default function Form(){
//     const inputRef = useRef(null);

//     useEffect(() => {
//         if(inputRef.current)
//         inputRef.current.focus();
//     },[])

//     return (
//         <>
//         <input ref={inputRef} className="border border-gray-400 mt-2 ml-2" type="text" placeholder="Type Something..."/>
//         </>
//     )
// }

// Always null check before using a ref