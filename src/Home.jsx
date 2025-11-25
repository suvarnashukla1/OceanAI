import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [page, setPage] = useState("home"); // home OR configure

  // --- PAGE 2: CONFIGURE PAGE ---
  if (page === "configure") {
    return (
      <div className="home-page">
        <div className="home-box">

          <h2 className="home-title">Configure Project</h2>

          <label>Main Topic:</label>
          <input type="text" placeholder="Enter topic" className="input-field" />

          <label>Select Document Type:</label>
          <div className="doc-options">
            <button className="doc-btn">Word (.docx)</button>
            <button className="doc-btn">PowerPoint (.pptx)</button>
          </div>

          <label>Outline / Slide Titles:</label>
          <input type="text" placeholder="Enter section or slide title" className="input-field" />

          <button className="start-btn">+ Add More</button>

          {/* Go to next or back */}
          <button className="start-btn" onClick={() => setPage("home")}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // --- PAGE 1: HOME PAGE ---
  return (
    <div className="home-page">
      <div className="home-box">

        <h1 className="home-title">AI Document Generator</h1>
        <p className="home-subtitle">
          Create, generate, refine, and export AI-powered Word & PowerPoint documents.
        </p>

        <div className="section">
          <h2 className="section-title">Start a New Project</h2>

          <div className="create-project">
            <label>Main Topic:</label>
            <input type="text" placeholder="e.g. Market analysis of EV industry" className="input-field" />

            <label>Select Document Type:</label>
            <div className="doc-options">
              <button className="doc-btn">Word (.docx)</button>
              <button className="doc-btn">PowerPoint (.pptx)</button>
            </div>

            {/* THIS BUTTON SWITCHES THE PAGE */}
            <button
              className="start-btn"
              onClick={() => setPage("configure")}
            >
              Create Project
            </button>
          </div>
        </div>

        <div className="existing-projects">
          <h2 className="section-title">Your Projects</h2>
          <p className="no-projects">No projects yet. Begin by creating a new one.</p>
        </div>

      </div>
    </div>
  );
};

export default Home;
