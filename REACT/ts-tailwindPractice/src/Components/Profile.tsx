// type Props= {
//     name: string;
//     age: number;
//     productName: string;
//     price: number;
//     inStock: boolean;
// }
// export default function Profile({name,age,productName,price,inStock}: Props){
//     return <div>{name}-{age}
//     <p>{productName} - {price} - {inStock}</p></div>
// }


const product: {
    id: number;
    title: string;
    price: number;
    inStock: boolean;
} = {
    id: 1, 
    title: "phone",
    price: 200000,
    inStock: true,
};

// const users : {
//     id:number;
//     name:string;
// }[] = [
//     {id: 1, name: "Alex"},
//     {id: 1, name: "sam"},
// ]
export default function Profile(){
    return (
        <div>
            <p>{product.id}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
        </div>
    )
}