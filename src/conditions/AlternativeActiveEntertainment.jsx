import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import config from "../config.json";
import { addData } from "../stitch.js";
import { useEffect } from "react";
import ScratchCard from "../components/ScratchCard.jsx";
import GlobalState from "../GlobalState.js";

export default function AlternativeActiveEntertainment() {
  const {
    destination,
    setStartDrawing,
    setFinishDrawing,
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
      ["condition_type_" + currentRound.toString()]: "active",
      ["condition_time_" + currentRound.toString()]: Date.now()
    });
    setTimeout(() => {
      nextPage();
    }, config.waitTimeInMilliseconds + config.correctionTime);
    // eslint-disable-next-line
  }, []);

  const settings = {
    width: 320,
    height: 240,
    image: destination.image,
    finishPercent: 75,
    onComplete: () => {
      setFinishDrawing(Date.now());
    }
  };

  return (
    <>
      <Card className="card flex centered-contents">
        <center style={{ flex: 1 }}>
          <p>
            <em>Terwijl wij zoeken...</em>
          </p>
          <p className="attention-text">
            Kras de foto hieronder voor een weetje over
            {` ${destination.name}`}!
          </p>
        </center>
        <div className="centered-contents">
          <ScratchCard
            {...settings}
            setStartDrawing={() => setStartDrawing(Date.now())}
          >
            <p>{destination.shortFact16}</p>
          </ScratchCard>
        </div>
      </Card>
    </>
  );
}
