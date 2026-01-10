// Event is something that happens in the browser (actions)
// User clicks a button
// User types in an input
// Page loads
// Mouse moves
//   => Key is pressed

// Event Listener 
// Function that waits for an event and runs when that event occurs.

// element.addEventListener(eventType, callbackFunction);

const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    alert("Button Clicked");
});

// btn => HTML element
// "click" => Event type
// function(){} => Code to run when event happens 

// Mouse Events

// click        => Single click
// dbclick      => Double click
// mousedown    => Mouse button pressed
// mouseup      => Mouse released
// mousemove    => Mouse moves
// mouseenter   => Mouse enters element
// mouseleave   => Mouse leave

// Keyboard Events


// keydown    =>	Key pressed
// keyup   =>	Key released
// keypress	=>  (deprecated)

// Form Events

// submit	       Form submitted
// input	       Input value changes
// change	       Value changed and focus lost
// focus	       Input focused
// blur	           Input loses focus

// Window Events

// load	           Page fully loaded
// resize	       Window resized
// scroll	       Page scroll