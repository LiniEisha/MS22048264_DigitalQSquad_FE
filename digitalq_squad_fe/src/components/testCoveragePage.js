import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./headerItems";
import Menu from "./menuItems";
import Footer from "./footerItem";
import "../styles/testCoveragePage.css";

function TestCoveragePage() {
  const [key, setKey] = useState("home");
  const [testCoverageData, setTestCoverageData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/testCoverage")
      .then((response) => response.json())
      .then((data) => setTestCoverageData(data))
      .catch((error) =>
        console.error("Error fetching test coverage data:", error)
      );
  }, []);

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
        ></Tabs>
        <div className="module-list">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Module Name</th>
                <th>Average Line Coverage</th>
                <th>Average Branch Coverage</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {testCoverageData.map((module, index) => (
                <tr key={index}>
                  <td>{module.moduleName}</td>{" "}
                  {/* Ensure the field names match */}
                  <td>{module.totalLineCoverage}</td>
                  <td>{module.totalBranchCoverage}</td>
                  <td>
                    <NavLink
                      to={`/coverage/${module._id}`}
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

export default TestCoveragePage;

// UI design// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Tab, Tabs } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./headerItems";
// import Menu from "./menuItems";
// import Footer from "./footerItem";
// import "../styles/testCoveragePage.css";

// const initialTestCoverageData = [
//   { id: 1, moduleName: "User authentication module", coverage: "75%" },
//   { id: 2, moduleName: "Order management", coverage: "86%" },
//   { id: 3, moduleName: "Search engine", coverage: "94%" },
//   { id: 4, moduleName: "Payment and Shipping", coverage: "75%" },
// ];

// function TestCoveragePage() {
//   const [key, setKey] = useState("home");
//   const [testCoverageData] = useState(initialTestCoverageData);

//   function handleLogout() {
//     // Implement logout logic here
//   }

//   return (
//     <div className="test-coverage-container">
//       <Header />
//       <Menu onLogout={handleLogout} />
//       <div className="dashboard-content">
//         <Tabs
//           id="controlled-tab-example"
//           activeKey={key}
//           onSelect={(k) => setKey(k)}
//           className="mb-3"
//         >
//           {/* ... other tabs ... */}
//         </Tabs>
//         <div className="module-list">
//           {testCoverageData.map((module) => (
//             <div className="module-item" key={module.id}>
//               <span className="module-name">{module.moduleName}</span>
//               <span className="module-coverage">{module.coverage}</span>
//               <NavLink
//                 to={`/coverage/${module.id}`}
//                 className="view-report-btn"
//               >
//                 View Full Report
//               </NavLink>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default TestCoveragePage;
