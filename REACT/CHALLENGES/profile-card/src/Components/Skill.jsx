export default function Skill({skill,color,level}){
    return (
        <div className="skill" style={{backgroundColor: color}}>
            <span>{skill}</span>
            <span>
                {level === "nice" && "😊"} 
                {level === "good" && "👍"} 
                {level === "excellent" && "💪"} 
            </span>
            </div>
    )
} 