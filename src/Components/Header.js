import { Link } from "react-router-dom";
import {LOGO_URL} from "../Utils/Constants"
import { useEffect, useState} from "react";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
     const [btnNameReact ,setBtnNameReact]= useState("Login");
     console.log("Header render");

     const onlineStatus = useOnlineStatus();

     useEffect(()=> {
      console.log("useEffect called");
     },[btnNameReact])
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50reen">
        <div className="logo-container">
          <img
            className="w-56"
             src={LOGO_URL}/>
        </div>
        <div className="flex item-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status: {onlineStatus ? "✅": "🟥"}</li>
            <li className="px-4"><Link to="/Home">Home</Link></li>
            <li className="px-4"><Link to="/About Us">About Us</Link></li>
            <li className="px-4"><Link to="/Contact Us">Contact</Link></li>
            <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
            <li className="px-4">Cart</li>
            <button className="px-4" onClick={() =>{
              btnNameReact === "Login"  ?setBtnNameReact("Logout") : setBtnNameReact("Login")
           }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;