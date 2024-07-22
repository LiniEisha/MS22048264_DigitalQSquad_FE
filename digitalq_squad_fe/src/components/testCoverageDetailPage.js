import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/testCoverageDetailPage.css";
import Header from "./headerItems";
import Menu from "./menuItems";
import Footer from "./footerItem";
import axios from "axios";

function DetailedCoverageReport() {
  let { id } = useParams();
  const [reportDetails, setReportDetails] = useState(null);
  const [annotatedSourceCode, setAnnotatedSourceCode] = useState("");

  useEffect(() => {
    async function fetchCoverageDetails() {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/testCoverage/${id}`
        );
        setReportDetails(response.data);
      } catch (error) {
        console.error("Error fetching coverage details:", error);
      }
    }
    fetchCoverageDetails();
  }, [id]);

  function handleLogout() {
    // Implement logout logic here
  }

  if (!reportDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Header />
      <Menu onLogout={handleLogout} />
      <hr />
      <div className="content-section">
        <div className="row justify-content-start">
          <div class="col-4">
            <div className="metrics-section">
              <p className="metric">Module Name: {reportDetails.moduleName}</p>
              <p className="metric">
                Unit Test Line Coverage: {reportDetails.unitTestLineCoverage}%
              </p>
              <p className="metric">
                Unit Test Branch Coverage:{" "}
                {reportDetails.unitTestBranchCoverage}%
              </p>
              <p className="metric">
                Automation Line Coverage: {reportDetails.automationLineCoverage}
                %
              </p>
              <p className="metric">
                Automation Branch Coverage:{" "}
                {reportDetails.automationBranchCoverage}%
              </p>
              <p className="metric">
                Total Line Coverage: {reportDetails.totalLineCoverage}%
              </p>
              <p className="metric">
                Total Branch Coverage: {reportDetails.totalBranchCoverage}%
              </p>
            </div>
          </div>
          <div class="col-8">
            <div className="code-section">
              <pre>
                <code>{reportDetails.sourceCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div class="row justify-content-center">
          <div className="col-12">
            <div className="annotated-code-section">
              <h3>Annotated Source Code:</h3>
              <pre>
                <code>{reportDetails.sourceCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailedCoverageReport;
