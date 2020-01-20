import React, { useState } from "react";
import AcceptTermsPage from "./pages/AcceptTermsPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import DestinationPage from "./pages/DestinationPage.jsx";
import InformationPage from "./pages/InformationPage.jsx";

export default function PageRouter() {
  const [currentPage, setPage] = useState("acceptTerms");

  return renderPage(currentPage, setPage);
}

function renderPage(currentPage, setPage) {
  switch (currentPage) {
    case "acceptTerms":
      return <AcceptTermsPage setPage={setPage} />;
    case "landing":
      return <LandingPage setPage={setPage} />;
    case "information":
      return <InformationPage setPage={setPage} />;
    case "destination":
      return <DestinationPage setPage={setPage} />;
    default:
      return (
        <div>
          Page <strong>{currentPage}</strong> does not exist!
        </div>
      );
  }
}
