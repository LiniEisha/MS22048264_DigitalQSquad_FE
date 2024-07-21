// import React from "react";
// import { useParams } from "react-router-dom";
// import "../styles/codeComplexityDetailPage.css";
// import Header from "./headerItems";
// import Menu from "./menuItems";
// import Footer from "./footerItem";

// function CodeComplexityDetail() {
//   let { id } = useParams();
//   const [key, setKey] = useState("home");
//   const [modulesData, setModulesData] = useState([]);

//   const complexityDetails = {
//     cyclomaticComplexity: "5",
//     weightedCompositeComplexity: "50",
//     codeSnippet: `public class NestedExample {
//             public static void main(String[] args) {
//                 for (int i = 0; i < 5; i++) {
//                     for (int j = 0; j < i; j++) {
//                         if (j % 2 == 0) {
//                             System.out.print("Even ");
//                         } else {
//                             System.out.print("Odd ");
//                         }
//                     }
//                     System.out.println();
//                 }
//             }
//         }`,
//   };

//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <div className="content-section">
//         <div className="metrics-section">
//           <p>Cyclomatic Complexity: {complexityDetails.cyclomaticComplexity}</p>
//           <p>
//             Weighted Composite Complexity:{" "}
//             {complexityDetails.weightedCompositeComplexity}
//           </p>
//         </div>
//         <div className="code-section">
//           <pre>
//             <code>{complexityDetails.codeSnippet}</code>
//           </pre>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default CodeComplexityDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/codeComplexityDetailPage.css";
import Header from "./headerItems";
import Menu from "./menuItems";
import Footer from "./footerItem";

function CodeComplexityDetail() {
  let { id } = useParams();
  const [moduleData, setModuleData] = useState(null);

  useEffect(() => {
    async function fetchModuleData() {
      try {
        const response = await axios.get(`http://localhost:8000/api/complexity/${id}`);
        setModuleData(response.data);
      } catch (error) {
        console.error("Error fetching module details:", error);
      }
    }
    fetchModuleData();
  }, [id]);

  if (!moduleData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Header />
      <Menu />
      <div className="content-section">
        <div className="metrics-section">
          <p>Cyclomatic Complexity: {moduleData.cyclomaticComplexity}</p>
          <p>Weighted Composite Complexity: {moduleData.weightedCompositeComplexity}</p>
        </div>
        <div className="code-section">
          <pre>
            <code>{moduleData.sourceCode || "No code snippet available"}</code>
          </pre>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CodeComplexityDetail;
