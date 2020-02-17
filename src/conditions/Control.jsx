import React, { useState, useEffect, useContext } from "react";
import config from "../config.json";
import { ProgressBar, Card } from "react-bootstrap";
import { addData } from "../stitch.js";
import DataContext from "../context.js";

export default function Control({ nextPage }) {
  const [progressBarFill, setProgressBarFill] = useState(0);

  const { destination, occupation, preference } = useContext(DataContext);

  useEffect(() => {
    addData({
      occupation,
      preference,
      destination: destination.name,
      conditionType: "control",
      conditionTime: Date.now()
    });
    let counter = 0;
    const interval = setInterval(() => {
      if (counter === 100) {
        clearInterval(interval);
        setTimeout(() => {
          nextPage();
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
    //eslint-disable-next-line
  }, [nextPage]);

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
