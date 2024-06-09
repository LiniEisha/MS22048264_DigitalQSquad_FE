import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import "../styles/CodeComplexityPage.css";
import Header from "./headerItems";
import Menu from "./menuItems";
import Footer from "./footerItem";
import { NavLink } from "react-router-dom";
import axios from 'axios';

function CodeComplexityPage() {
  const [key, setKey] = useState("home");
  const [modulesData, setModulesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8000/api/complexity/results');
        console.log("Fetched data:", response.data);
        setModulesData(response.data);
      } catch (error) {
        console.error("Error fetching complexity data:", error);
      }
    }
    fetchData();
  }, []);

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
              <span className="module-name">{module.moduleName}</span> {/* Ensure the field names match */}
              <span className="complexity-level">{module.complexityLevel}</span>
              <NavLink
                to={`/complexity/${module._id}`}
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
