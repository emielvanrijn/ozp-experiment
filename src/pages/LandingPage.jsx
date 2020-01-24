import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function LandingPage({ setPage }) {
  return (
    <>
      <Card className="Card flex">LandingPage</Card>
      <Button
        variant="success"
        className="Button"
        onClick={() => setPage("destination")}
      >
        Starten
      </Button>
    </>
  );
}
