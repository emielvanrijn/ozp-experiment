import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";

export default function PageRouter() {
  const [currentPage, setPage] = useState(0);

  return renderPage(currentPage, setPage);
}

function renderPage(currentPage, setPage) {
  switch (currentPage) {
    case 0:
      return LandingPage(setPage);
    default:
      return <div>Page with ID {currentPage} does not exist!</div>;
  }
}
