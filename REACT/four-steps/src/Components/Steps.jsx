import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];  

export default function Step(){
    const[step,setstep] = useState(1);
    const[isOpen,setIsOpen] = useState(true);
    // const arr = useState(1);
    // console.log(arr);

    // const step = 1

    function handlePrevious(){
        if(step > 1)
        setstep(step - 1);
    }

    function handleNext(){
        if(step < 3)
        setstep(step + 1);
    }

    return (
    <>
        <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
        {isOpen && (
    <div className='steps'>
      <div className='numbers'>
          <div className={step >=1 ? 'active': ''}>1</div>
          <div className={step >=2 ? 'active': ''}>2</div>
          <div className={step >=3 ? 'active': ''}>3</div>
      </div>

    <p className='message'>Step {step}: {messages[step-1]}</p>
    <div className='buttons'>
      {/* <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={() => alert("previous clicked")} onMouseEnter={() => alert("Test")}>Previous</button>
      <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={() => alert("Next Clicked")}>Next</button> */}

      <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={handlePrevious}>Previous</button>
      <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={handleNext}>Next</button>
    </div>
    </div>
    )}
    </>
  )
}