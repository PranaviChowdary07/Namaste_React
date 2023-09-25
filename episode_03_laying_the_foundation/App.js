
import React from "react";
import  ReactDOM  from "react-dom/client";

//WAYS OF WRITING FUNCTIONAL COMPONENTS
//using return in func component 
const HeadingComponent = ()=>{
    return <h1 className="heading">Namaste </h1>
}
//writing component in single line
const HeadingComponent2 = ()=><h1>Namaste 2</h1>
// without using return in func component
const HeadingComponent3=()=>(
    <div>
    < HeadingComponent/>  

    
    <h1 className="heading" >namste React 2</h1>
    </div>
)
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<HeadingComponent3/>)