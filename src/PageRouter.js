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

export default function PageRouter() {
  const { condition, currentPage, setPage } = useContext(DataContext);

  const nextPage = () => setPage(currentPage + 1);
  const prevPage = () => setPage(currentPage - 1);

  return (
    <>
      {currentPage >= 1 ? (
        <div className="banner">
          <div className="banner__back-button--container">
            <Button
              className="button banner__back-button"
              disabled={
                currentPage < 2 || (currentPage >= 4 && currentPage < 6)
              }
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
      <div className="content">
        {renderPage(currentPage, nextPage, condition)}
      </div>
    </>
  );
}

function renderPage(currentPage, nextPage, condition) {
  switch (currentPage) {
    case 0:
      return <AcceptTermsPage nextPage={nextPage} />;
    case 1:
      return <LandingPage nextPage={nextPage} />;
    case 2:
      return <DestinationPage nextPage={nextPage} />;
    case 3:
      return <InformationPage nextPage={nextPage} />;
    case 4:
      return condition === 0 ? (
        <Control nextPage={nextPage} />
      ) : condition === 1 ? (
        <PassiveEntertainment nextPage={nextPage} />
      ) : condition === 2 ? (
        <AlternativeActiveEntertainment nextPage={nextPage} />
      ) : (
        <div className="error">Error</div> // soort van default case hier, misschien nog error-page toevoegen, maar redelijk 'veilig'.
      );
    case 5:
      return <DealSelectionPage nextPage={nextPage} />;
    case 6:
      return <DealConfirmationPage nextPage={nextPage} />;
    case 7:
      return <QuestionnairePage nextPage={nextPage} />;
    case 8:
      return <ThankyouPage nextPage={nextPage} />;
    case 9:
      return <SubscriptionConfirmationPage />;
    default:
      return (
        <div>
          Page <strong>{currentPage}</strong> does not exist!
        </div>
      );
  }
}
