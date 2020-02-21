import React, { useContext } from "react";
import DataContext from "../context";

export default function StudyIntroductionPage() {
  const { nextPage, currentRound } = useContext(DataContext);

  return (
    <div className="intro">
      <div className="flex">
        <p>
          {currentRound === 1 ? instructions[0] : instructions[1]}
          <strong>{currentRound === 1 ? cities[0] : cities[1]}</strong>
        </p>
      </div>
      <div className="spacing"></div>
      <button onClick={() => nextPage()}>Starten</button>
    </div>
  );
}

const instructions = [
  "We vragen je om een ticket te bestellen naar: ",
  "We zijn al op de helft! Nu vragen we je om nog een keer een ticket te bestellen, dit keer naar: "
];

const cities = ["Londen", "Berlijn"];
