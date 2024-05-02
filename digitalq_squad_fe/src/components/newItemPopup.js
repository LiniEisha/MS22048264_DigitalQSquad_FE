// NewItemPopup.jsx

import React from "react";
import "../styles/popup.css";

function NewItemPopup({ closePopup }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-icon" onClick={closePopup}>
          ×
        </button>{" "}
        {/* Close Icon */}
        <h2>New Item</h2>
        <form>
          <div>
            <label>Source code:</label>
            <input type="file" webkitdirectory="true" directory="true" />
          </div>
          <div>
            <label>Unit test suite:</label>
            <input type="file" webkitdirectory="true" directory="true" />
          </div>
          <div>
            <label>Test suite:</label>
            <input type="file" webkitdirectory="true" directory="true" />
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={closePopup}>
            Clear
          </button>
        </form>
        {/* Your existing buttons */}
      </div>
    </div>
  );
}

export default NewItemPopup;
