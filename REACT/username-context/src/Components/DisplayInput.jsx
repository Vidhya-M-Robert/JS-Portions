import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export default function DisplayInput(){
    const {name} = useContext(UserContext);

    return(
        <h2 className="text-2xl font-semibold mt-4 ml-4">
            Hello, {name || "Guest"}
        </h2>
    )
}