import "./App.css";
import { useState } from "react";
import Bill from "./Components/Bill";
import SelectPercentage from "./Components/SelectPercentage";
import Display from "./Components/Outputdisplay";
import Reset from "./Components/Reset";
function App() {
    const[bill,setBill] = useState("");
    const[percentage1,SetPercentage1] = useState(0);
    const[percentage2,SetPercentage2] = useState(0);

    const tip = bill * ((percentage1 + percentage2) / 2 / 100);

    function handleReset(){
      setBill('');
      SetPercentage1(0);
      SetPercentage2(0);
    }

  return (
    <>
      <Bill bill={bill} onsetBill={setBill} />
      <SelectPercentage percentage = {percentage1} onSelect={SetPercentage1}>How did you like the service ?</SelectPercentage>
      <SelectPercentage percentage = {percentage2} onSelect={SetPercentage2}>How did your friend like the service ?</SelectPercentage>
      {bill > 0 && 
      <>
      <Display bill={bill} tip={tip}/>
      <Reset onReset={handleReset}/>
      </>
      }
    </>
  );
}

export default App;
