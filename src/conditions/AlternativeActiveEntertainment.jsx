import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import config from "../config.json";
import { addData } from "../stitch.js";
import { useEffect } from "react";
import ScratchCard from "../components/ScratchCard.jsx";
import DataContext from "../context.js";

export default function AlternativeActiveEntertainment({ setPage }) {
  const { destination } = useContext(DataContext);

  useEffect(() => {
    addData({ conditionType: "active", conditionTime: Date.now() });
    setTimeout(() => {
      setPage("selection");
    }, config.waitTimeInMilliseconds + config.correctionTime);
  }, [setPage]);

  const settings = {
    width: 320,
    height: 240,
    image: destination.image,
    finishPercent: 80
  };

  return (
    <>
      <Card className="card flex">
        <div className="centered-contents">
          <p>
            <em>Terwijl wij zoeken...</em>
            <br />
          </p>
          <p className="attention-text">
            Kras de foto hieronder voor een leuk weetje over
            {destination.name}!
          </p>
          <ScratchCard {...settings}>
            <div className="centered-contents">
              <p>{destination.shortFact16}</p>
            </div>
          </ScratchCard>
        </div>
      </Card>
    </>
  );
}
