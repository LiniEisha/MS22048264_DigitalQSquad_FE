// Inside TestCoveragePage.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./headerItems";
import Menu from "./menuItems";
import Footer from "./footerItem";
import "../styles/testCoveragePage.css";

const testCoverageData = [
  { id: 1, moduleName: "User authentication module", coverage: "75%" },
  { id: 2, moduleName: "Order management", coverage: "86%" },
  { id: 3, moduleName: "Search engine", coverage: "94%" },
  { id: 4, moduleName: "Payment and Shipping", coverage: "75%" },
];

function TestCoveragePage() {
  const [key, setKey] = useState("home");
  const [showPopup, setShowPopup] = useState(false);
  function handleLogout() {
    // Implement logout logic here
  }

  return (
    <div className="test-coverage-container">
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
          {testCoverageData.map((module) => (
            <div className="module-item" key={module.id}>
              <span className="module-name">{module.moduleName}</span>
              <span className="module-coverage">{module.coverage}</span>
              <NavLink
                to={`/coverage/${module.id}`}
                className="view-report-btn"
              >
                View Full Report
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TestCoveragePage;