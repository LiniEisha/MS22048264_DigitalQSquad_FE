// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../styles/testCoverageDetailPage.css";
// import Header from "./headerItems"; // Make sure this points to the correct file location
// import Menu from "./menuItems"; // Make sure this points to the correct file location
// import Footer from "./footerItem"; // Make sure this points to the correct file location

// function DetailedCoverageReport() {
//   let { id } = useParams();

//   // You can fetch report details using useEffect if they're dynamic
//   const reportDetails = {
//     coverage: "75%",
//     linesToCover: 20,
//     uncoveredLines: 5,
//     lineCoverage: "70%",
//     branchesToCover: 5,
//     uncoveredBranches: 2,
//     branchCoverage: "90%",
//     codeSnippet: `public class NestedExample {
//       public static void main(String[] args) {
//         for (int i = 0; i < 5; i++) {
//           for (int j = 0; j < i; j++) {
//             if (j % 2 == 0) {
//               System.out.print("Even ");
//             } else {
//               System.out.print("Odd ");
//             }
//           }
//           System.out.println();
//         }
//       }
//     }`,
//   };
//   function handleLogout() {
//     // Implement logout logic here
//   }

//   function TestCoverageDetailsPage({ match }) {
//     const [coverageDetails, setCoverageDetails] = useState(null);

//     useEffect(() => {
//       fetch(`/modules/${match.params.id}/coverage`)
//         .then((response) => response.json())
//         .then((data) => setCoverageDetails(data));
//     }, [match.params.id]);

//     // Render the coverageDetails in your component
//   }

//   return (
//     <div className="container">
//       <Header />
//       <Menu onLogout={handleLogout} />
//       <hr />
//       <div className="content-section">
//         <div className="metrics-section">
//           <p className="metric">Coverage: {reportDetails.coverage}</p>
//           <p className="metric">Lines to Cover: {reportDetails.linesToCover}</p>
//           <p className="metric">
//             Uncovered Lines: {reportDetails.uncoveredLines}
//           </p>
//           <p className="metric">Line Coverage: {reportDetails.lineCoverage}</p>
//           <p className="metric">
//             Branches to Cover: {reportDetails.branchesToCover}
//           </p>
//           <p className="metric">
//             Uncovered Branches: {reportDetails.uncoveredBranches}
//           </p>
//           <p className="metric">
//             Branch Coverage: {reportDetails.branchCoverage}
//           </p>
//         </div>

//         <div className="code-section">
//           <pre>
//             <code>{reportDetails.codeSnippet}</code>
//           </pre>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default DetailedCoverageReport;

import React, { useEffect, useState } from "react";

function TestCoverageDetailsPage({ match }) {
  const [coverageDetails, setCoverageDetails] = useState(null);

  useEffect(() => {
    fetch(`/modules/${match.params.id}/coverage`)
      .then((response) => response.json())
      .then((data) => setCoverageDetails(data));
  }, [match.params.id]);

  return (
    <table>
      <thead>
        <tr>
          <th>Module Name</th>
          <th>Coverage Percentage</th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {coverageDetails &&
          coverageDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.moduleName}</td>
              <td>{detail.coveragePercentage}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default TestCoverageDetailsPage;
