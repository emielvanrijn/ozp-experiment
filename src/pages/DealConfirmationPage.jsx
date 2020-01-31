import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";

export default function DealConfirmationPage({ setPage }) {
  addData({ deal_confirmation: Date.now() });
  return (
    <>
      <Card className="card flex">Geselecteerde deal</Card>
      <Button
        variant="success"
        className="button"
        onClick={() => setPage("questionnaire")}
      >
        Bestel ticket
      </Button>
    </>
  );
}
