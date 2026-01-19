import { Children } from "react";
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

    {/* <p className='message'>Step {step}: {messages[step-1]}</p> */}
    <StepMessage step={step}>
    {messages[step-1]}
    <Button bgColor="#7950f2" textColor="#fff" onClick={() =>alert(`Learn how to ${messages[step-1]}`)}>Learn How</Button>
    </StepMessage>



    <div className='buttons'>
      {/* <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious} text="Previous" emoji="👈" />
      <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext} text="Next" emoji="👉"/> */}


     <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}><span>👈 Previous</span></Button>
    <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}><span>Next 👉</span></Button>
    </div>
    </div>
    )}
    </>
  )
}

// function Button({textColor,bgColor,onClick,text,emoji}){
//     return (
//         <button style={{backgroundColor: bgColor, color:textColor}} onClick={onClick}>
//             <span>{emoji}</span>{text}
//         </button>
//     ); 
// }

function StepMessage({step, children}){
    return(
         <div className="message">
        <h3>Step {step}</h3>
        {children}
    </div>
    )
}


function Button({textColor,bgColor,onClick,children}){
    return (
        <button style={{backgroundColor: bgColor, color:textColor}} onClick={onClick}>
           {children}
        </button>
    ); 
}

// Extracted to a reusable BUTTON component
// To get the finger pointing on the left first and right last ==> Make use of children prop   (pass the content right into the button) OR simply pass JSX into the component and then the component could use that JSX and display it.
// CHILDREN
// The children prop allow us to pass JSX into an element(besides regular props)
// Essential tool to make reusable and configurabe components(especially component content)
// REally useful for generic components that don't know their content before being used