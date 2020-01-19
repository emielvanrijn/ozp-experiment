import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function LandingPage({ setPage }) {
  const LandingPageText = `
    Bedankt dat je mij wilt helpen met mijn experiment!
  `;

  return (
    <>
      <Card className="Card">
        <p>{LandingPageText}</p>
      </Card>
      <Button
        variant="success"
        className="Button"
        onClick={() => setPage("destination")}
      >
        Ga door met het onderzoek
      </Button>
    </>
  );
}
