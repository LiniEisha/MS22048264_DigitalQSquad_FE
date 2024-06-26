// File path: src/components/DigitalIQInterface.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/landingImage.jpg"; // Replace with actual path to the image
import "../styles/landingPage.css"; // Assuming you have a corresponding CSS file for styling

function DigitalIQInterface() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };


  return (
    <div className="digital-iq-interface">
      <header className="header">
        <h1>DigitalIQ</h1>
        <button className="sign-in-button" onClick={handleSignIn}>Sign in</button>
      </header>

      <main
        className="main-content"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></main>

      <footer className="footer">Footer</footer>
    </div>
  );
}

export default DigitalIQInterface;
