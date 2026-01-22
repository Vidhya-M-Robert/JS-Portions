type Props= {
    name: string;
    age: number;
    productName: string;
    price: number;
    inStock: boolean;
}
export default function Profile({name,age,productName,price,inStock}: Props){
    return <div>{name}-{age}
    <p>{productName} - {price} - {inStock}</p></div>
}