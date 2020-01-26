import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function DealConfirmationPage({ setPage }) {
  return (
    <>
      <Card className="Card flex">Geselecteerde deal</Card>
      <Button
        variant="success"
        className="Button"
        onClick={() => setPage("questionnaire")}
      >
        Bestel ticket
      </Button>
    </>
  );
}
