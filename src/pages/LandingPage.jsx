import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import GlobalState from "../GlobalState";
import cities from "../cities.json";

export default function LandingPage() {
  return (
    <>
      <div className="landingpage__jumbotron">
        <div className="landingpage__jumbotron--content">
          <span>Dé internationale treinreisstunter van Nederland!</span>
        </div>
      </div>
      <Card className="card">
        <p>Op dit moment kun je via ons een reis boeken naar:</p>
        <div className="landingpage__cities">
          {cities.map(city => (
            <CityTile key={city.name} city={city} />
          ))}
        </div>
      </Card>
    </>
  );
}

const CityTile = ({ city }) => {
  const { setDestination, nextPage } = useContext(GlobalState);

  return (
    <div
      onClick={() => {
        setDestination(city);
        nextPage();
      }}
      className="landingpage__city"
      style={{
        backgroundImage: `url(../images/${city.name.toLowerCase()}.jpg`
      }}
    >
      {city.name}
    </div>
  );
};
