import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";

export default function QuestionnairePage({ setPage }) {
  addData({ questionnaire: Date.now() });
  return (
    <>
      <Card className="card">Questionnaire</Card>
      <Card className="card flex">Hier komt een vragenformulier</Card>
      <Button
        variant="success"
        className="button"
        onClick={() => setPage("thankyou")}
      >
        Afronden
      </Button>
    </>
  );
}
