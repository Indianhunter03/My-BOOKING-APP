import "./navbar.css"
import React from 'react';
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navcontainer">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">MYbooking</span>
        </Link>
        <div className="navitems">
            <button className="navbutton">Register</button>
            <button className="navbutton">Login</button>
        </div>
      </div>
    </div>
  )
}
