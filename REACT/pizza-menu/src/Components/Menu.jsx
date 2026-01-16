import Pizza from "./Pizza"
export default function Menu(){
    const pizzaData = [
      {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
      },
      {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
      },
      {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
      },
      {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
      },
      {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
      },
      {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
      },
    ];

    const pizzas = pizzaData;
    // const pizzas = [];   //empty array nothing shown because  only render if pizzas  have value &&(empty array is still a truthy value)
    const numPizzas = pizzas.length;
    
    // return <main className="menu">
    //     <h2>Our menu</h2>
    //     {pizzas && <ul className="pizzas">
    //        {/* {pizzaData.map(pizza => <Pizza name={pizza.name} photoName={pizza.photoName}/> */}
    //        {pizzas.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name}/>
    //     )} 
    //     </ul>}
        
    //     {/* <Pizza  name="Pizza Spinaci" ingredient='Tomato,mozeralla,spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price={10}/>
    //     <Pizza  name="Pizza Funghi" ingredient='Tomato,mushroom' photoName='pizzas/funghi.jpg' price={20}/>
    //     <Pizza  name="Pizza Spinaci" ingredient='Tomato,mozeralla,spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price={10}/> */}
    // </main>


     return <main className="menu">
        <h2>Our menu</h2>


        {numPizzas > 0 ? 
        <>      {/*div will break UI so we use fragment here .Fragment does not create a new element*/}
        <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
             <ul className="pizzas">
           {/* {pizzaData.map(pizza => <Pizza name={pizza.name} photoName={pizza.photoName}/> */}    {/*If else is not used sas it does not produce a value */}
           {pizzas.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name}/>
        )} 
        </ul>
        </>
         : <p>We are still working on our menu. Please come back later :)</p>}
        
        {/* <Pizza  name="Pizza Spinaci" ingredient='Tomato,mozeralla,spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price={10}/>
        <Pizza  name="Pizza Funghi" ingredient='Tomato,mushroom' photoName='pizzas/funghi.jpg' price={20}/>
        <Pizza  name="Pizza Spinaci" ingredient='Tomato,mozeralla,spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price={10}/> */}
    </main>
    
}