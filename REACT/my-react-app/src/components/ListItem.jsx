export default function ListItem({icon,text}){
    return (
        <li style={{display:"flex",alignItems:"center",gap:"8px"}}>
            <span>{icon}</span>
            <span>{text}</span>
        </li>
    )
}