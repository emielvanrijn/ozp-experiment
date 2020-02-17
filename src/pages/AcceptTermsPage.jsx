import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import DataContext from "../context";

export default function AcceptTermsPage({ nextPage }) {
  const { counter } = useContext(DataContext);
  return (
    <>
      <Card className="card flex">
        <p>Bedankt dat je mij wilt helpen met mijn experiment!</p>
        <p>
          In dit experiment zul je (fictief) een treinreis boeken naar een
          europese stad.
        </p>
        <p>[VERDERE TERMS EN COND.]</p>
      </Card>
      <Card>Aantal deelnemers tot nu toe: {counter}</Card>
      <Button variant="success" className="button" onClick={nextPage}>
        Accepteer en ga door met onderzoek
      </Button>
    </>
  );
}
