import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";

export default function LandingPage({ nextPage }) {
  useEffect(() => {
    addData({ landing: Date.now() });
  }, []);

  return (
    <>
      <div className="landingpage__jumbotron">
        <div className="landingpage__jumbotron--content">
          <span>Dé internationale treinreizenvergelijker van Nederland!</span>
        </div>
      </div>
      <Card className="card">
        <p>Op dit moment bieden wij aan om te zoeken naar treinreizen naar:</p>
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
        <br />
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
