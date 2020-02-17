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
  }, []);

  return (
    <>
      <Card className="card flex">
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
          addData({ wachtPerceptie, wachtTijdSchatting });
          nextPage();
        }}
      >
        Afronden
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
