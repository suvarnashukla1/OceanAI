import React, { useState } from "react";
import "./Configure.css";

const Configure = ({ navigate }) => {
  const [docType, setDocType] = useState("word");
  const [outline, setOutline] = useState([""]);

  return (
    <div className="configure-page">
      <div className="configure-box">

        <h2>Configure Project</h2>

        {/* Topic */}
        <label className="form-label">Topic:</label>
        <input className="topic-input" type="text" placeholder="Enter topic" />

        {/* Document Type */}
        <label className="form-label">Document Type:</label>

        <div className="doc-options">
          <button
            className={`option-btn ${docType === "word" ? "active" : ""}`}
            onClick={() => setDocType("word")}
          >
            Word
          </button>

          <button
            className={`option-btn ${docType === "ppt" ? "active" : ""}`}
            onClick={() => setDocType("ppt")}
          >
            PPT
          </button>
        </div>

        {/* Outline / Slides */}
        <label className="form-label">
          {docType === "word" ? "Outline Sections:" : "Slide Titles:"}
        </label>

        {outline.map((item, index) => (
          <input
            key={index}
            className="outline-input"
            value={item}
            placeholder={`Enter ${docType === "word" ? "section" : "slide"} name`}
            onChange={(e) => {
              const updated = [...outline];
              updated[index] = e.target.value;
              setOutline(updated);
            }}
          />
        ))}

        <button className="add-btn" onClick={() => setOutline([...outline, ""]) }>
          + Add More
        </button>

        {/* Go to next */}
        <button className="save-btn" onClick={() => navigate("generate")}>
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default Configure;
