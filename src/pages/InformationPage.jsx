import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function InformationPage({ setPage }) {
  return (
    <>
      <Card className="Card">InformationPage</Card>
      <Button
        variant="success"
        className="Button"
        onClick={() => setPage("destination")}
      >
        Zoeken
      </Button>
    </>
  );
}
