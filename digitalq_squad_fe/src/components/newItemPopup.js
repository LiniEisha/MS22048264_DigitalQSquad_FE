import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/popup.css";

function NewItemPopup({ closePopup }) {
  const [sourceFile, setSourceFile] = useState(null);
  const [unitTestFile, setUnitTestFile] = useState(null);
  const [automationFile, setAutomationFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (type) => (event) => {
    const file = event.target.files[0];
    if (file && file.name.endsWith(".js")) {
      if (type === "source") setSourceFile(file);
      else if (type === "unitTest") setUnitTestFile(file);
      else if (type === "automation") setAutomationFile(file);
      setError("");
    } else {
      setError("Please upload a valid .js file");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!sourceFile || !unitTestFile || !automationFile) {
      setError("Please upload all required files.");
      return;
    }

    const formData = new FormData();
    formData.append("sourceCode", sourceFile);
    formData.append("unitTestSuite", unitTestFile);
    formData.append("automationSuite", automationFile);

    try {
      const response = await fetch("http://localhost:5000/api/modules", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      alert(`Upload successful: ${data.message}`);
      closePopup();
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Error uploading files. Please try again.");
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-icon" onClick={closePopup}>
          ×
        </button>
        <h2>Upload Code and Tests</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Source code:</label>
            <input
              type="file"
              accept=".js"
              onChange={handleFileChange("source")}
            />
          </div>
          <div>
            <label>Unit Test Suite:</label>
            <input
              type="file"
              accept=".js"
              onChange={handleFileChange("unitTest")}
            />
          </div>
          <div>
            <label>Automation Suite:</label>
            <input
              type="file"
              accept=".js"
              onChange={handleFileChange("automation")}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Submit</button>
          <button type="button" onClick={closePopup}>
            Clear
          </button>
        </form>
      </div>
    </div>
  );
}

NewItemPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default NewItemPopup;
