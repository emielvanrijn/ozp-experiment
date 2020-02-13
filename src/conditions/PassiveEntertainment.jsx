import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Spinner from "react-bootstrap/Spinner";
import config from "../config.json";
import DataContext from "../context.js";
import { addData } from "../stitch.js";

export default function PassiveEntertainment({ setPage }) {
  const { destination } = useContext(DataContext);

  //const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  useEffect(() => {
    addData({ conditionType: "passive", conditionTime: Date.now() });
    setTimeout(() => {
      // setIsButtonEnabled(true);
      setPage("selection");
    }, config.waitTimeInMilliseconds + config.correctionTime);
  }, [setPage]);

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
