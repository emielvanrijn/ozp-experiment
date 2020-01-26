import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function QuestionnairePage({ setPage }) {
  return (
    <>
      <Card className="Card">Questionnaire</Card>
      <Card className="Card flex">Hier komt een vragenformulier</Card>
      <Button
        variant="success"
        className="Button"
        onClick={() => setPage("goodbye")}
      >
        Afronden
      </Button>
    </>
  );
}
