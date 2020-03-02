import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import GlobalState from "../GlobalState";

export default function InformationPage() {
  const { nextPage } = useContext(GlobalState);
  return (
    <>
      <Card className="card flex">
        <p>
          Normaliter zou je hier je betaalgegevens invullen, maar dit doen we
          tijdens dit experiment niet.
        </p>
      </Card>
      <Button variant="primary" className="button" onClick={() => nextPage()}>
        Verder naar de vragenlijst
      </Button>
    </>
  );
}
