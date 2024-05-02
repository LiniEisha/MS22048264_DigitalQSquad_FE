// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import HomePage from "./components/homePage";
import TestCoveragePage from "./components/testCoveragePage";
import CodeComplexityPage from "./components/codeComplexityPage";
import RecommendationsPage from "./components/recommendationPage";
import DetailedCoverageReport from "./components/testCoverageDetailPage";
import CodeComplexityDetail from "./components/codeComplexityDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/testCoverage" element={<TestCoveragePage />} />
        <Route path="/codeComplexity" element={<CodeComplexityPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/coverage/:id" element={<DetailedCoverageReport />} />
        <Route path="/complexity/:id" element={<CodeComplexityDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
