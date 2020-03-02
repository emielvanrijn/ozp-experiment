import React, { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";
import GlobalState from "../GlobalState";

export default function ThankyouPage() {
  const { nextPage } = useContext(GlobalState);

  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    addData({ completed: true });
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Card className="card flex">
        <div className="scrollable flex">
          <p>Heel erg bedankt voor het deelnemen!</p>
          <p>
            Op- of aanmerkingen met betrekking tot dit experiment? Laat hier je
            reactie achter
          </p>
          <input
            style={{ width: "100%" }}
            className="email-input"
            type="text"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <hr />
          <p>Op de hoogte blijven van de resultaten? Vul je e-mail in!</p>
          <input
            style={{ width: "100%" }}
            className="email-input"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
      </Card>
      <Button
        variant="success"
        className="button"
        onClick={() => {
          addData({ email, comment });
          nextPage();
        }}
      >
        Verzenden
      </Button>
    </>
  );
}
