import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function AcceptTermsPage({ setPage }) {
  return (
    <>
      <Card className="Card flex">
        <p>Bedankt dat je mij wilt helpen met mijn experiment!</p>
        <p>
          In dit experiment zul je (fictief) een treinreis boeken naar een
          europese stad.
        </p>
      </Card>
      <Button
        variant="success"
        className="Button"
        onClick={() => setPage("landing")}
      >
        Accepteer en ga door met onderzoek
      </Button>
    </>
  );
}
