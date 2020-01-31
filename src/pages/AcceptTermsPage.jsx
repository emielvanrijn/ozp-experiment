import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import DataContext from "../context";

export default function AcceptTermsPage({ setPage }) {
  const { counter } = useContext(DataContext);
  return (
    <>
      <Card className="card flex">
        <p>Bedankt dat je mij wilt helpen met mijn experiment!</p>
        <p>
          In dit experiment zul je (fictief) een treinreis boeken naar een
          europese stad.
        </p>
        <p>(verdere terms and conds. voor onderzoek)</p>
        <p>Aantal deelnemers tot nu toe: {counter}</p>
      </Card>
      <Button
        variant="success"
        className="button"
        onClick={() => setPage("landing")}
      >
        Accepteer en ga door met onderzoek
      </Button>
    </>
  );
}
