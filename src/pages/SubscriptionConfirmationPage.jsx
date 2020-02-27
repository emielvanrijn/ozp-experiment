import React, { useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import { addData } from "../stitch";
import GlobalState from "../GlobalState";

export default function SubscriptionConfirmationPage() {
  const { id } = useContext(GlobalState);

  useEffect(() => {
    addData({ subscription: Date.now() }, id);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Card className="card flex">
        <p>Je bent aangemeld om updates te ontvangen!</p>
        <p>Je kunt nu dit scherm sluiten.</p>
      </Card>
    </>
  );
}
