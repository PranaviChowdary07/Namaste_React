/**
 *  <div id="parent">
 *      <div id="child">
 *          <h1>I am h1 tag </h1>  
 *          <h2>I am h2 tag </h2>  
 *      </div>
 *  </div>
 */
import React from "react";
import  ReactDOM  from "react-dom/client";
const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
[React.createElement("h1",{},"hello motto"),React.createElement("h2",{},"I am tag2")]
));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
    