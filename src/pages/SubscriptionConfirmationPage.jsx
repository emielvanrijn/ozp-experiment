import React from "react";
import Card from "react-bootstrap/Card";
import { addData } from "../stitch";

export default function SubscriptionConfirmationPage() {
  addData({ subscription: Date.now() });
  return (
    <>
      <Card className="Card">Aangemeld!</Card>
      <Card className="Card flex">Je bent nu aangemeld!</Card>
    </>
  );
}
