export default function USerCard({name,bio = "No bio available"}){
    return (
        <div>
            <h2>{name}</h2>
            <p>{bio}</p>
        </div>
    )
}