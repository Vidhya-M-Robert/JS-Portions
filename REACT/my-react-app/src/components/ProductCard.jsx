export default function ProductCard({name,price,image,children}){
    return(
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name}/>
            <h4>{price}</h4>
            {children}
        </div>
    )
}