import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function InformationPage({ setPage }) {
  return (
    <>
      <Card className="Card">Destination</Card>
      <Card className="Card flex">Information Form</Card>
      <Button
        variant="success"
        className="Button"
        onClick={() => setPage("condition")}
      >
        Zoeken
      </Button>
    </>
  );
}
