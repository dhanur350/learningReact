import React from 'react'
import {RiMenu3Line, RiCloseLin} from "react-icons/ri"
import logo from "../../assets/logo.svg"
import "./navbar.css"

function Navbar() {
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links-container">
          <p><a href="#home">Home</a></p>
          <p><a href=""></a></p>
          <p><a href=""></a></p>
          <p><a href=""></a></p>
          <p><a href=""></a></p>
          <p><a href=""></a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar