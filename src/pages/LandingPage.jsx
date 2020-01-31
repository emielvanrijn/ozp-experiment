import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";

export default function LandingPage({ setPage }) {
  addData({ landing: Date.now() });
  return (
    <>
      <Card className="card title">TreinReisVergelijker.nl</Card>
      <Card className="card flex">
        <p>
          Welkom bij dé internationale treinreizenvergelijker van Nederland!
        </p>
        <p>
          Na het selecteren van jouw bestemming zoeken wij de drie beste deals,
          speciaal op jou afgestemd!
        </p>
        <p>
          Op dit moment bieden wij zoeken naar treinreizen met als bestemming:
          Berlijn, Brussel, Londen en Parijs.
        </p>
        <br />
        <br />
        <p>Waar gaat jouw volgende reis naartoe?</p>
      </Card>
      <Button
        variant="success"
        className="button"
        onClick={() => setPage("destination")}
      >
        Starten
      </Button>
    </>
  );
}
