import React, { useState } from "react";
import LandingPage from "./pages/LandingPage.jsx";

export default function PageRouter() {
  const [currentPage, setPage] = useState("landing");

  return renderPage(currentPage, setPage);
}

function renderPage(currentPage, setPage) {
  switch (currentPage) {
    case "landing":
      return <LandingPage setPage={setPage} />;
    default:
      return (
        <div>
          Page <strong>{currentPage}</strong> does not exist!
        </div>
      );
  }
}
