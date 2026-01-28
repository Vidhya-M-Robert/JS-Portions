type Props={
    isVisible: boolean
}
export default function ToggleContent({ isVisible }: Props){
    if(!isVisible) return null;
    return (
       <div className="p-6 rounded-lg shadow bg-white text-gray-700 transition-opacity duration-300 opacity-60">
        <h2 className="text-xl font-semibold mb-2">Hello!</h2>
        <p>This content is toggled using React state</p>
       </div>
    );
}