import React, { useState, useEffect } from "react";
import config from "../config.json";
import { ProgressBar, Card } from "react-bootstrap";
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
        }, 1000); // nodig om de animatie 'bij' te krijgen, wordt verderop van correctiontime afgetrokken
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
    }, (config.waitTimeInMilliseconds + (config.correctionTime - 1000)) / 51);
  }, [setPage]);

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
