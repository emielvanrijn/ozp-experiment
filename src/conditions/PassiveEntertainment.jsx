import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import config from "../config.json";
import DataContext from "../context.js";
import { addData } from "../stitch.js";

export default function PassiveEntertainment({ nextPage }) {
  const { destination, occupation, preference } = useContext(DataContext);

  useEffect(() => {
    addData({
      occupation,
      preference,
      destination: destination.name,
      conditionType: "passive",
      conditionTime: Date.now()
    });
    setTimeout(() => {
      nextPage();
    }, config.waitTimeInMilliseconds + config.correctionTime);
    //eslint-disable-next-line
  }, [nextPage]);

  return (
    <>
      <Card className="Card flex">
        <div className="centered-contents">
          <p>
            <em>Terwijl wij zoeken...</em>
          </p>
          <p>{destination.longFact}</p>
        </div>
      </Card>
    </>
  );
}
