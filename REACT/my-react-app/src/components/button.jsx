// export default function Button({disabled}){
//     return(
//         <button disabled={disabled}>Click Me</button>
//     )
// }

export default function Button({disabled}){
    return (
        <button disabled={disabled}>
            {disabled ? "Disabled" : "Enabled"}
        </button>
    )
}