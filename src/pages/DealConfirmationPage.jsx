import React, { useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";
import DataContext from "../context";
import { getTimeString } from "../helpers";

export default function DealConfirmationPage() {
  const { nextPage, currentRound, deal, destination, id } = useContext(
    DataContext
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
        <div className="spacing"></div>
        <DealCard deal={deal} destination={destination} />
        <div className="spacing"></div>
        <center>
          <p>Is dit juist? Bestel dan je ticket via onderstaande button.</p>
        </center>
      </Card>
      <Button variant="success" className="button" onClick={() => nextPage()}>
        Bestel ticket
      </Button>
    </>
  );
}

function DealCard({ deal, destination }) {
  return (
    <Card className="card deal">
      <div>
        <h6>{deal.title}</h6>
        <div>
          <div>Prijs: €{destination.baseprice * deal.price_factor + ",00"}</div>
          <div>
            Reistijd:
            {" " +
              getTimeString(destination.traveltime * deal.traveltime_factor)}
          </div>
          <div>
            CO<sub>2</sub> uitstoot: {destination.co2train * deal.co2_factor}kg
          </div>
        </div>
      </div>
    </Card>
  );
}
