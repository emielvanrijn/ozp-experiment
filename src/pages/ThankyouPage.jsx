import React, { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";
import GlobalState from "../GlobalState";

export default function ThankyouPage() {
  const { nextPage, id } = useContext(GlobalState);

  const [email, setEmail] = useState("");

  useEffect(() => {
    addData({ completed: true });
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Card className="card flex">
        <p>
          Heel erg bedankt voor het deelnemen! Mocht je op de hoogte willen
          blijven van de resultaten van dit onderzoek, dan kun je hier je
          e-mailadres achterlaten!
        </p>
        <p>
          Mocht je geen updates willen ontvangen, dan kun je dit scherm nu
          gewoon afsluiten
        </p>
        <center>
          <p>
            <em>Je e-mailadres zal los van de data verwerkt worden</em>
          </p>
        </center>
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
        onClick={() => {
          addData({ email }, id);
          nextPage();
        }}
        disabled={email === "" ? true : false}
      >
        Aanmelden
      </Button>
    </>
  );
}
