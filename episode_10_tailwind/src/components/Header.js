import { useState } from "react";
import  {LOGO_URL}  from "../utilis/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";


const Header = () =>{
    const [btnNameReact,setBtnNameReact]=useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 m-2 sm:bg-yellow-50 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status : {onlineStatus?"🟢":"🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">contact us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
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