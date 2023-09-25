import { useState } from "react";
const User = (props) =>{
    const [count] =useState(0);
    const [count2] =useState(4);
    return (
        <div className ="user-card">
            <h1>Count={count}</h1>
            <h1>Count2={count2}</h1>
            <h1>Name : {props.name}</h1>

            <h2>Location : AP</h2>
            <h3>Contact : pranavikasthuri07@gmail.com</h3>
        </div>
    )
};

export default User;