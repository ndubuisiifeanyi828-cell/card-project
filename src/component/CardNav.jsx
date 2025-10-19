import React from "react";
import "./CardNav.css";


const CardNav = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">🍴 BiteCraft Kitchen</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="nav-btn">Order Now</button>
    </nav>
  );
};

export default CardNav;
