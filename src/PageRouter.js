import React, { useContext } from "react";
import {
  AcceptTermsPage,
  StudyIntroductionPage,
  LandingPage,
  InformationPage,
  DealSelectionPage,
  DealConfirmationPage,
  PaymentPage,
  QuestionnairePage,
  ThankyouPage,
  SubscriptionConfirmationPage
} from "./pages";
import {
  Control,
  PassiveEntertainment,
  AlternativeActiveEntertainment
} from "./conditions";
import GlobalState from "./GlobalState.js";
import Button from "react-bootstrap/Button";

export default function PageRouter() {
  const { condition, currentPage, prevPage } = useContext(GlobalState);
  const disableBackButtonPageIndices = [2, 5, 8, 9, 10];
  return (
    <div className={currentPage <= 1 ? "intro" : "app"}>
      {currentPage >= 2 && currentPage !== 4 && (
        <div className="banner">
          <div className="banner__back-button--container">
            <Button
              className="button banner__back-button"
              style={{ marginBottom: 0 }}
              disabled={disableBackButtonPageIndices.includes(currentPage)}
              onClick={prevPage}
            >
              {"<"}
            </Button>
          </div>
          <div className="banner__content">Treinreisstunter.nl</div>
          <div className="banner__logo--container">
            <img
              className="banner__logo"
              src="/images/train-logo.png"
              alt="trein-Logo"
            />
          </div>
        </div>
      )}
      <div className="page-content">{renderPage(currentPage, condition)}</div>
    </div>
  );
}

function renderPage(currentPage, condition) {
  const pages = [
    <AcceptTermsPage />,
    <StudyIntroductionPage />,
    <LandingPage />,
    <InformationPage />,
    renderCondition(condition),
    <DealSelectionPage />,
    <DealConfirmationPage />,
    <PaymentPage />,
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
  ) : (
    condition === 2 && <AlternativeActiveEntertainment />
  );
}
