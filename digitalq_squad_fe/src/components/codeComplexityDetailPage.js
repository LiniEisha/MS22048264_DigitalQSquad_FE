import React from "react";
import { useParams } from "react-router-dom";
import "../styles/codeComplexityDetailPage.css";
import Header from "./headerItems";
import Menu from "./menuItems";
import Footer from "./footerItem";

function CodeComplexityDetail() {
  let { id } = useParams();

  const complexityDetails = {
    cyclomaticComplexity: "5",
    weightedCompositeComplexity: "50",
    codeSnippet: `public class NestedExample {
            public static void main(String[] args) {
                for (int i = 0; i < 5; i++) {
                    for (int j = 0; j < i; j++) {
                        if (j % 2 == 0) {
                            System.out.print("Even ");
                        } else {
                            System.out.print("Odd ");
                        }
                    }
                    System.out.println();
                }
            }
        }`,
  };

  return (
    <div className="container">
      <Header />
      <Menu />
      <div className="content-section">
        <div className="metrics-section">
          <p>Cyclomatic Complexity: {complexityDetails.cyclomaticComplexity}</p>
          <p>
            Weighted Composite Complexity:{" "}
            {complexityDetails.weightedCompositeComplexity}
          </p>
        </div>
        <div className="code-section">
          <pre>
            <code>{complexityDetails.codeSnippet}</code>
          </pre>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CodeComplexityDetail;
