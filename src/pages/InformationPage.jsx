import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";

export default function InformationPage({ setPage }) {
  addData({ information: Date.now() });
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
