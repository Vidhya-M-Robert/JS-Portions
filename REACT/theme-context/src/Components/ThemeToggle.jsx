import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

export default function ThemeToggle(){
    const  { theme, toggleTheme } = useContext(ThemeContext)
    return (
    <button
      onClick={toggleTheme}
      className="
        px-6 py-2 rounded-lg
        bg-indigo-500 text-white
        hover:bg-indigo-600
        transition
      "
    >
    Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}