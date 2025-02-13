import React from 'react'
import '../assets/header.css'
export const Header = () => {
  return (
    <div className="header" >
      <nav className="navbar">
       <a href="#home">Home</a>
       <a href="#content">About Us</a>
       <a href="#contact">Contact us</a>

       {/* <div class="dropdown">
        <button class="dropbtn">=
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
        <a href="#home">Home </a>
        <a href="content.jsx">About Us</a>
        </div>
       </div> */}
       </nav>
    </div>
  )
}
