import React from "react";
import Card from "react-bootstrap/Card";

export default function DealSelectionPage({ setPage }) {
  return (
    <>
      <Card className="Card flex" onClick={() => handleClick(setPage, 1)}>
        Deal 1
      </Card>
      <Card className="Card flex" onClick={() => handleClick(setPage, 2)}>
        Deal 2
      </Card>
      <Card className="Card flex" onClick={() => handleClick(setPage, 3)}>
        Deal 3
      </Card>
    </>
  );
}

function handleClick(setPage, selectedIndex) {
  setPage("confirmation");
}
