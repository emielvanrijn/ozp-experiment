import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";
import { useContext } from "react";
import DataContext from "../context";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState } from "react";

export default function InformationPage({ setPage }) {
  const { destination } = useContext(DataContext);
  const [occupation, setOccupation] = useState(null);
  const [preference, setPreference] = useState(null);
  addData({ information: Date.now() });
  return (
    <>
      <Card className="card title">Treinreis naar {destination.name}</Card>
      <Card className="card flex">
        <p>
          Om de beste deal voor jou te kunnen vinden, hebben we de volgende
          informatie van je nodig...
        </p>
        Ik ben:
        <ButtonGroup>
          <Button
            className={
              "selection-button " +
              (occupation === "scholier" ? "selected" : "")
            }
            onClick={() => setOccupation("scholier")}
          >
            Scholier
          </Button>
          <Button
            className={
              "selection-button " + (occupation === "student" ? "selected" : "")
            }
            onClick={() => setOccupation("student")}
          >
            Student
          </Button>
          <Button
            className={
              "selection-button " +
              (occupation === "werkende" ? "selected" : "")
            }
            onClick={() => setOccupation("werkende")}
          >
            Werkende
          </Button>
        </ButtonGroup>
        <br />
        Ik geef de meeste voorkeur aan:
        <ButtonGroup>
          <Button
            className={
              "selection-button " +
              (preference === "goedkoop" ? "selected" : "")
            }
            onClick={() => setPreference("goedkoop")}
          >
            Goedkoop
          </Button>
          <Button
            className={
              "selection-button " + (preference === "milieu" ? "selected" : "")
            }
            onClick={() => setPreference("milieu")}
          >
            Milieu
          </Button>
          <Button
            className={
              "selection-button " +
              (preference === "reistijd" ? "selected" : "")
            }
            onClick={() => setPreference("reistijd")}
          >
            Reistijd
          </Button>
        </ButtonGroup>
        <br />
        <p>[HIER KOMT NOG EEN CRITERIUM]</p>
      </Card>
      <Button
        variant="success"
        className="button"
        onClick={() => setPage("condition")}
      >
        Zoeken
      </Button>
    </>
  );
}
