import Order from "./Order";

export default function Footer(){
    const hour = new Date().getHours();
    const openHour = 9;
    // const closeHour = 10;
    const closeHour = 22;
    const isOpen =  hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if(!isOpen)  return <p>CLOSED</p>     //Conditional rendering with multiple returns  


    // if(hour >= openHour && hour <= closeHour) alert("We are currently open!");
    // else alert("Sorry we're closed");
    return (
    // <footer className="footer">
    //     {/* {new Date().toLocaleTimeString()}We are currently open! */}
    // {isOpen && 
    //  <div className="order">
    //     <p>We are open until {closeHour}:00. Come visit us or order online.</p>
    //     <button className="btn">Order</button>
    // </div>}
    // </footer>

    <footer className="footer">
        {/* {new Date().toLocaleTimeString()}We are currently open! */}
    {isOpen ? <Order closeHour={closeHour} openHour={openHour}/>
      : <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00.</p>}
    </footer>
    )
}

 