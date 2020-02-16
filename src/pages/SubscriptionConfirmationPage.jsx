import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { addData } from "../stitch";

export default function SubscriptionConfirmationPage() {

  useEffect(() => {
    addData({ subscription: Date.now() });
  }, [])

  return (
    <>
      <Card className="card flex">Je bent nu aangemeld!</Card>
    </>
  );
}
