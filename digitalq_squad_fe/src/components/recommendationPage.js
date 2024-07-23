import React, { useState, useEffect } from "react";
import { Tab, Tabs, Table } from "react-bootstrap";
import axios from "axios"; // Import axios for HTTP requests
import "../styles/recommendationsPage.css";
import Header from "./headerItems";
import Menu from "./menuItems";
import Footer from "./footerItem";

function RecommendationsPage() {
  const [key, setKey] = useState("home");
  const [showPopup, setShowPopup] = useState(false);
  const [highComplexModules, setHighComplexModules] = useState([]);

  useEffect(() => {
    async function fetchHighComplexModules() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/complexity/highComplexModules"
        );
        setHighComplexModules(response.data);
      } catch (error) {
        console.error("Error fetching high complexity modules:", error.message);
      }
    }

    fetchHighComplexModules();
  }, []);

  function handleLogout() {
    // Implement logout logic here
  }

  return (
    <div className="recommendations-container">
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
        <hr />
        <div className="recommendations-block">
          <div className="recommendation-section">
            <h4>Areas that need more coverage</h4>
          </div>
          <div className="recommendation-section">
            <h4>Areas that needs more testing</h4>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Module Name</th>
                  <th>Complexity Level</th>
                  <th>CC Value</th>
                  <th>WCC Value</th>
                </tr>
              </thead>
              <tbody>
                {highComplexModules.map((module, index) => (
                  <tr key={index}>
                    <td>{module.moduleName}</td>
                    <td>{module.complexityLevel}</td>
                    <td>{module.cyclomaticComplexity}</td>
                    <td>{module.weightedCompositeComplexity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RecommendationsPage;
