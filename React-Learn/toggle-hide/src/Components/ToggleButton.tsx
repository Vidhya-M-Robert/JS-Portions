type Props = {
    isVisible: boolean;
    onToggle: () => void
}
export default function ToggleButton({isVisible, onToggle}: Props){
    return(
        <button onClick={onToggle} className="px-6 py-2 rounded-lg text-white font-medium bg-indigo-500 hover:bg-indigo-600 transition">
            {isVisible ? "Hide":"Show"} content
        </button>
    )
}