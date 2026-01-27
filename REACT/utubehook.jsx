// useRef does not trigger re-render
// ref read the updated value instantly without waiting for a re-render. (ref doesn't trigger a re-render)


// import { useEffect , useRef} from 'react';
// interface DemoProps {}

// export default function Demo({} : DemoProps){
//     const inputRef = useRef <HTMLInputElement | null> (null);

//     useEffect(()=>{
//         inputRef.current?.focus();
//     }, []);

//     return (
//         <div>
//             <input ref={inputRef} type='text' placeholder='Type Something...' />
//         </div>
//     );
// }
import { useState, useEffect, useRef, useContext } from 'react'
export default function App(){
    const [name, setName] = useState('')
    // const renderCount = useRef(0)
    const inputRef = useRef('')

    function focus(){
        inputRef.current.focus()
    }

    // useEffect(() => {
    //     renderCount.current = renderCount.current + 1;
    // },[])
    return (
        <>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
        <div>my name is {name}</div>
        {/* <div>I Rendered {renderCount.current} times</div> */}
        <button onClick={focus}>Focus</button>
        </>
    )
}

// used to reference the elements inside the HTML

// Use to store the previous value of state

import { useState, useEffect, useRef } from 'react'
export default function App(){
    const [name, setName] = useState('')
    // const renderCount = useRef(0)
    const previouRef = useRef('')

    useEffect(() => {
        previouRef.current = name
    },[name])

    // useEffect(() => {
    //     renderCount.current = renderCount.current + 1;
    // },[])
    return (
        <>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <div>my name is {name} and it is used to be {previouRef.current}</div>
        {/* <div>I Rendered {renderCount.current} times</div> */}
        </>
    )
}

// syntax => 
    const myRef = useRef(initialValue);
// it returns an object like =;
{
    current : initialValue
}
// always read or write using
myRef.current

// Access a DOM element directly
// Store values that should not cause re-render


// When to use 
    //Need DOM access
    //Need value that persists
    //Track previous value
    //Store timer id/interval
    //Cache value 
    // Store mutable object

// AutoFocus on mount

useEffect(() => {
    inputRef.current.focus();
},[])

// Scroll to section

const sectionRef = useRef(null);

function scrolllToSection(){
    sectionRef.current.scrollIntoView({behavior: "smooth"});
}

// Store interval id

const intervalRef = useRef(null);

function startTimer(){
    intervalRef.current = setInterval(() => {
        console.log("tick");
    },1000);
}

useEffect(() => {                              //cleanup belongs to useEffect
  return () => {
    clearInterval(intervalRef.current);
  };
}, []);

// Track previous state
const prevCount = useRef(null);           //Every time count changes  (state-change reaction => useEffect)

useEffect(() => {
    prevCount.current = count;
},[count]);

// Prevent double click submit

const isSubmitting = useRef(false);

function handleSubmit(){
    if(isSubmitting.current) return;

    isSubmitting.current = true;

    apicall().finally(() => {
        isSubmitting.current = false;
    });
}

// A FORM WITH AUTO-FOCUS AND VALIDATION\
const emailRef = useRef(null);

function submit(){
    if(!email){
        emailRef.current.focus();
    }
}

// CHAT APP - SCROLL TO BOTTOM

const scrollRef = useRef(null);

useEffect(() => {
    scrollRef.current.scrollIntoView();
},[messages]);

// Video player controls

const videoRef = useRef(null);

function play(){
    videoRef.current.play();
}

// DRAG AND DROP
 const startRef = useRef({x:0, y:0});

 function onMouseDown(e){
    startRef.current = {x: e.clientX, y:e.clientY};
 }

//  Normal fn vs UseEffect

// if it runs because of the user interaction(button click,input change, submit,drag, etc.) => use normal fn

// if it runs because state/props changed ot component mounted => use useEffect
// event => Function , Reaction to render/state/props => useEffect
// eg: auto focus on mount => it should happen when the component appears on screen no triggered by click,button,submit SO "useEffect"



// Context API

// Store any type of data and can be accessible to components no matter where they are , access the data without having to pass it through props
// Solution for prop drilling

// CREATE CONTEXT

// src/context/UserContext.js
import { createContext } from 'react'                 //Think like an empty global box

export const UserContext = createContext();

// PROVIDE CONTEXT          (put data to the global box)

// Usually in App.jsx
import { UserContext } from "./UserContext";

function App(){
    const user = {name: "Alex", role: "Admin"};

    return(
        <UserContext.Provider value={user} >
            <NavBar />
            <DashBoard />
        </UserContext.Provider>
    )
}

// CONSUME CONTEXT

// src/components/Profile.jsx

import { UserContext } from "./UserContext";

function Profile(){
    const user = useContext(UserContext);

    return <h>{user.name}</h>
}

// Create context in a separate file using createContext.

// Wrap the app with <Context.Provider> and pass value.

// Consume the context using useContext(Context) in any child.


// docs 
// useContext is a react hook that lets a component read shared data from context
// put data in Context , read it anywhere using useContext
// context => global data
// useContext => how components read that data

// syntax => const value = useContext(SomeContext);
