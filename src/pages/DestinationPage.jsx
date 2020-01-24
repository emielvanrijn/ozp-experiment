import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import DataContext from "../context";

export default function DestinationPage({ setPage }) {
  const { setDestination } = useContext(DataContext);
  return (
    <>
      <Card
        className="Card flex"
        onClick={() => handleClick("Berlijn", setPage, setDestination)}
      >
        Berlijn
      </Card>
      <Card className="Card flex">Brussel</Card>
      <Card className="Card flex">Parijs</Card>
      <Card className="Card flex">Londen</Card>
    </>
  );
}

function handleClick(destination, setPage, setDestination) {
  setPage("information");
  setDestination(destination);
}
