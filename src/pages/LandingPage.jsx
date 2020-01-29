import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";

export default function LandingPage({ setPage }) {
  addData({ landing: Date.now() });
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
