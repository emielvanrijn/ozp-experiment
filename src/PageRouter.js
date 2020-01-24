import React, { useState, useContext } from "react";
import AcceptTermsPage from "./pages/AcceptTermsPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import DestinationPage from "./pages/DestinationPage.jsx";
import InformationPage from "./pages/InformationPage.jsx";
import Control from "./conditions/Control.jsx";
import PassiveEntertainment from "./conditions/PassiveEntertainment.jsx";
import ActiveEntertainment from "./conditions/ActiveEntertainment.jsx";
import DataContext from "./context.js";

export default function PageRouter() {
  const [currentPage, setPage] = useState("condition");
  const { condition } = useContext(DataContext);
  return renderPage(currentPage, setPage, condition);
}

function renderPage(currentPage, setPage, condition) {
  switch (currentPage) {
    case "terms":
      return <AcceptTermsPage setPage={setPage} />;
    case "landing":
      return <LandingPage setPage={setPage} />;
    case "destination":
      return <DestinationPage setPage={setPage} />;
    case "information":
      return <InformationPage setPage={setPage} />;
    case "condition":
      return condition === 0 ? (
        <Control setPage={setPage} />
      ) : condition === 1 ? (
        <PassiveEntertainment setPage={setPage} />
      ) : condition === 2 ? (
        <ActiveEntertainment setPage={setPage} />
      ) : (
        <LandingPage /> // soort van default case hier, misschien nog error-page toevoegen, maar redelijk 'veilig'.
      );
    default:
      return (
        <div>
          Page <strong>{currentPage}</strong> does not exist!
        </div>
      );
  }
}
