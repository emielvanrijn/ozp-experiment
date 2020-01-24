import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import config from "../config.json";

export default function ActiveEntertainment({ setPage }) {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  setTimeout(() => {
    setIsButtonEnabled(true);
  }, config.waitTimeInMilliseconds);

  return (
    <>
      <Card className="Card flex">Passive Entertainment Condition</Card>
      <Button
        disabled={!isButtonEnabled}
        variant="success"
        className="Button"
        onClick={() => setPage("information")}
      >
        {isButtonEnabled ? (
          "Ga naar resultaten"
        ) : (
          <Spinner animation="border" />
        )}
      </Button>
    </>
  );
}
