import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { addData } from "../stitch";
import deals from "../deals.json";
import GlobalState from "../GlobalState";
import { getTimeString } from "../helpers";

export default function DealSelectionPage() {
  const {
    preference,
    destination,
    startDrawing,
    finishDrawing,
    currentRound,
    id
  } = useContext(GlobalState);

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
    <div className="deal-selection">
      <h5>Voorkeursdeal</h5>
      <DealCard
        deal={preferredDeal}
        style={{ marginBottom: "2.5rem" }}
        destination={destination}
      />
      <h5>Andere deals</h5>
      {remainingDeals.map((deal, index) => (
        <DealCard key={index} deal={deal} destination={destination} />
      ))}
    </div>
  );
}

function DealCard({ deal, destination, style }) {
  const { setDeal, nextPage } = useContext(GlobalState);

  function handleClick(nextPage) {
    setDeal(deal);
    nextPage();
  }

  return (
    <Card className="card deal" style={style}>
      <div className="deal-grid">
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
      <div className="book-button">
        <button className="button" onClick={() => handleClick(nextPage)}>
          Boek
        </button>
      </div>
    </Card>
  );
}
