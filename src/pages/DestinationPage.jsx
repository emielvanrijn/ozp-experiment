import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import DataContext from "../context";

export default function DestinationPage({ setPage }) {
  const { setDestination } = useContext(DataContext);
  return (
    <>
      <Card
        className="Card"
        onClick={() => handleClick("Berlijn", setPage, setDestination)}
      >
        Berlijn
      </Card>
      <Card className="Card">Brussel</Card>
      <Card className="Card">Parijs</Card>
      <Card className="Card">Londen</Card>
    </>
  );
}

function handleClick(destination, setPage, setDestination) {
  setPage("detail");
  setDestination(destination);
}
