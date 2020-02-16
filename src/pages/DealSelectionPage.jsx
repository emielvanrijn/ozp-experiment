import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { addData } from "../stitch";
import deals from "../deals.json";
import DataContext from "../context";
import { getTimeString } from "../helpers";

export default function DealSelectionPage({ nextPage }) {
  const { preference, destination } = useContext(DataContext);

  useEffect(() => {
    addData({ deal_selection: Date.now() });
  }, [])


  const preferredDeal = deals.filter(deal => deal.type === preference)[0];
  const remainingDeals = deals.filter(deal => deal.type !== preference);

  return (
    <>
      <p>Voorkeursdeal</p>
      <DealCard
        deal={preferredDeal}
        destination={destination}
        nextPage={nextPage}
      />
      <p>Andere deals</p>
      {remainingDeals.map((deal, index) => (
        <DealCard
          key={index}
          deal={deal}
          destination={destination}
          nextPage={nextPage}
        />
      ))}
    </>
  );
}

function DealCard({ deal, destination, nextPage }) {
  return (
    <Card className="card deal" onClick={() => handleClick(nextPage, 1)}>
      <h5>{deal.title}</h5>
      Prijs: €{destination.baseprice * deal.price_factor + ",00"}
      <br />
      Reistijd:
      {" " + getTimeString(destination.traveltime * deal.traveltime_factor)}
      <br />
      <p>
        CO<sub>2</sub> uitstoot: {destination.co2train * deal.co2_factor}
      </p>
    </Card>
  );
}

function handleClick(nextPage, selectedIndex) {
  nextPage();
}
