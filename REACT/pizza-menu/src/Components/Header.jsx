export default function Header(){
        // const style= {color:"red",fontSize:"42px", textTransform:"uppercase"};
        const style={}
//     return <h1 style={{color:"red",fontSize:"42px", textTransform:"uppercase"}}>Fast React Pizza Co.</h1>
    // return <h1 style={style} className="header">Fast React Pizza Co.</h1>
        return (
            <header className="header">
                <h1 style={style} className="header">Fast React Pizza Co.</h1>
            </header>
        )

}
