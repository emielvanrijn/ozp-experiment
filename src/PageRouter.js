import React, { useState, useContext } from "react";
import AcceptTermsPage from "./pages/AcceptTermsPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import DestinationPage from "./pages/DestinationPage.jsx";
import InformationPage from "./pages/InformationPage.jsx";
import Control from "./conditions/Control.jsx";
import PassiveEntertainment from "./conditions/PassiveEntertainment.jsx";
// import ActiveEntertainment from "./conditions/ActiveEntertainment.jsx";
import AlternativeActiveEntertainment from "./conditions/AlternativeActiveEntertainment.jsx";
import DataContext from "./context.js";
import DealSelectionPage from "./pages/DealSelectionPage.jsx";
import DealConfirmationPage from "./pages/DealConfirmationPage.jsx";
import QuestionnairePage from "./pages/QuestionnairePage.jsx";
import ThankyouPage from "./pages/ThankyouPage.jsx";
import SubscriptionConfirmationPage from "./pages/SubscriptionConfirmationPage.jsx";

export default function PageRouter() {
  const [currentPage, setPage] = useState("terms");
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
        // <ActiveEntertainment setPage={setPage} />
        <AlternativeActiveEntertainment setPage={setPage} />
      ) : (
        <LandingPage /> // soort van default case hier, misschien nog error-page toevoegen, maar redelijk 'veilig'.
      );
    case "selection":
      return <DealSelectionPage setPage={setPage} />;
    case "confirmation":
      return <DealConfirmationPage setPage={setPage} />;
    case "questionnaire":
      return <QuestionnairePage setPage={setPage} />;
    case "thankyou":
      return <ThankyouPage setPage={setPage} />;
    case "subscribed":
      return <SubscriptionConfirmationPage />;
    default:
      return (
        <div>
          Page <strong>{currentPage}</strong> does not exist!
        </div>
      );
  }
}
