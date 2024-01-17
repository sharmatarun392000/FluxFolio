import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      
        <div className="head"  style={{display:'flex',position:'absolute', top:'0px', backgroundColor:'var(--primary-color)',height:'50px',width:'100%',zIndex:'10000'}}>
          <div >
          <Themetoggle />
          </div>
          <div>
                <ul className="menu2">
                  <li className="menuitem ">
                  <Link  to="/" className=""> <h5>Home</h5> </Link>
                  </li>
                  <li className="menuitem">
                    <Link   to="/portfolio" className="">  <h5>Portfolio</h5></Link>
                  </li>
                  <li className="menuitem">
                  <Link to="/contact" className=""><h5>Contact</h5></Link>
                  </li>
                </ul>
              </div> 
        </div>
      
    </>
  );
};

export default Headermain;
