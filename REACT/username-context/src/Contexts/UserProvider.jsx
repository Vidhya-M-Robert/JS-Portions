import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({children}){
    const [name, setName] = useState(()=>{
        const savedName = localStorage.getItem("name");
        return savedName ? savedName : "";
    });

    function clearName(){
        setName("");
        localStorage.removeItem("name")
    }

    useEffect(() => {
        localStorage.setItem("name", name);
    },[name]);
    return(
        <UserContext.Provider value={{name, setName, clearName}}>
            {children}
        </UserContext.Provider>
    )
}