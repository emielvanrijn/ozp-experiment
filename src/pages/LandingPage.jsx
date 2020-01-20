import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function LandingPage({ setPage }) {
  return (
    <>
      <Card className="Card">
        <p>Bedankt dat je mij wilt helpen met mijn experiment!</p>
        <p>
          In dit experiment zul je (fictief) een treinreis boeken naar een
          europese stad.
        </p>
      </Card>
      <Button
        variant="success"
        className="Button"
        onClick={() => setPage("destination")}
      >
        Ga door met het onderzoek
      </Button>
    </>
  );
}
