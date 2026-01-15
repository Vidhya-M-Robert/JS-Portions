export default function Toggle({isOn, onToggle}){
    return (
        <button onClick={onToggle}>
            {isOn ? "ON": "OFF"}
        </button>
    )
}