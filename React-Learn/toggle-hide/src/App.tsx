import { useState } from "react"
import ToggleButton from "./Components/ToggleButton";
import ToggleContent from "./Components/ToggleContent";

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function toggle(){
    setIsVisible(prev => !prev);
  }
  return (
    <>
     <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-100">
      <ToggleButton isVisible={isVisible} onToggle={toggle}/>
      <ToggleContent isVisible={isVisible}/>
     </div>
    </>
  )
}
export default App
