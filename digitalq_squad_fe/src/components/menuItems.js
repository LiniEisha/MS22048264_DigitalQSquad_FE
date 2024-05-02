// File path: src/components/Menu.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/menuPage.css"; // Make sure to create a CSS file for the menu

const Menu = ({ onLogout }) => {
  return (
    <div className="menu">
      <NavLink exact to="/home" className="menu-item" activeClassName="active">
        Home
      </NavLink>
      <NavLink
        to="/testCoverage"
        className="menu-item"
        activeClassName="active"
      >
        Test Coverage
      </NavLink>
      <NavLink
        to="/codeComplexity"
        className="menu-item"
        activeClassName="active"
      >
        Code Complexity
      </NavLink>
      <NavLink
        to="/recommendations"
        className="menu-item"
        activeClassName="active"
      >
        Recommendations
      </NavLink>
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Menu;
