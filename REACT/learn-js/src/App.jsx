import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';
import Message from './Components/Message';
function App() {
const[advice,getAdvice] = useState("");
const[count,setCount] = useState(0);

  async function gettAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    getAdvice(data.slip.advice);
    setCount((coun => coun +1));
  }
  
useEffect(() => {                                  //2 args => a function and a dependency array
  async function fetchAdvice() {
    await gettAdvice();
  }

  fetchAdvice();
}, []);
  return (
    <>
     <h1>Fetch Advice</h1>
     <button onClick={gettAdvice}>Get Advice</button>
     <h4>{advice}</h4>
     <Message count={count} />
    </>
  )
}

export default App
