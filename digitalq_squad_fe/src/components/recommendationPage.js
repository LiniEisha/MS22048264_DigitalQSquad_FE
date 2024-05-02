import React, { useState } from "react";
import { Tab, Tabs, Table } from "react-bootstrap";
import "../styles/recommendationsPage.css"; // Make sure this points to the correct file location
import Header from "./headerItems"; // Make sure this points to the correct file location
import Menu from "./menuItems"; // Make sure this points to the correct file location
import Footer from "./footerItem"; // Make sure this points to the correct file location

function RecommendationsPage() {
  const statistics = {
    linesOfCode: 2000,
    executedLines: 1000,
    coverage: 50,
    complexModules: 5,
  };

  const recommendations = {
    needMoreCoverage: [
      { className: "registration", lineNumbers: "20-40, 50-55" },
      { className: "forgotPassword", lineNumbers: "10-45" },
    ],
    needMoreTesting: [{ className: "registration", lineNumbers: "55-80" }],
  };
  const [key, setKey] = useState("home");
  const [showPopup, setShowPopup] = useState(false);
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
        <div className="statistics-container">
          <div className="statistics-block">
            <h3>Test Coverage</h3>
            <p>Lines of code - {statistics.linesOfCode}</p>
            <p>Executed lines - {statistics.executedLines}</p>
            <p>Coverage - {statistics.coverage}%</p>
          </div>
          <div className="statistics-block">
            <h3>Code Complexity</h3>
            <p>Lines of code - {statistics.linesOfCode}</p>
            <p>Complex modules - {statistics.complexModules}</p>
          </div>
        </div>

        <hr />
        <div className="recommendations-block">
          <div className="recommendation-section">
            <h4>Areas that need more coverage</h4>
            {recommendations.needMoreCoverage.map((item, index) => (
              <p key={index}>
                {item.className} class - Line Numbers: {item.lineNumbers}
              </p>
            ))}
          </div>
          <div className="recommendation-section">
            <h4>Areas that needs more testing</h4>
            {recommendations.needMoreTesting.map((item, index) => (
              <p key={index}>
                {item.className} class - Line Numbers: {item.lineNumbers}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RecommendationsPage;
