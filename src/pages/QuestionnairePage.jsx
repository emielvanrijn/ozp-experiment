import React, { useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";
import DataContext from "../context";

export default function QuestionnairePage() {
  const {
    nextPage,
    setCurrentPage,
    currentRound,
    setCurrentRound,
    id
  } = useContext(DataContext);

  const [wachtPerceptie, setWachtPerceptie] = useState(null);
  const [wachtTijdSchatting, setWachtTijdSchatting] = useState(null);

  const wachtPerceptieOptions = [
    "Heel kort",
    "Kort",
    "Neutraal",
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
    "15"
  ];

  useEffect(() => {
    addData({ ["questionnaire_" + currentRound.toString()]: Date.now() }, id);
    //eslint-disable-next-line
  }, []);

  const startNewRound = () => {
    setCurrentPage(1);
    setCurrentRound(2);
  };

  return (
    <>
      <Card className="card flex">
        <p>
          Bedankt voor het bestellen via Treinreisvergelijker.nl, hieronder
          volgen een aantal vragen over hoe je dit ervaren hebt.
        </p>
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
      </Card>
      <Button
        variant="success"
        className="button"
        onClick={() => {
          addData(
            {
              ["wachttijd_perceptie_" +
              currentRound.toString()]: wachtPerceptie,
              ["wachttijd_schatting_" +
              currentRound.toString()]: wachtTijdSchatting
            },
            id
          );
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
