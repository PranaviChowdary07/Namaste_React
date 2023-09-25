import { useState } from "react";
import  {LOGO_URL}  from "../utilis/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";

const Header = () =>{
    const [btnNameReact,setBtnNameReact]=useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                
                <ul>
                    <li>
                        Online Status : {onlineStatus?"🟢":"🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact us</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        Cart
                    </li>
                    <button className="login" onClick={()=>{
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )  
}

export default Header;