import { useContext } from "react"
import ThemeToggle from "./Components/ThemeToggle"
import { ThemeContext } from "./Contexts/ThemeContext"

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`
        min-h-screen flex flex-col items-center justify-center
        ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"}
      `}
    >
      <h1 className="text-3xl font-bold mb-4">
        Theme: {theme}
      </h1>
      <ThemeToggle/>
      </div>
  )
}

export default App
