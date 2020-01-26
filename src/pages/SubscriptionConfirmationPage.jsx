import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function SubscriptionConfirmationPage({ setPage }) {
  return (
    <>
      <Card className="Card">Aangemeld!</Card>
      <Card className="Card flex">Je bent nu aangemeld!</Card>
    </>
  );
}
