import React, { useState, useEffect } from "react";
import config from "../config.json";
import { ProgressBar } from "react-bootstrap";
import { addData } from "../stitch.js";

export default function Control({ setPage }) {
  const [progressBarFill, setProgressBarFill] = useState(0);

  useEffect(() => {
    addData({ conditionType: "control", conditionTime: Date.now() });
    let counter = 0;
    const interval = setInterval(() => {
      if (counter === 100) {
        clearInterval(interval);
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
    }, config.waitTimeInMilliseconds / 51);
  }, [setPage]);

  return (
    <>
      <p>
        <em>We zijn voor je op zoek...</em>
      </p>
      <ProgressBar animated={true} now={progressBarFill} />
    </>
  );
}
