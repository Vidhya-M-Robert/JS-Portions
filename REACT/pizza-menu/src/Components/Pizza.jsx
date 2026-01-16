export default function Pizza({pizzaObj}){
    console.log(pizzaObj);

    // if(pizzaObj.soldOut) return null;

    return (
        // <li className="pizza">
        //     <img  src={props.pizzaObj.photoName}/>
        //     <div>
        //     <h3>{props.pizzaObj.name}</h3>
        //     <p>{props.pizzaObj.ingredient}</p>
        //     <span>{props.pizzaObj.price+3}</span>
        //     </div>
        // </li>

         <li className={`pizza ${pizzaObj.soldOut ? "sold-out": ""}`}>
            <img  src={pizzaObj.photoName}/>
            <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredient}</p>
            <span>{pizzaObj.soldOut ? "SOLD OUT" :pizzaObj.price}</span>
            </div>
        </li>
    )
}