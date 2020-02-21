import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import DataContext from "../context";
import { addData } from "../stitch";
import cities from "../cities.json";
import { getTimeString } from "../helpers";

export default function DestinationPage() {
  const { setDestination, nextPage, currentRound, id } = useContext(
    DataContext
  );

  useEffect(() => {
    addData({ ["destination_" + currentRound.toString()]: Date.now() }, id);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {cities.map((city, index) => (
        <CityCard
          key={index}
          city={city}
          nextPage={nextPage}
          setDestination={setDestination}
        />
      ))}
    </>
  );
}

function CityCard({ city, nextPage, setDestination }) {
  return (
    <Card
      className="card city"
      onClick={() => handleClick(city, nextPage, setDestination)}
    >
      <div className="city-info">
        <div>
          <span className="city-name">{city.name} </span>
          <em className="city-distance">
            ({city.distance}km, {getTimeString(city.traveltime)})
          </em>
        </div>
        <div className="price-listing">
          <div>
            <s>€{city.baseprice},00</s>
          </div>
          <div className="new-price">
            <em>vanaf €{city.baseprice * 0.8},00!</em>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src={city.image} alt="city" className="city-image" />
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

function handleClick(city, nextPage, setDestination) {
  nextPage();
  setDestination(city);
}
