import React from "react";
import Card from "react-bootstrap/Card";
import { addData } from "../stitch";

export default function DealSelectionPage({ setPage }) {
  addData({ deal_selection: Date.now() });
  return (
    <>
      <Card className="card flex" onClick={() => handleClick(setPage, 1)}>
        Deal 1
      </Card>
      <Card className="card flex" onClick={() => handleClick(setPage, 2)}>
        Deal 2
      </Card>
      <Card className="card flex" onClick={() => handleClick(setPage, 3)}>
        Deal 3
      </Card>
    </>
  );
}

function handleClick(setPage, selectedIndex) {
  setPage("confirmation");
}
