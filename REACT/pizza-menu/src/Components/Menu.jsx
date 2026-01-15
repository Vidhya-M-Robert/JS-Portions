import Pizza from "./Pizza"
export default function Menu(){
    return <main className="menu">
        <h2>Our menu</h2>
        <Pizza  name="Pizza Spinaci" ingredient='Tomato,mozeralla,spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price={10}/>
        <Pizza  name="Pizza Funghi" ingredient='Tomato,mushroom' photoName='pizzas/funghi.jpg' price={20}/>
        <Pizza  name="Pizza Spinaci" ingredient='Tomato,mozeralla,spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price={10}/>
    </main>
}