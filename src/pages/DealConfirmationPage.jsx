import React, { useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";
import GlobalState from "../GlobalState";
import { getTimeString } from "../helpers";

export default function DealConfirmationPage() {
  const { nextPage, currentRound, deal, destination, id } = useContext(
    GlobalState
  );

  useEffect(() => {
    addData(
      { ["deal_confirmation_" + currentRound.toString()]: Date.now() },
      id
    );
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Card className="card flex centered-contents">
        <p>Je hebt gekozen voor de deal:</p>
        <DealCard deal={deal} destination={destination} />
        <center>
          <p>
            Is dit juist? Boek dan direct jouw treinreis via de button
            hieronder!
          </p>
        </center>
      </Card>
      <Button variant="success" className="button" onClick={() => nextPage()}>
        Boek treinreis
      </Button>
    </>
  );
}

function DealCard({ deal, destination }) {
  return (
    <Card className="card" style={{ width: "100%" }}>
      <div className="deal-grid" style={{ padding: 0 }}>
        <div className="deal-title">
          <span>{deal.title}</span>
        </div>
        <div
          className={`deal-content-right ${deal.price_factor === 0.8 &&
            "deal-best"}`}
        >
          €{destination.baseprice * deal.price_factor + ",00"}
        </div>
        <div className={`${deal.traveltime_factor === 0.8 && "deal-best"}`}>
          {getTimeString(destination.traveltime * deal.traveltime_factor)}
        </div>
        <div
          className={`deal-content-right ${deal.co2_factor === 0.8 &&
            "deal-best"}`}
        >
          {destination.co2train * deal.co2_factor}kg CO<sub>2</sub>
        </div>
      </div>
    </Card>
  );
}
