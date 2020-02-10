import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";

export default function ThankyouPage({ setPage }) {
  const [email, setEmail] = useState("");
  addData({ thankyou: Date.now() });
  return (
    <>
      <Card className="card">Hartelijk dank!</Card>
      <Card className="card flex">
        <p>
          Heel erg bedankt voor het deelnemen! Mocht je op de hoogte willen
          blijven van de resultaten van dit onderzoek, dan kun je hier je
          e-mailadres achterlaten!
        </p>
        <input
          className="email-input"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Card>
      <Button
        variant="success"
        className="button"
        onClick={() => setPage("subscribed")}
        disabled={email === "" ? true : false}
      >
        Aanmelden
      </Button>
    </>
  );
}
