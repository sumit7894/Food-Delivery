import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header =()=>{
    const [btnNameReact,setBtnNameReact] = useState("Login"); 
    const onlineStatus = useOnlineStatus();
    return(
        <div className="flex justify-between  bg-pink-50 shadow-lg mb-2">
            <div className="logo-container">
                <img className="w-52" 
                src={LOGO_URL}></img>
            </div>
            <div className="flex nav-items">
                <ul className="flex p-4 m-4" >
                    <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery Store</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login px-4" onClick={()=>{
                        btnNameReact ==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact} </button>
                </ul>
            </div>
        </div>
    )
};
export default Header;