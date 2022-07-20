import React from "react";
import logo from "/src/assets/logojj.png";
import "/src/components/Navbar.css";


function Navbar() {
  

  return (
    <div className="container bg-light   navBar" >
      <div> 
        <img src={logo} alt="" className="logo"/> <button className="btn btn-primary"> <a href="#" className="contact"> Contato</a>  </button></div>
   
    </div>
  )
}

export default Navbar