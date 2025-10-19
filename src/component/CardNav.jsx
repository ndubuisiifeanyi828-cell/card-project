import React from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import "./CardNav.css";

const CardNav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <RestaurantIcon style={{ fontSize: "28px" }} />
        <span>BiteCraft Kitchen</span>
      </div>
    </nav>
  );
};

export default CardNav;
