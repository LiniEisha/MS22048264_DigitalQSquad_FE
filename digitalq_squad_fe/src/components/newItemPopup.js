import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/popup.css";

function NewItemPopup({ closePopup }) {
  const [moduleName, setModuleName] = useState("");
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
    if (!sourceFile) {
      setError("Source file is mandatory.");
      return;
    }
    if (!unitTestFile && !automationFile) {
      setError("Please upload at least one of unit test file or automation file.");
      return;
    }
  
    const formData = new FormData();
    formData.append("moduleName", moduleName);
    formData.append("sourceCode", sourceFile);
    formData.append("unitTestSuite", unitTestFile);
    formData.append("automationSuite", automationFile);

  try {
    const response = await fetch("http://localhost:8000/api/modules/upload", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json',
        // 'Content-Type': 'multipart/form-data' // Do not set this header, let the browser handle it
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    alert(`Upload successful: ${data.message}`);
    closePopupAndRefresh();
  } catch (error) {
    console.error("Error uploading files:", error);
    alert("Error uploading files. Please try again.");
  }
};
const closePopupAndRefresh = () => {
  closePopup();
  window.location.reload(); // Refresh the page
};
  const handleClear = () => {
    setModuleName("");
    setSourceFile(null);
    setUnitTestFile(null);
    setAutomationFile(null);
    setError("");
    document.getElementById("module-name-input").value = "";
    document.getElementById("source-file-input").value = null;
    document.getElementById("unit-test-file-input").value = null;
    document.getElementById("automation-file-input").value = null;
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
            <label>Module Name:</label>
            <input
              id="module-name-input"
              type="text"
              value={moduleName}
              onChange={(e) => setModuleName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Source code:</label>
            <input
              id="source-file-input"
              type="file"
              accept=".js"
              onChange={handleFileChange("source")}
            />
          </div>
          <div>
            <label>Unit Test Suite:</label>
            <input
              id="unit-test-file-input"
              type="file"
              accept=".js"
              onChange={handleFileChange("unitTest")}
            />
          </div>
          <div>
            <label>Automation Suite:</label>
            <input
              id="automation-file-input"
              type="file"
              accept=".js"
              onChange={handleFileChange("automation")}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClear}>
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
