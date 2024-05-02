// DashboardPage.jsx

import React, { useState } from "react";
import { Tab, Tabs, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./headerItems"; // Make sure this points to the correct file location
import Menu from "./menuItems"; // Make sure this points to the correct file location
import Footer from "./footerItem"; // Make sure this points to the correct file location
import NewItemPopup from "./newItemPopup"; // Ensure this component is updated as per the new requirements
import "../styles/homePage.css"; // Ensure this path is correct

// Dummy data for the table
const modulesData = [
  { name: "User authentication module", coverage: "75%", complexity: "High" },
  { name: "Order management", coverage: "86%", complexity: "Medium" },
  { name: "Search engine", coverage: "94%", complexity: "Low" },
  { name: "Payment and Shipping", coverage: "75%", complexity: "High" },
];

function DashboardPage() {
  const [key, setKey] = useState("home");
  const [showPopup, setShowPopup] = useState(false);

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

        <hr></hr>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Module Name</th>
              <th>Coverage</th>
              <th>Complexity</th>
            </tr>
          </thead>
          <tbody>
            {modulesData.map((module, index) => (
              <tr key={index}>
                <td>{module.name}</td>
                <td>{module.coverage}</td>
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
