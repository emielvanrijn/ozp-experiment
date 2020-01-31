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
    setTimeout(() => {
      setPage("selection");
    }, config.waitTimeInMilliseconds + config.correctionTime);
  }, [setPage]);

  const settings = {
    width: 320,
    height: 240,
    image: destination.image,
    finishPercent: 100,
    onComplete: () => console.log("The card is now clear!")
  };

  return (
    <>
      <Card className="card flex">
        <div className="centered-contents">
          <p>
            <em>Terwijl wij zoeken...</em>
            <br />
          </p>
          <p>Kras voor een leuk weetje!</p>
          <ScratchCard {...settings}>
            <div className="centered-contents">
              <p>
                Wist je dat een retour naar
                <strong>
                  <em> {destination.name} </em>
                </strong>
                met het vliegtuig zou leiden tot een uitstoot van
                <strong> 150kg </strong>CO
                <sub>2</sub>?
              </p>
              <p>
                Met de trein is dit slechts <strong>50kg </strong>CO
                <sub>2</sub>!
              </p>
            </div>
          </ScratchCard>
        </div>
      </Card>
    </>
  );
}
