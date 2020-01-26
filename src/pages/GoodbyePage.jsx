import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function GoodbyePage({ setPage }) {
  return (
    <>
      <Card className="Card">Hartelijk dank!</Card>
      <Card className="Card flex">
        Heel erg bedankt voor het deelnemen! Mocht je op de hoogte willen
        blijven van de resultaten van dit onderzoek, dan kun je hier je
        e-mailadres achterlaten!
      </Card>
      <Button
        variant="success"
        className="Button"
        onClick={() => setPage("subscribed")}
      >
        Aanmelden
      </Button>
    </>
  );
}
