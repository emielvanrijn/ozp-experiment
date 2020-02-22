import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addData } from "../stitch";
import DataContext from "../context";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function InformationPage() {
  const {
    occupation,
    setOccupation,
    preference,
    setPreference,
    nextPage,
    currentRound,
    id
  } = useContext(DataContext);

  useEffect(() => {
    addData({ ["information_" + currentRound.toString()]: Date.now() }, id);
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Card className="card flex" style={{ padding: "0.5rem" }}>
        <p>
          Om de beste deal voor jou te kunnen vinden, hebben we de volgende
          informatie van je nodig...
        </p>
        <div className="spacing"></div>
        <p>Ik ben:</p>
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
        <div className="spacing"></div>
        <div className="spacing"></div>
        <p>Ik geef de meeste voorkeur aan:</p>
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
      </Card>
      <Button
        variant="success"
        className="button"
        onClick={() => nextPage()}
        disabled={!(occupation && preference)}
      >
        Zoeken
      </Button>
    </>
  );
}
