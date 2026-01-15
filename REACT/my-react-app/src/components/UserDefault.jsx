export default function UserDefault({name="Guest User",role="visitor"}){
    return (
        <div>
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    );
}