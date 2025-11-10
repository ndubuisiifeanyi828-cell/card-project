import React from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import "./CardNav.css";
import {Link} from "react-router-dom"

const CardNav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <RestaurantIcon style={{ fontSize: "28px" }} />
        <span>BiteCraft Kitchen</span>
        <Link to ="/Longin"className="login-link">Login </Link>
      </div>
    </nav>
  );
};

export default CardNav;
