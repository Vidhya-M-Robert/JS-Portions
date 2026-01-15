export default function Footer(){
    // const hour = new Date().getHours();
    // const openHour = 12;
    // const closeHour = 22;
    // if(hour >= openHour && hour <= closeHour) alert("We are currently open!");
    // else alert("Sorry we're closed");
    return <footer className="footer">
        {new Date().toLocaleTimeString()}We are currently open!
        </footer>
}