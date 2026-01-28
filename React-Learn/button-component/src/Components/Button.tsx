type Props = {
    text: string;
    color: "blue" | "red" | "gray";
    onClick?: () => void
}
export default function Button({text,color,onClick}: Props){
    const baseStyles =
    "px-4 py-2 rounded font-medium text-white transition";

  const colorStyles = {
    blue: "bg-blue-500 hover:bg-blue-600",
    red: "bg-red-500 hover:bg-red-600",
    gray: "bg-gray-500 hover:bg-gray-600",
  };
    return(
        <button onClick={onClick} className={`${baseStyles} ${colorStyles[color]}`}>{text}</button>
    )
}