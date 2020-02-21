import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import config from "../config.json";
import DataContext from "../context.js";
import { addData } from "../stitch.js";

export default function PassiveEntertainment() {
  const {
    destination,
    occupation,
    preference,
    nextPage,
    currentRound,
    id
  } = useContext(DataContext);

  useEffect(() => {
    addData(
      {
        ["occupation_" + currentRound.toString()]: occupation,
        ["preference_" + currentRound.toString()]: preference,
        ["destination_" + currentRound.toString()]: destination.name,
        ["condition_type_" + currentRound.toString()]: "passive",
        ["condition_time_" + currentRound.toString()]: Date.now()
      },
      id
    );
    setTimeout(() => {
      nextPage();
    }, config.waitTimeInMilliseconds + config.correctionTime);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Card className="Card flex">
        <div className="centered-contents">
          <p>
            <em>Terwijl wij zoeken...</em>
          </p>
          <p>{destination.longFact44}</p>
        </div>
      </Card>
    </>
  );
}
