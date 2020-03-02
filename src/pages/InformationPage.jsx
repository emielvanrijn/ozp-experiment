import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import GlobalState from "../GlobalState";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function InformationPage() {
  const {
    occupation,
    setOccupation,
    preference,
    setPreference,
    nextPage,
    setInformation
  } = useContext(GlobalState);

  useEffect(() => {
    setInformation(Date.now());
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Card className="card flex">
        <p style={{ marginBottom: "1.5rem" }}>
          Om de beste deal voor jou te kunnen vinden, hebben we de volgende
          informatie van je nodig...
        </p>
        <p>Ik ben:</p>
        <div style={{ marginBottom: "1.5rem" }}>
          <ButtonGroup style={{ width: "100%" }}>
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
                "selection-button " +
                (occupation === "student" ? "selected" : "")
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
        </div>
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
        Vind mijn beste deal!
      </Button>
    </>
  );
}
