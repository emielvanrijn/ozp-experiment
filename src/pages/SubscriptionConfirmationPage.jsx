import React from "react";
import Card from "react-bootstrap/Card";
import { addData } from "../stitch";

export default function SubscriptionConfirmationPage() {
  addData({ subscription: Date.now() });
  return (
    <>
      <Card className="card">Aangemeld!</Card>
      <Card className="card flex">Je bent nu aangemeld!</Card>
    </>
  );
}
