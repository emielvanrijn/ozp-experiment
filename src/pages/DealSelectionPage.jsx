import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { addData } from "../stitch";
import deals from "../deals.json";
import DataContext from "../context";
import { getTimeString } from "../helpers";

export default function DealSelectionPage() {
  const {
    preference,
    destination,
    startDrawing,
    finishDrawing,
    currentRound,
    id
  } = useContext(DataContext);

  useEffect(() => {
    addData(
      {
        ["start_drawing_" + currentRound.toString()]: startDrawing,
        ["finish_drawing_" + currentRound.toString()]: finishDrawing,
        ["deal_selection_" + currentRound.toString()]: Date.now()
      },
      id
    );
    //eslint-disable-next-line
  }, []);

  const preferredDeal = deals.filter(deal => deal.type === preference)[0];
  const remainingDeals = deals.filter(deal => deal.type !== preference);

  return (
    <>
      <h5>Voorkeursdeal</h5>
      <DealCard deal={preferredDeal} destination={destination} />
      <div className="spacing"></div>
      <h5>Andere deals</h5>
      {remainingDeals.map((deal, index) => (
        <DealCard key={index} deal={deal} destination={destination} />
      ))}
    </>
  );
}

function DealCard({ deal, destination }) {
  const { setDeal, nextPage } = useContext(DataContext);

  function handleClick(nextPage) {
    setDeal(deal);
    nextPage();
  }

  return (
    <Card className="card deal" onClick={() => handleClick(nextPage)}>
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
      <div className="chevron__container">
        <img
          className="chevron__icon"
          src="/images/chevron.png"
          alt="chevron"
        />
      </div>
    </Card>
  );
}
