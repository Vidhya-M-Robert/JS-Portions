import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export default function NameInput(){
    const {name, setName} = useContext(UserContext);
    return(
        <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter your name" className="border px-4 py-2 rounded-lg focus: outline-none focus: ring-2 focus:ring-blue-500 mt-4 ml-4" />
    );
}