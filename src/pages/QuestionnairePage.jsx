import React, { useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";
import GlobalState from "../GlobalState";

export default function QuestionnairePage() {
  const {
    nextPage,
    setCurrentPage,
    currentRound,
    setCurrentRound,
    deal
  } = useContext(GlobalState);

  const [wachtPerceptie, setWachtPerceptie] = useState(null);
  const [wachtTijdSchatting, setWachtTijdSchatting] = useState(null);

  const wachtPerceptieOptions = [
    "Heel kort",
    "Kort",
    "Niet kort of lang",
    "Lang",
    "Heel lang"
  ];

  const wachtTijdSchattingOptions = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20"
  ];

  useEffect(() => {
    addData({
      ["questionnaire_" + currentRound.toString()]: Date.now(),
      ["deal_" + currentRound.toString()]: deal.title
    });
    //eslint-disable-next-line
  }, []);

  const startNewRound = () => {
    setCurrentPage(1);
    setCurrentRound(2);
  };

  return (
    <>
      <Card className="card flex">
        <div className="scrollable flex">
          <p>
            Bedankt voor het boeken van jouw treinreis via Treinreisstunter.nl,
            hieronder volgen een aantal vragen over hoe je dit ervaren hebt.
          </p>
          <hr />
          <center style={{ color: "red" }}>
            Scroll goed door voor alle vragen!
          </center>
          <hr />
          <ButtonGroupWithOptions
            label="Wat vond je van de wachttijd?"
            variable={wachtPerceptie}
            setVariable={setWachtPerceptie}
            options={wachtPerceptieOptions}
          />
          <ButtonGroupWithOptions
            label="Hoeveel seconden denk je gewacht te hebben?"
            variable={wachtTijdSchatting}
            setVariable={setWachtTijdSchatting}
            options={wachtTijdSchattingOptions}
          />
        </div>
      </Card>
      <Button
        variant="success"
        className="button"
        disabled={!(wachtPerceptie && wachtTijdSchatting)}
        onClick={() => {
          addData({
            ["wachttijd_perceptie_" + currentRound.toString()]: wachtPerceptie,
            ["wachttijd_schatting_" +
            currentRound.toString()]: wachtTijdSchatting
          });
          currentRound === 1 ? startNewRound() : nextPage();
        }}
      >
        {currentRound === 1 ? "Volgende opdracht" : "Afronden"}
      </Button>
    </>
  );
}

function ButtonGroupWithOptions({ label, variable, setVariable, options }) {
  return (
    <>
      <p className="question-label">{label}</p>
      <div className="questionnaire-grid">
        {options.map((option, index) => (
          <div
            key={index}
            className={
              "questionnaire-grid-item " +
              (variable === option ? "selected" : "")
            }
            onClick={() => setVariable(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </>
  );
}
