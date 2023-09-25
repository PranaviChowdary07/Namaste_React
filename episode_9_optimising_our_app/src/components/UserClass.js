 import React from "react";

 class UserClass extends React.Component {

    constructor(props){
        super(props);

        //console.log(this.props.name +"Child constructer")

        this.state = {
            userInfo :{
                name : "dummy",
                id: "default",
            }
        };
    }

   async componentDidMount(){
       // console.log(this.props.name +"Child component Did Mount")

       const data = await fetch("https://api.github.com/users/PranaviChowdary07")
       const json =await data.json();

       this.setState({
        userInfo: json,
       });

       console.log(json);
    }

    componentDidUpdate() {
        console.log("component Did Update");
    }

    componentWillUnmount() {
        console.log("component will Unmount");
    }

    render(){
        const {name, id,avatar_url} =this.state.userInfo;
         // console.log(this.props.name +"child Render");

        return (
            <div className ="user-card">
                <img src={avatar_url} />
            <h1>Name : {name}</h1>
            <h2>id : {id}</h2>
            <h3>Contact : pranavikasthuri07@gmail.com</h3>
        </div>
        );
    }
 }

 export default UserClass;



 /**
  *     COMPONENT LIFE CYCLE METHOD
  * 
  *  --- Mounting ---
  * 
  * constructor ( dummy )
  * Render ( dummy )
  *     <HTML Dummy>
  * Component DidMount
  *     <Api call>
  *     <this.setState> --> state variable is updated
  * 
  *  --- Updating ---
  * 
  *     render ( api data )
  *     <HTML ( new api data )>
  *     Component DidUpdate
  * 
  *  --- UnMounting ---
  *    -componentWillUnmount 
  * 
  * 
  */