// DashboardPage.jsx

import React, { useState, useEffect } from "react";
import { Tab, Tabs, Table } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./headerItems";
import Menu from "./menuItems";
import Footer from "./footerItem";
import NewItemPopup from "./newItemPopup";
import "../styles/homePage.css";

function DashboardPage() {
  const [key, setKey] = useState("home");
  const [showPopup, setShowPopup] = useState(false);
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [complexityResponse, coverageResponse] = await Promise.all([
          axios.get("http://localhost:8000/api/complexity/results"),
          axios.get("http://localhost:8000/api/testCoverage")
        ]);

        const complexityData = complexityResponse.data;
        const coverageData = coverageResponse.data;

        const mergedData = coverageData.map(coverage => {
          const complexity = complexityData.find(item => item.moduleName === coverage.moduleName) || {};
          return {
            moduleName: coverage.moduleName,
            lineCoverage: coverage.unitTestLineCoverage,
            branchCoverage: coverage.totalBranchCoverage,
            complexity: complexity.complexityLevel
          };
        });

        setMergedData(mergedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  function handleLogout() {
    // Implement logout logic here
  }

  return (
    <div className="dashboard-page">
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

        <button className="new-button" onClick={() => setShowPopup(true)}>
          New
        </button>

        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Module Name</th>
              <th>Line Coverage</th>
              <th>Branch Coverage</th>
              <th>Complexity</th>
            </tr>
          </thead>
          <tbody>
            {mergedData.map((module, index) => (
              <tr key={index}>
                <td>{module.moduleName}</td>
                <td>{module.lineCoverage}</td>
                <td>{module.branchCoverage}</td>
                <td>{module.complexity}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {showPopup && <NewItemPopup closePopup={() => setShowPopup(false)} />}
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;
