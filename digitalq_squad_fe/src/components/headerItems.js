// File path: src/components/Header.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/headerPage.css"; // Create a CSS file for the header

const Header = () => {
  return (
    <header className="header">
      {/* <h1>DigitalIQ</h1> */}
      <NavLink exact to="/" className="h1" activeClassName="active">
        <h1>DigitalIQ</h1>
      </NavLink>
    </header>
  );
};

export default Header;
