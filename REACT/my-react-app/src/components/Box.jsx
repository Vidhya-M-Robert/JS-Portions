export default function Box({children}){
    return (
        <div style={{border:"2px solid black", padding: "16px", backgroundColor:"blue"}}>
            {children}
        </div>
    )
}