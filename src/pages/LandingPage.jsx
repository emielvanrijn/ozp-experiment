import React, { useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";
import DataContext from "../context";

export default function LandingPage() {
  const { nextPage, currentRound, id } = useContext(DataContext);

  useEffect(() => {
    addData({ ["landing_" + currentRound.toString()]: Date.now() }, id);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="landingpage__jumbotron">
        <div className="landingpage__jumbotron--content">
          <span>Dé internationale treinreizenvergelijker van Nederland!</span>
        </div>
      </div>
      <Card className="card">
        <p>
          Op dit moment bieden wij aan om te zoeken naar treinreizen met als
          bestemming:
        </p>
        <div className="landingpage__cities">
          <div
            className="landingpage__city"
            style={{ backgroundImage: "url(../images/berlijn.jpg)" }}
          >
            Berlijn
          </div>
          <div
            className="landingpage__city"
            style={{ backgroundImage: "url(../images/brussel.jpg)" }}
          >
            Brussel
          </div>
          <div
            className="landingpage__city"
            style={{ backgroundImage: "url(../images/londen.jpg)" }}
          >
            Londen
          </div>
          <div
            className="landingpage__city"
            style={{ backgroundImage: "url(../images/parijs.jpg)" }}
          >
            Parijs
          </div>
        </div>
        <div className="spacing"></div>
        <center>
          <em>Waar gaat jouw volgende reis naartoe?</em>
        </center>
        <br />
        <Button variant="success" className="button" onClick={() => nextPage()}>
          Start jouw zoektocht!
        </Button>
      </Card>
    </>
  );
}
