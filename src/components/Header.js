import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
   //btnNameReact is the new variable, after rerender the header. IMPORTANT
 const [btnNameReact, setBtnNameReact] = useState('Login');  
 console.log('Render header'); 
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn"
          onClick={() => {
            btnNameReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login'); 
          }}
          >
              {btnNameReact}
              </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
