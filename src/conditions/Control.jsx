import React, { useState, useEffect, useContext } from "react";
import config from "../config.json";
import { ProgressBar, Card } from "react-bootstrap";
import { addData } from "../stitch.js";
import GlobalState from "../GlobalState.js";

export default function Control() {
  const [progressBarFill, setProgressBarFill] = useState(0);

  const {
    destination,
    occupation,
    preference,
    nextPage,
    currentRound,
    information
  } = useContext(GlobalState);

  useEffect(() => {
    addData({
      ["information_" + currentRound.toString()]: information,
      ["occupation_" + currentRound.toString()]: occupation,
      ["preference_" + currentRound.toString()]: preference,
      ["destination_" + currentRound.toString()]: destination.name,
      ["condition_type_" + currentRound.toString()]: "control",
      ["condition_time_" + currentRound.toString()]: Date.now()
    });
    let counter = 0;
    const interval = setInterval(() => {
      if (counter === 100) {
        clearInterval(interval);
        setTimeout(() => {
          nextPage();
        }, 750); // nodig om de animatie 'bij' te krijgen, wordt verderop van correctiontime afgetrokken
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
    }, (config.waitTimeInMilliseconds + (config.correctionTime - 750)) / 51);
    //eslint-disable-next-line
  }, []);

  return (
    <Card className="card flex centered-contents">
      <div>
        <p>
          <em>We zijn voor je op zoek...</em>
        </p>
        <ProgressBar animated={true} now={progressBarFill} />
      </div>
    </Card>
  );
}
