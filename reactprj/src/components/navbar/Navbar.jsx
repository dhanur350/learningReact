import React from 'react'
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"
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
          <p><a href="#wgpt3">What is GPT?</a></p>
          <p><a href="#possibility">Possibility</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#blog">Blog</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type='button'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar