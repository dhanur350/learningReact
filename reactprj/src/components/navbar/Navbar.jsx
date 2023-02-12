import React, { useState } from 'react'
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"
import logo from "../../assets/logo.svg"
import "./navbar.css"

function Navbar() {

  const riCloseLinefunc = ()=>setToggleMenu(false);
  const riMenu3Linefunc = ()=>setToggleMenu(true);
  const [toggleMenu,setToggleMenu] = useState(false);
  
  //To be used further
  const toggleCheck = ()=>{
    if(toggleMenu){
      return(<RiCloseLine color='#fff' size={27} onClick={riCloseLinefunc}/>)
    }
    else{
      return(<RiMenu3Line color='#fff' size={27} onClick={riMenu3Linefunc}/>)
    }
  }
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links-container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu 
        ? <RiCloseLine color='#fff' size={27} onClick={riCloseLinefunc}/> :
          <RiMenu3Line color='#fff' size={27} onClick={riMenu3Linefunc}/>}
      </div>
    </div>
  )
}

export default Navbar