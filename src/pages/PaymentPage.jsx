import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";
import GlobalState from "../GlobalState";

export default function InformationPage() {
  const { nextPage, currentRound, deal } = useContext(GlobalState);

  useEffect(() => {
    addData({
      ["payment_" + currentRound.toString()]: Date.now(),
      deal: deal.title
    });
    //eslint-disable-next-line
  }, []);

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
