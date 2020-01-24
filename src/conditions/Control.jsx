import React, { useState, useEffect } from "react";
import config from "../config.json";
import { ProgressBar } from "react-bootstrap";

export default function Control({ setPage }) {
  const [progressBarFill, setProgressBarFill] = useState(0);

  useEffect(() => {
    let counter = 0;
    setInterval(() => {
      if (counter === 100) {
        setTimeout(() => {
          setPage("selection");
        }, config.correctionTime); // nodig om de animatie 'bij' te krijgen, staat gelijk aan correctie toegepast bij entertainment-condities
      }
      if (counter >= 82 && counter < 100) {
        counter += 1; // 18x
        setProgressBarFill(counter);
      }
      if (counter >= 48 && counter < 82) {
        counter += 2; // 17x
        setProgressBarFill(counter);
      }
      if (counter < 48) {
        counter += 3; // 16x
        setProgressBarFill(counter);
      }
      console.log(counter);
    }, config.waitTimeInMilliseconds / 51);
  }, [setPage]);

  return (
    <>
      <p>Control Condition</p>
      <ProgressBar animated={true} now={progressBarFill} />
    </>
  );
}
