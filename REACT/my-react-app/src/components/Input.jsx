export default function Input({placeholder,...rest}){
    return (
        <input placeholder={placeholder}  {...rest}/>
    );
}