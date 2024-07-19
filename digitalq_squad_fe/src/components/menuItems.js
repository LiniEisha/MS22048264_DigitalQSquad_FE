// File path: src/components/Menu.jsx

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/menuPage.css"; // Make sure to create a CSS file for the menu

const Menu = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="menu">
      <NavLink
  to="/home"
  className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
>
        Home
      </NavLink>
    <NavLink
  to="/testCoverage"
  className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
>
        Test Coverage
      </NavLink>
      <NavLink
  to="/codeComplexity"
  className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
>
        Code Complexity
      </NavLink>
      <NavLink
  to="/recommendations"
  className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
>
        Recommendations
      </NavLink>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Menu;
