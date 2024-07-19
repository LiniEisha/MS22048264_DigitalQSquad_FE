import React, { useState, useEffect } from "react";
import { Tab, Tabs, Table} from "react-bootstrap";
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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Module Name</th>
                <th>CC</th>
                <th>WCC</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {modulesData.map((module, index) => (
                <tr key={index}>
                  <td>{module.moduleName}</td> {/* Ensure the field names match */}
                  <td>{module.cyclomaticComplexity}</td>
                  <td>{module.weightedCompositeComplexity}</td>
                  <td>
                    <NavLink
                      to={`/complexity/${module._id}`}
                      className="view-report-btn"
                    >
                      View Details
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CodeComplexityPage;
