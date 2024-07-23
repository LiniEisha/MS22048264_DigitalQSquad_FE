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
        setAnnotatedSourceCode(response.data.annotatedSourceCode);
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
          <div className="col-4">
            <div className="metrics-section">
              <p className="metric">Module Name: {reportDetails.moduleName}</p>
              <p className="metric">
                Total Lines: {reportDetails.totalLines}
              </p>
              <p className="metric">
                Executed Lines: {reportDetails.executedLines}
              </p>
              <p className="metric">
                Total Branches: {reportDetails.totalBranches}
              </p>
              <p className="metric">
                Executed Branches:
                {reportDetails.executedBranches}
              </p>
              <p className="metric">
                Total Line Coverage: {reportDetails.totalLineCoverage}%
              </p>
              <p className="metric">
                Total Branch Coverage: {reportDetails.totalBranchCoverage}%
              </p>
            </div>
          </div>
          <div className="col-8">
            <div className="code-section">
              <pre>
                <code>{reportDetails.sourceCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="annotated-code-section">
              <h3>Annotated Source Code:</h3>
              <pre>
                <code
                  dangerouslySetInnerHTML={{ __html: annotatedSourceCode }}
                />
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
