import { useEffect, useState } from "react";
const User = (props) =>{
    const [count] =useState(0);
    const [count2] =useState(4);

    useEffect(()=>{
        ///API call
         const timer = setInterval(()=>{ console.log("namaste react");},1000); 
        console.log("useEffect");

        return ()=>{

            // it will clean set interval
            clearInterval(timer);
            console.log("use effect return ");
        }
    },[]);
    console.log("use render");
    return (
        <div className ="m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count={count}</h1>
            <h1>Count2={count2}</h1>
            <h1>Name : {props.name}</h1>

            <h2>Location : AP</h2>
            <h3>Contact : pranavikasthuri07@gmail.com</h3>
        </div>
    )
};

export default User;