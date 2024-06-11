import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


function Header() {
  return (
    <sectioning >
    <div className="navbar">
    <ul  className="">
      <li>
        <a href="/"> Home</a>
      </li>
      <li>
        <a href="/contact" target="/page/contact us">
          Contact Us
        </a>
      </li>
      <li>
        <a href="/ourService"> Our Service</a>
      </li>
      <li>
        <a href="/setting"> Setting</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
    </div>
    <div className="sidebar">
      <h4> Home</h4>
      <h4> About Us</h4>
      <h4> Setting</h4>
      <h4> Address</h4>
      <p></p>
    </div>
    
    
    <main>
      <div>
        <h1> Medium of Exchange</h1>
      </div>
      <div>
        <img src='./assests/man1.png' alt="smile"/>
      </div>
    </main>
    <div> 
      <p> Lorem ipsum, dolor sit amet consectetur 
        adipisicing elit. Dignissimos commodi sequi reiciendis magni laudantium corporis incidunt aperiam optio ipsum. Eos officia, asperiores iure et ab illo dolore
        s consequatur numquam quod?</p>
    </div>
    
    </sectioning>
  
      

  )
}

export default Header;
