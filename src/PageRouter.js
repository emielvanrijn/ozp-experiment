import React, { useContext } from "react";
import AcceptTermsPage from "./pages/AcceptTermsPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import DestinationPage from "./pages/DestinationPage.jsx";
import InformationPage from "./pages/InformationPage.jsx";
import Control from "./conditions/Control.jsx";
import PassiveEntertainment from "./conditions/PassiveEntertainment.jsx";
import AlternativeActiveEntertainment from "./conditions/AlternativeActiveEntertainment.jsx";
import DataContext from "./context.js";
import DealSelectionPage from "./pages/DealSelectionPage.jsx";
import DealConfirmationPage from "./pages/DealConfirmationPage.jsx";
import QuestionnairePage from "./pages/QuestionnairePage.jsx";
import ThankyouPage from "./pages/ThankyouPage.jsx";
import SubscriptionConfirmationPage from "./pages/SubscriptionConfirmationPage.jsx";
import Button from "react-bootstrap/Button";
import StudyIntroductionPage from "./pages/StudyIntroductionPage.jsx";

export default function PageRouter() {
  const { condition, currentPage, prevPage } = useContext(DataContext);

  return (
    <>
      {currentPage >= 2 && currentPage !== 5 ? (
        <div className="banner">
          <div className="banner__back-button--container">
            <Button
              className="button banner__back-button"
              disabled={currentPage < 3 || currentPage !== 6}
              onClick={prevPage}
            >
              {"<"}
            </Button>
          </div>
          <div className="banner__content">Treinreisvergelijker.nl</div>
          <div className="banner__logo--container">
            <img
              className="banner__logo"
              src="/images/train-logo.png"
              alt="Trein-Logo"
            />
          </div>
        </div>
      ) : null}
      <div className="page-content">{renderPage(currentPage, condition)}</div>
    </>
  );
}

function renderPage(currentPage, condition) {
  const pages = [
    <AcceptTermsPage />,
    <StudyIntroductionPage />,
    <LandingPage />,
    <DestinationPage />,
    <InformationPage />,
    renderCondition(condition),
    <DealSelectionPage />,
    <DealConfirmationPage />,
    <QuestionnairePage />,
    <ThankyouPage />,
    <SubscriptionConfirmationPage />
  ];
  return pages[currentPage];
}

function renderCondition(condition) {
  return condition === 0 ? (
    <Control />
  ) : condition === 1 ? (
    <PassiveEntertainment />
  ) : condition === 2 ? (
    <AlternativeActiveEntertainment />
  ) : (
    <div className="error">Error</div> // soort van default case hier, misschien nog error-page toevoegen, maar redelijk 'veilig'.
  );
}
