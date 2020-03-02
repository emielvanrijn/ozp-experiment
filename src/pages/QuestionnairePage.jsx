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
    deal,
    condition
  } = useContext(GlobalState);

  const [perceptie, setPerceptie] = useState(null);
  const [tijdSchatting, setTijdSchatting] = useState(null);
  const [beleving, setBeleving] = useState(null);
  const [krassenBewust, setKrassenBewust] = useState(null);
  const [weetjeTijd, setWeetjeTijd] = useState(null);

  useEffect(() => {
    addData({
      ["questionnaire_" + currentRound.toString()]: Date.now()
      // ["deal_" + currentRound.toString()]: deal.title
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
          <p>
            Alle volgende vragen gaan over het moment dat Treinreisstunter.nl
            jouw persoonlijke deals aan het zoeken was en jou een laadscherm
            toonde. Dit is dus ná het invoeren van je gegevens (wat je bent en
            waar je voorkeur ligt) en vóór het moment dat de resultaten
            weergegeven werden.
          </p>
          <hr />
          <center style={{ color: "red" }}>
            Scroll goed door voor alle vragen!
          </center>
          <hr />

          <LikertGroup
            question="Wat vond je van de duur van het wachten?"
            variable={perceptie}
            setVariable={setPerceptie}
            labelLeft="Erg lang"
            labelRight="Erg kort"
          />
          <LikertGroup
            question="Wat vond je van het wachten?"
            variable={beleving}
            setVariable={setBeleving}
            labelLeft="Erg saai"
            labelRight="Erg leuk"
          />
          {condition === 2 && (
            <LikertGroup
              question="Hoe snel had je door wat je moest doen tijdens het laden (krassen van de foto)?"
              variable={krassenBewust}
              setVariable={setKrassenBewust}
              labelLeft="Erg traag"
              labelRight="Erg snel"
            />
          )}
          {condition !== 0 && (
            <LikertGroup
              question="Wat vond je van de tijd om het weetje te lezen?"
              variable={weetjeTijd}
              setVariable={setWeetjeTijd}
              labelLeft="Erg weinig"
              labelRight="Erg veel"
            />
          )}
          <ButtonGroupWithOptions
            question="Hoeveel seconden denk je gewacht te hebben?"
            variable={tijdSchatting}
            setVariable={setTijdSchatting}
            options={tijdSchattingOptions}
          />
        </div>
      </Card>

      <Button
        variant="success"
        className="button"
        disabled={!(perceptie && tijdSchatting && beleving)}
        onClick={() => {
          addData({
            ["perceptie_" + currentRound.toString()]: perceptie,
            ["wachttijd_schatting_" + currentRound.toString()]: tijdSchatting,
            ["beleving_" + currentRound.toString()]: beleving,
            ["krassenBewust_" + currentRound.toString()]: krassenBewust,
            ["weetjeTijd_" + currentRound.toString()]: weetjeTijd
          });
          currentRound === 1 ? startNewRound() : nextPage();
        }}
      >
        {currentRound === 1 ? "Volgende opdracht" : "Afronden"}
      </Button>
    </>
  );
}

function LikertGroup({
  question,
  variable,
  setVariable,
  labelLeft,
  labelRight
}) {
  return (
    <>
      <p className="question-label">{question}</p>
      <div className="question-labels">
        <div className="question-label-left">
          <p>{labelLeft}</p>{" "}
        </div>
        <div className="question-label-right">
          <p>{labelRight}</p>{" "}
        </div>
      </div>
      <div className="radios">
        <input
          type="radio"
          name={`${question}_1`}
          id={`${question}_1`}
          onChange={() => setVariable(1)}
          checked={variable === 1}
        />
        <input
          type="radio"
          name={`${question}_2`}
          id={`${question}_2`}
          onChange={() => setVariable(2)}
          checked={variable === 2}
        />
        <input
          type="radio"
          name={`${question}_3`}
          id={`${question}_3`}
          onChange={() => setVariable(3)}
          checked={variable === 3}
        />
        <input
          type="radio"
          name={`${question}_4`}
          id={`${question}_4`}
          onChange={() => setVariable(4)}
          checked={variable === 4}
        />
        <input
          type="radio"
          name={`${question}_5`}
          id={`${question}_5`}
          onChange={() => setVariable(5)}
          checked={variable === 5}
        />
        <input
          type="radio"
          name={`${question}_6`}
          id={`${question}_6`}
          onChange={() => setVariable(6)}
          checked={variable === 6}
        />
        <input
          type="radio"
          name={`${question}_7`}
          id={`${question}_7`}
          onChange={() => setVariable(7)}
          checked={variable === 7}
        />
      </div>
    </>
  );
}

function ButtonGroupWithOptions({ question, variable, setVariable, options }) {
  return (
    <>
      <p className="question-label">{question}</p>
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
            {option.toString()}
          </div>
        ))}
      </div>
    </>
  );
}

const tijdSchattingOptions = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];
