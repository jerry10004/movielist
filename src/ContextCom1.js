import { createContext, useContext } from "react";
const UserContext = createContext();
export default function ContextComp1 (){
    const username = "hong";
    return (
        <UserContext.Provider value={username}>
            <h1>{username}</h1>
            <Comp2 />
        </UserContext.Provider>
    );    
}


function Comp2(){

    return (
        <>
        <h2>Comp2 Component</h2>
        <Comp3 />
        </>
    );
}

function Comp3(){
    const username = useContext(UserContext);
    return (
        <h2>Comp3 : {username}</h2>
    );
}