// Create a component that renders your name and role.
function App(){
    return (
        <div>
            <h1>Harry</h1>
            <p>Front-end developer</p>
        </div>
    );
}
export default App;

// Display a variable inside JSX.

function Ap(){
    const city = "Banglore";
    return <h1>I live in {city}</h1>
}
expor

// Render the sum of two numbers using JSX expressions.

function App(){
    const a = 10;
    const b = 20;
    return <p>{a+b}</p>
}
expor

// Render an image using JSX attributes.

function Image(){
    const imgURl = ""
    return (
        <>
        <img src="" alt=""/>
        </>
    )
}
expor

//Return multiple JSX elements using Fragment.

function App(){
    return(
        <>
        <h1>Hello</h1>
        <p>World</p>
        </>
    );
}
expor

// Create a functional component called Profile.

function Profile(){
    return(
        <>
        <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Profile" />
        <p>Hello</p>
        <p>EveryOne</p>
        </>
    );
}
expor

// Create Header and Footer components and use them in App.

function Header(){
    return (
        <div>
            <h1>Header</h1>
            <p>Here is the Header</p>
        </div>
    )
}
expor


function Footer(){
    return(
        <div>
            <h1>Footer</h1>
            <p>Here is the Footer</p>
        </div>
    )
}
expor


import Header from './Header';
import Footer from './Footer';

 function App(){
    return (
        <>
        <Header/>
        <Footer />
        </>
    );
}
expor

// Reuse a Card component three times.

function Card(){
    return <h1>Card</h1>
}

export

function App(){
    return (
        <div>
            <Card />
            <Card />
            <Card />
        </div>
    )
}
expor


// Create a Reusable Card Component
// card.jsx
function Card({title,description,image}){
    return (
        <div>
            <img src={image}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}
// export default Card

// App.jsx

import Card from "./Card";

function App(){
    return (
        <Card title = "React" description="A JS Library for building UI" image ="https://i.img.jpg"/>
    );
}
// export default App;

// Enhance Card to accept children

function Card({title,description,image,children}){
    return (
        <div>
            <img src={image}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>{children}</div>
        </div>
    );
}

// Using Card with a Button(children)

import Card from "./Card";

function App(){
    return (
        <Card title = "React" description="A JS Library for building UI" image ="https://i.img.jpg">
            <button onClick={() => alert("Clicked!")}>Learn More</button>
            </Card>
    );
}

