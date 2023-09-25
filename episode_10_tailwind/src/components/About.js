import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props){
        super(props)
        //console.log("Parent Constructer")
    }

    componentDidMount(){
        //console.log("Parent component Did Mount")
    }

    render() {
       // console.log("Parent Render");
        return (
            <div>
                <h1>This ia About</h1>
                <h2>This is h2</h2>
               <UserClass name={"Pranavi "}/>
    

            </div>
        );
    }
}


export default About;


/* 
    LIFE CYCLE METHODS

 - Parent constructor
 - Parent render
   - first constructor
   - first render

   - second constructor
   - second render

   <DOM UPDATE IN SINGLE BATCH>

   - First componentDidMount
   - Second componentDidMount

 - Parent componentDidMount 

*/