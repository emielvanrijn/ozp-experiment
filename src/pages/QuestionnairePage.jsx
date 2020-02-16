import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";

export default function QuestionnairePage({ nextPage }) {
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
    addData({ questionnaire: Date.now() });
  }, [])

  return (
    <>
      <Card className="card flex">
        <p className="question-label">Wat vond je van de wachttijd?</p>
        <ButtonGroupWithOptions
          variable={wachtPerceptie}
          setVariable={setWachtPerceptie}
          options={wachtPerceptieOptions}
        />
        <p className="question-label">
          Hoeveel seconden denk je gewacht te hebben?
        </p>
        <ButtonGroupWithOptions
          variable={wachtTijdSchatting}
          setVariable={setWachtTijdSchatting}
          options={wachtTijdSchattingOptions}
        />
      </Card>
      <Button
        variant="success"
        className="button"
        onClick={() => nextPage()}
      >
        Afronden
      </Button>
    </>
  );
}

function ButtonGroupWithOptions({ variable, setVariable, options }) {
  return (
    <div className="questionnaire-grid">
      {options.map((option, index) => (
        <div
          key={index}
          className={
            "questionnaire-grid-item " + (variable === option ? "selected" : "")
          }
          onClick={() => setVariable(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
}
