// Open source library for buiding user interface.(Not a framework)
// (JS LIBRARY THAT BUILDS AND MANAGES A UI AS A TREE OF COMPONENTS,USING A VIRTUAL REPRESENTATION OF DOM TO UPDATE THE REAL DOM EFFICIENTLY).
// Intergrate easily with other libraries
// Why in modern web development
//1. Component based architecture =>(allow us to break down an application into small encapsulated parts and used to compose more complex UI)
// 2. Reusable code(code for article component of react can be used for article component of angular and vue)
// 3.Declarative => tell react what the UI should look like and react will build the actual UI.
// 4.React will efficiently handle the updating and rendering of the components when data changes.
// Can easily intgrate react into any application.
// Scalable


// KEEP THE UI IN SYNC WITH THE STATE

// js =>
    count++;
    document.getElementById("count").innerText = count;
// react =>
    setCount(count+1); 

// Minimizes the bugs while building UI's.(through components[self-contained logical pieces of code that describes a portion of the UI.])
// SPA

// SPA(Single Page Application) & MPA (Multi-Page Application)
// React apps are SPAs.
// Web app that loads a SINGLE HTML PAGE ONCE and dynamically updates contents without refreshing the whole page.(GMAIL,FACEBOOK,TWITTER)

// Advantages -;
// loads once (html,css,js) loads initially.
// Fast Navigation(only changed data is fetched from the server, not the whole page.)
// Client-side Routing => Instead of server decides which page to show,JS(React router handles page changes inside the browwser).
// Better User Experience

// Flow =;
// 1.Browser loads 'one HTML file'.
// 2.React loads JS.
// 3.JS controls UI upadtes.
// 4.Navigation happens "without reload".

// MPA
// Traditional websites where each new page reloads fully from the server.(AMAZON,FLIPKART)

// Features 
// Full reload -> Each links loads a new HTML page from the server.
// Slow navigation => Every page requires a fresh request  to the server and reloading HTML,CSS,JS,images
// Server-side Routing => server decides which page to send when you go to a URL.

// Flow =;
// 1.User clicks link
// 2.Browser sends Request
//3. Server sends new HTML
//4.Browser reloads page

// REACT DOES NOT RELOAD PAGES - IT RE-RENDERS COMPONENTS

// COMPONENTS
// Components are basic building blocks of react app.
// Create small,reusable parts and combine them to build complex UI.
// A component is comprised of multiple other small components.
// NAME OF THE COMPONENT SHOULD START WITH CAPITAL LETTER
// A Component should have a .jsx extension.

// FEATURES
//  Reusability -: Write Once , Use in many places  => Increase Speed.
// Manitainability -: If something breaks, fix it in one place, and updates everywhere.
// Modularity -: Breaks a big app into small, manageable parts.

// A REACT COMPONENT IS A JS FUNCTION THAT YOU CAN SPRINKLE WITH MARKUP.

export default function Profile(){
    return(
        <img src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"/>
    )
}
// 1. Export the Component
// "export default" prefix is a standard JS syntax => allows to later import it from other files.

// 2.Define the function
// REACT COMPONENTS ARE REGULAR JS FUNCTIONS, but their names must start with a "CAPITAL LETTER".

// 3.Add Markup
// RETURNS JSX(let embed markup inside JS).
// Without parentheses,any code on the line after return will be ignored.
return (
    <div>
        <img src="" alt=""/>
    </div>
)

// component nesting
export default function Gallery(){
    return (
        <section>
            <h1>Scientists</h1>
            <Profile/>
            <Profile/>
            <Profile/>
        </section>
    );
}
// As section is lowercase, HTML tag.
// As Profile starts with capital letter, Component tag.

//COMPONENTS CAN RENDER OTHER COMPONENTS, BUT NEVER NEST THEIR DEFINITION.
// When a child component needs some data from a parent, pass it by "props" instead of nesting definition.
// IN REACT, EVERY PIECE OF UI IS A COMPONENT
// Root component => App.js

// Default Export & Named Export 
// 
// A FILE CAN HAVE NO MORE THAN ONE "DEFAULT" EXPORT, BUT IT CAN HAVE AS MANY NAMED EXPORTS.
// Default =>
 export default function Button(){

}
// import statement =>
    import Button from './Button.js';

// Named =>
    export function Button(){

    }
// import statement =>
    import {Button} from './Button.js';


// Introduction to JSX (JavaScript XML) 
// HTML - like markup inside a JS file.
// Syntax Extension for JS.
// To use js in JSX use {}
// Can't return multiple JSX tags. Wrap then in a <div>...</div> or an empty <>...</>
// Parentheses => To show that multiple lines of code are part of same expression.

function AboutPage(){
    return (
        <>
        <h1>About</h1>
        <p>
            Hello there. <br /> How do you do ?
        </p>
        </>
    );
}

// JSX MAKES RENDERING LOGIC AND MARKUP TOGETHER (Ensures they stay in sync with each other.)

// JSX is a Syntax Extension , REACT is a JS library


// Browser cannot read JSX 
// JSX is syntax sugar that gets converted into plain JS fn calls .
// JSX => BABEL => JS .(Babel removes JSX completely and replaces it with fn calls).

<h1>Hello</h1>

// After Babel =>
    React.createElement(type,props, ...children)
// here =>
    React.createElement("h1", null, "Hello")


return(
    <div>
        <h1>Hello</h1>
        <p>World</p>
    </div>
)

React.createElement(
    "div",null,React.createElement("h1",null,"Hello"),
    React.createElement("p",null,"World")
);
// Rules of JSX =>

    // Statements are not allowed(eg: if/else, for, switch)

    // 1. Return a single root Element
        // * To return multiple elements from a component, wrap them with a single parent tag. (because we can't return 2 objects from a function without wrapping them in an array.here JSX is wrappedd into plain JS objects.)
        return(
            <div>
                <h1>Hello</h1>
                <p>This is a p tag.</p>
                <img />
            </div>
        ) 
    // If you dont want an extra <div> , use fragments instead.
    // Fragments => Let to grp things without leaving any trace in the browser HTML tree.

    // 2. Close all tags
        // JSX requires tags to be explicitly closed 
        // Self-closing tags <img />
        // wrapping tags <li> ... </li>.

// class = className
// for = htmlFor


//  {} in JSX =>
    className = "Avatar" //CSS className
    src={avatar} // reads the value of the js variable called avatar.
// Where to use curly braces
// 1.As text directly inside the JSX tag    eg: <h1> {name}'s To do </h1> 
// 2. As attributes immediately following the = sign  eg: src={avatar}  not src= "{avatar}"

// Onjects in JSX use => {{ }}

    
// JSX with variables
const name = "Harry";
const variable = <h1>Hello, {name}!</h1>;  // inside the {name} replaced to the value of the variable by React. 

// JSX with Expressions 
const a = 5;
const b = 10;
const exp = (
    <p>
        {a} + {b} = {a+b}
    </p>
)

// JSX with attributes
const attribute = <img src="sample.png" alt='sample'/>
// JSX uses camelCase for attributes(className,onClick)   (React converts this to actual attributes while rendering)

// JSX with conditional rendering
const isLogged = true;
const check = <h1>{isLogged ? "true" : "false"}</h1>

// JSX with Functions
function greet(name){
    return "Hello" + name + "!";
}
const res = <h1>{greet("Harry")}</h1>

// JSX with inline styles
const styleObj = {color: "blue", fontSize: "20px"};
const final = <p style={styleObj}>Styled With inline JSX</p>

// JSX with Components

function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}

const hello = <Welcome name="Harry"/>;  // Welcome is a component and name="Harry" passed as props.

function greeting(prop){
    return <h1> Hello + {prop.name}!</h1>
}

function app(){
    return (
        <>
        <greeting name="first"/>
        <greeting name="second"/>
        </>
    );
}



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// JSX with Event Handling
function App(){
    function handleClick(){
        alert("Button was clicked!");
    }
    return <button onClick={handleClick}>Click Me</button>
}

// JSX with Lists(Rendering Arrays)
const fruits = ["Apple","Banana","Orange"];
const list = (
    <ul>
        {fruits.map((fruit,index)=> (<li key={index}>
            {fruit}
        </li>))}
    </ul>
)


// Create a new REACT Project

// 1.Check if Node.js is istalled ?
    //  node -v
    //  npm -v

// 2.Create a new Project
    // npm create vite@latest

// 3.Answer Prompts
    // Project name, select framework,select variant

// 4.Enter inside Project Folder
    // cd project-name

// 5.Install Dependencies
    // npm i / npm install

// 6.Start dev Server
    // npm run dev

// PROJECT STRUCTURE

// main.jsx => Main file which actually selects the root element from HTML and renders a react component in it.

// index.html  => Entry Point , React injects UI into this "div", only one HTML file as SPA(Single Page Application).

// Package.json => It contains the dependencies and the scripts required for the project.

// Node Modules => All the dependencies are installed here

// src => Work with it during development

// index.js => Specify root component and DOM component controlled by REACT

// App.jsx => Responsible for the HTML displayed in the browser.

// vite.config.js => Used for running particular vite app.

// gitignore => Contains files we need to ignored whenever pushing code to git repo.


// DOM (Document Object Model)
// 1.Querying the DOM
// 2.DOM Update
// 3.Re-Render

// REACT NEVER UPDATES THE ORIGINAL DOM TREE DIRECTLY

//===> React creates an  object that looks exactly same as DOM tree for every DOM Tree Representation
// That copy of Original DOM is called Virtual DOM
// VIRTUAL DOM => In-Memory copy of Original DOM that REACT updates directly  (as it is in-memory,it is faster)

// Later using some algorithm the Original DOM get updated.(Where ever the changes occured)
// In the DOM Tree each node represents each node

//===> If 3rd element of DOM tree want to update =; but react still not going to change the virtual DOM directly.
// ===>It CREATES A NEW COPY OF THE VIRTUAL DOM WITH CHANGES

// ===>It will mark as a change tree => Still not update Virtual DOM

//===> React will do difference b/w previous copy of the virtual DOM & Current copy of the Virtual DOM.
// ====> So the diff is identified.

// ====> Update the Original DOM based on the changes

//===> All the multiple changes will be accumulated together.

// ADVANTAGES =;
//Don't have to traverse entire stuff
// Through Difference Exactly got what Updated.
// As doing batch Update so not updating Original DOM very frequently.
// [Entire process => Reconciliation]
// React performs a diffing Algorithm so it make sure how to calculate the difference and what portion of the DOM tree has got changed. SO it can update accordingly


// IF the root itself got changed, it will tear down the previous version of the Virtual DOM Tree.

// PROPS

// React components use props to communicate with each other. (PARENT -> CHILD)
// Every parent component can pass some information with it's child component by giving them "props".
// Information pass to a JSX tag.
// PROPS ARE SINGLE PLAIN JS OBJECT
// PROPS ARE READ-ONLY
// Immutable

// PASSING PROPS TO A COMPONENT

export default function Profile(){
    return (
        <Avatar 
        person={{name:"Lin Yuang", age:34}} size = {100}
        />
    );
}

// Read props inside the child component

// list the names(person,size) seperated by commas inside ({....})

function Avatar({person, size}){
    //person and sizes are available here...
}
// This function Avatar({ person, age }) is called destructuring
//It is equivalent to reading properties from a function parameter
function Avatar(props){
    let person = props.person;
    let size = props.size;
}

// Specifying a default value for a prop

// If u want to give prop a default value to fallback on when no value is specified, u can do it with destructuring by putting = and the default value right after parameter.
// Default value is used only if -;
    // if the prop is missing
    // if the prop is passes like size={undefined}
// Default value is not used when , size={0},size={null}

//Accessing props Inside a Component
//1.Using props object
function Card(props){
    return <h2>{props.title}</h2>;
}
// 2.Destructuring
function Card({title,description}){
    return (
        <>
        <h2>{title}</h2>
        <p>{description}</p>
        </>
    );
}

// Equivalent to 

const title = props.title;
const description  = props.description;

// Forwarding props with the JSX spread syntax

function Profile(props){
    return (
        <div>
            <Avatar {...props}/>
        </div>
    )
}


{/* <Card>
    <Avatar />
</Card> */}

// Render Avatar inside Card.
// React convert above to 
<Card children={<Avatar />} />
// children is just a normal prop that React automatically passes.
// Children is the content placed inside a component

function Card({children}){   //children whatever written between <Card> and </Card>
    return (
        <div className='card'> 
            {children}
        </div>
    )
}

// REACT follows ONE-WAY data flow

