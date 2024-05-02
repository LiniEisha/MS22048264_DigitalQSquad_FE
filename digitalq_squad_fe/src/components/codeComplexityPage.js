// ModuleList.jsx
import React, { useState } from "react";
import { Tab, Tabs, Table } from "react-bootstrap";
import "../styles/CodeComplexityPage.css"; // Make sure this points to the correct file location
import Header from "./headerItems"; // Make sure this points to the correct file location
import Menu from "./menuItems"; // Make sure this points to the correct file location
import Footer from "./footerItem"; // Make sure this points to the correct file location
import { NavLink } from "react-router-dom";

const modulesData = [
  { id: 1, name: "NestedExample", complexity: "High" },
  { id: 1, name: "User authentication module", complexity: "Low" },
  { id: 2, name: "Order management", complexity: "High" },
  { id: 3, name: "Search engine", complexity: "Medium" },
  { id: 4, name: "Payment and Shipping", complexity: "Medium" },
];
function CodeComplexityPage() {
  const [key, setKey] = useState("home");
  const [showPopup, setShowPopup] = useState(false);
  function handleLogout() {
    // Implement logout logic here
  }

  return (
    <div className="module-list-container">
      <Header />
      <Menu onLogout={handleLogout} />
      <div className="dashboard-content">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          {/* ... other tabs ... */}
        </Tabs>
        <div className="module-list">
          {modulesData.map((module, index) => (
            <div className="module-item" key={index}>
              <span className="module-name">{module.name}</span>
              <img
                src={module.complexityIcon}
                alt="Complexity Icon"
                className="complexity-icon"
              />
              <NavLink
                to={`/complexity/${module.id}`}
                className="view-report-btn"
              >
                View Details
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CodeComplexityPage;
