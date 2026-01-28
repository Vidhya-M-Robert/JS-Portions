import { useState } from "react"
import { CounterButton } from "./Components/CounterButton";
import CounterDisplay from "./Components/CounterDisplay";


function App() {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  function increase(){
    setCount(prev => prev + step);
  }
  function decrease(){
    setCount(prev => prev-step);
  }
  function reset(){
    setCount(0);
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <CounterDisplay count={count}/>
     <CounterButton count={count} onIncrease={increase} onDecrease={decrease} onReset={reset} step={step} setStep={setStep}/>
    </div>
  )
}

export default App
