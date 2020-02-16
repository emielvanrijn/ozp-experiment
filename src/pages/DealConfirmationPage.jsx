import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";

export default function DealConfirmationPage({ nextPage }) {

  useEffect(() => {
    addData({ deal_confirmation: Date.now() });
  }, [])



  return (
    <>
      <Card className="card flex">Geselecteerde deal</Card>
      <Button
        variant="success"
        className="button"
        onClick={() => nextPage()}
      >
        Bestel ticket
      </Button>
    </>
  );
}
