// CONDITIONAL STYLING

// export default function Tag({type,children}){
//     return (
//         <span style={{backgroundColor: type === "success" ? "green" : "red",color: "white",padding: "6px 12px",borderRadius: "4px",fontSize: "14px"}}>
//             {children}
//         </span>
//     )
// }

// INLINE STYLES

// export default function Tag({type,children}){
//     const styles = {
//         success: {
//             backgroundColor:"green",
//             color:"white",
//             padding: "6px 12px",
//             fontSize:"14px"
//         },
//         error:{
//             backgroundColor:"red",
//             color:"white",
//             padding: "6px 12px",
//             fontSize:"14px"
//         }
//     };
//     return(
//             <span style={styles[type]}>
//                 {children}
//             </span>
//         )
// };

// USING CSS CLASSES (PROJECT WAY)
import "./Tag.css";
export default function Tag({type,children}){
    return (
        <span className={`tag ${type}`}>
            {children}
        </span>
    );
}