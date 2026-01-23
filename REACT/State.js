// Props are like arguments to a function
// Props are Immutable, they are read only
// props we PASS INTO A COMPONENT(handled outside of the component), and state is HANDLED INSIDE OF THAT COMPONENT
// To mutate a prop we need state 

// When we change the state inside the application, it's going to re-render that portion.

// State is a React's way of remembering data and re-rendering the UI when it changes(Component specific memory)
// Memory + re-render trigger
// Live inside the component
// Mutable
// Controlled by component itself

// State is what the component CONTROLS
// Props are what the component RECEIVES

// State is data that React tracks,controls and used to decide when to re-render UI.

// To update a component with new Data 2 things need to happen -;
    // 1)Retain the data between renders
    // 2)Trigger react to render the component with new data

// UseState Hook -;
// 1)A state variable to retain the data between renders .
// 2)A state setter function to update the variable and trigger React to render the component again.

// Adding a state variable

// 1) Import useState from React at the top of the file
import { useState } from "react";

// replace let index =0;
const [index,setIndex] = useState(0);
// here index is a state variable and setIndex is the setter function

// The [ and ] are called array destructuring(read values from an array), The array returned by useState has always exactly 2 items

// It's working in handleClick
function handleClick(){
    setIndex(index+1);
}

// In React, function starting with "use" is called HOOK.
// Hooks are special functions that are only available while React is rendering
// Hooks can only be called at the top level of the components or your own hooks.
// Can't call inside loops,conditions or other nested functions.

// useState(0) is initializing the value to zero.
// Every time the component renders, the useState givrs an array containing 2 values -;
    // The state(index) variable
    // The setter function(setIndex)

// 1) YOUR COMPONENT RENDERS THE FIRST TIME(as we passes o to the useState as initial value for index), it will return [0,setIndex].
// React remembers 0 is the latest "state" value.

// 2) YOU UPDATE THE STATE. When user clicks the button ,it calls the setIndex(index+1). Index is 0 , So it's setIndex(1).This tells React to remember index is 1 now and triggers another render.
//  3) YOUR COMPONENT'S SECOND RENDER .React still sees useState(0) but react remembers that index is set to 1, it returns [1,setIndex] instead and so on.

// You can define multiple state varibles if there states are unrelated
// State structure =;
    // Group related states
    // Avoid contradiction in state 
    // Avoid redundant state 
    // Avoid duplication in state
    // Avoid deeply nested state 

// If you render the same component twice,each copy will have completely isolated state.Changing one of them doesn't sffect the other.
// Unlike props, state is fully private to the component declaring it.Parent component can't change it.

// RECAP =>
    // Use a state variable when a component needs to remember some information between the renders.
    // State variables are declared by calling the "useState" hook.
    // Hooks are special functions that start with "use".They let you hook into React features like state.
    // Calling hooks, is only valid at the top of the components or another hook
    // Usestate hook returns a pair of values -; the current state and a function to update it.
    // State is private to the component,If you render it in two places, each copy gets it's own states

// RENDER AND COMMIT
// Before the components are rendered on screen , they must be "rendered by React"

// Requesting and Serving UI has 3 steps -;
    // 1)Triggering a render(delivering the order of the customer to the kitchen)
        // 2 reasons for a component to render =; It's the component's initial render(When app starts u need to trigger the initial render), The component's state has been updated(Once the compoenent has been initially rendered, u can trigger further renders by updating it's state with the "set" function )

    // 2)Rendering the Component(Preparing the order in the kitchen)
            // Rendering is React calling your components => On initial render,React will call the root component,for subsequent react will call the fn component whose state update triggered the render.
            // The process is recursive, updated component returns some other component(react will render it)=> and so on until there are no more nested components and react knows Exactly what should be displayed on the screen.

    // 3)Commiting to the DOM(placing the order on the table)
        // After rendering your components,React will modify the DOM

// STATE => WHEN YOU NEED RE-RENDER AND UPDATE YOUR APPLICATION BASED ON SOMETHING THE USER HAS DONE.
// PROPS => WHEN YOU WANT TO DISPLAY SOME INFORMATION INSIDE OF A COMPONENT WITHOUT HARD CODING IT.




// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// UI is a function of data
// State exists for=>
    // A way to store data
    // A way to know when data changes
    //A way to re-render UI safely

    // State is data that React owns,tracks,and uses to decide when to re-render a component.
    

// STALE STATE BUG

// suppose initial state of count = 0;
// click add once => setCount(0+2) => 2 (React will update it later)
// click add again very fast => setCount(0+2) (still uses old count) 
//  ???
// React batched updates , count is still 0 in this render so result become 2 again
// React state : is asynchronous, is scheduled, isbatched
// Solution => Use Functional updater => setCount(prevCount => prevCount + step);  => because prevCount is always the latest value     <==> // DoubleIncrement.jsx

// GR => If the next state depends on the previous state, ALWAYS use the functional updater



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// UDEMY 

// Rendering Lists =>
    // key => performance optimization
        // special prop that React uses internally to identify list items.
        // Key is not passed to the component as prop
        // It is used only by React
    // WHY DOES REACT NEEDS KEY ??
        // React uses virtual DOM
        // Reconciliation => React compares previou UI with new UI and updates only what changed.




    // map => transforms an array into NEW array (especially for list) Creates JSX elements
    // forEach() => returns undefined  (useless in JSX)

// MENTAL MODAL

// array.map(ONEItem => <Component propName={ONEItem} />)


// Conditional rendering with Multiple Returns
// 2 returns cannot happen at the same time.

// React Fragment
//  <>....</>  or
// Sometimes we need a key while rendering lists => use 
// import React from "react";
// <React.Fragment id="sdcs"></React.Fragment>

// State => Data that a component can hold over time, 
//       => necessary for information that it needs to remember throughout the app's lifecycle   (Component's memory)
// eg:Notification count, textContent of input field, active tab in a tab component  (common thing in this is that => THE USER CAN CHANGE THESE VALUES.)

// State variable / piece of state => A single variable in a component(component state)
// Updating the state triggers the react to re-render the compoenent
// State allows developers =>
    // Update the component's view(by re-rendering it)
    // Persist local variables between renders

// useState is a HOOk in react , all the React Functions that starts with "use" are HOOKS (eg; useEffect, useReducer, useState) only call on the top level of the function.

// re-rendering basically means that => the React calls the component function again so each time the component rendered.

// Array.from() => Creating an array dynamically

Array.from(arrayLike, mapFunction)

Array.from({length:20},(_,i)=>i+1)

// length:20  is not an array   (It is an array like object telling js: Create somthing with 20 empty slots)
// (_,i)=>i+1  => _(value unused here)  i=> index(starts from 0) i+1 => converts (0-19) into (1-20)
.map((num) => (
  <option value={num} key={num}>{num}</option>
))
// loop over each element , returnss a new array, In React => returns JSX elements

// Controlled elements technique => It is react that owns and control the input fields and no longer the DOM.
    // Define the piece of state 
    //Use the piece of state on the element that we want to control
    //Update the state variable

// PROPS < === > STATE
// Receiving new props causes component to re-render.(Usually when the parent's state has been updated)


// ////////////////
// CONTROLLED ELEMENTS
// A controlled element is a FORM INPUT whose value is "controlled" by 'React' state instead of 'DOM'.
// React becomes the single source of truth
// The DOM no longer decides the value
// State decides => DOM just displays

// Normal HTML input(Uncontrolled) =>

    // <input type="text"/>
        //Browser stores the value
        //JS reads it only when needed
        //React has no idea What's inside

//Controlled input(React way)
{/* <input value={state} onchange={setState}/> */}
    // React state stores the value
    // DOM displays whether React gives
    // React always knows the value


// Why React NEEDS Controlled Elements
//  Validation
// if (!description) return;


// React already knows input value.

//  Reset Form Easily
// setDescription("");
// setQuantity(1);


// Try doing this with DOM — painful 

//  Disable button conditionally
// <button disabled={!description}>ADD</button>

//  Live preview
// <p>{description}</p>

// Thinking in REACT => 
    // Break the desired UI onto componenets and establish the component tree
    // Build a static version in React(without state)
   
//////////////////////////////////////////////////////////////////////////////////
     //Think about state : 
        //When to use state
        //Types of state: local vs. global
        //Where to place each of state 
    //Establish data flow:                                     State management
        //One-way data flow
        //Child-to-parent communication
        //Accessing global state
////////////////////////////////////////////////////////////////////////////////////

// Local State =>   eg: searchbar on udemy
    //State needed only by one or few components
    // State that is defined in a component and only that component and child components have access to it (by passing via props)

// Global State =>  eg: shopping cart of udemy
    //State that many components might need
    //Shared state that is accessible to every component in the entire application.
    //It shared b/w all components => therefore it is also called as shared state
// Can define global state  using React's Context API or Redux


//////////////////////////////////////////////////////////////////////////////////////////////////////
// useEffect HOOK - to register an effect
//function contains the side effect(any interaction between a react component and a world outside that component) that needed to register 
// (means to run as the component renders, actually after it has been painted on to screen) [the effect will actually be executed after render]

// returns a function and a dependency array (and sometimes a cleanup function).
// [] dependency array => the effect will only run on mount(When the app component renders for the first time.)
// Fetch data as soon as the application loads
//Cleanup function => A function that will be called before the component re-renders or unmounts.
// To keep a component synchronized with some external system


// Always it consoles 2 results because of the React's strict mode.(this is for identify if there are any problems with the effect)

// To show that the data is still loading we use some state => and as soon as the result is loaded then we don't need the loading indicator anymore.

// By default, effects run after every render. We can prevent that by passing a dependency array, without that react doesn't know when to run the effect.
// Each time one of the dependencies changes, the effect will be executed again, Every state variable  and prop used inside the effect MUSt be included in the dependency array.

// useEffect(fn, [x,y,z]);
// useEffect(fn, []);
// useEffect(fn);