// import { useEffect, useRef, useState } from "react";

// export default function BottomScroll() {
//   const [messages, setMessages] = useState([]);
//   const bottomRef = useRef(null);

//   function addMessage() {
//     setMessages((prev) => [
//       ...prev,
//       "Message " + (prev.length + 1),
//     ]);
//   }

//   useEffect(() => {
//     if (bottomRef.current) {
//       bottomRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <div
//         style={{
//           height: "200px",
//           overflowY: "auto",
//           border: "1px solid #ccc",
//           padding: "10px",
//         }}
//       >
//         {messages.map((msg, index) => (
//           <div key={index}>{msg}</div>
//         ))}
//         <div ref={bottomRef}></div>
//       </div>

//       <button onClick={addMessage} style={{ marginTop: "10px" }}>
//         Add Message
//       </button>
//     </div>
//   );
// }
