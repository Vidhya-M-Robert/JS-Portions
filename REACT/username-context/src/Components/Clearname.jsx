import { useContext } from "react"
import { UserContext } from "../Contexts/UserContext"

export default function ClearName(){
    const {clearName,name} = useContext(UserContext);

    return(
        <button onClick={clearName}  disabled={!name} className=" px-4 py-2 rounded-lg
        bg-red-500 text-white
        hover:bg-red-600
        disabled:bg-gray-400
        disabled:cursor-not-allowed
        transition ml-4 mt-4">Clear</button>
    )
}