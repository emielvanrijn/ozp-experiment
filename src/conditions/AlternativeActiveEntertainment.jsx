import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import config from "../config.json";
import { addData } from "../stitch.js";
import { useEffect } from "react";
import ScratchCard from "react-scratchcard";
import DataContext from "../context.js";

export default function AlternativeActiveEntertainment({ setPage }) {
  const { destination } = useContext(DataContext);

  useEffect(() => {
    addData({ conditionType: "active", conditionTime: Date.now() });
    // setTimeout(() => {
    //   setPage("selection");
    // }, config.waitTimeInMilliseconds + config.correctionTime);
  }, [setPage]);

  const settings = {
    width: 320,
    height: 240,
    image: destination.image,
    finishPercent: 95
  };

  return (
    <>
      <Card className="card flex">
        <div className="centered-contents">
          <p>
            <em>Terwijl wij zoeken...</em>
            <br />
          </p>
          <p>Kras de foto hieronder voor een leuk weetje!</p>
          <ScratchCard {...settings}>
            <div className="centered-contents">
              <p>
                Deze treinreis naar
                <em> {destination.name} </em>
                leidt tot slechts <strong>50kg </strong>CO
                <sub>2</sub>!
              </p>
              <p>
                Veel minder dan de <strong> 150kg </strong>CO
                <sub>2</sub> als je met het vliegtuig zou reizen!
              </p>
            </div>
          </ScratchCard>
        </div>
      </Card>
    </>
  );
}
