import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import DataContext from "../context";
import { addData } from "../stitch";
import cities from "../cities.json";

export default function DestinationPage({ setPage }) {
  const { setDestination } = useContext(DataContext);
  addData({ destination: Date.now() });
  return (
    <>
      {cities.map((city, index) => (
        <CityCard
          key={index}
          city={city}
          setPage={setPage}
          setDestination={setDestination}
        />
      ))}
    </>
  );
}

function CityCard({ city, setPage, setDestination }) {
  return (
    <Card
      className="card city"
      onClick={() => handleClick(city, setPage, setDestination)}
    >
      <div className="city-info">
        <div>
          <span className="city-name">{city.name}</span>
          <em> ({city.distance}km)</em>
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
      <div className="right-chevron">></div>
    </Card>
  );
}

function handleClick(city, setPage, setDestination) {
  setPage("information");
  setDestination(city);
}
