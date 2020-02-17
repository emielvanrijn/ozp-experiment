import React, { useContext } from "react";
import DataContext from "../context";

export default function AcceptTermsPage({ nextPage }) {
  const { counter } = useContext(DataContext);
  return (
    <>
      <div className="flex">
        <p>Bedankt dat je mij wilt helpen met mijn experiment!</p>
        <p>
          In dit experiment zul je (fictief) een treinreis boeken naar een
          europese stad.
        </p>
        <p>[VERDERE TERMS EN COND.]</p>
      </div>
      <div>Aantal deelnemers tot nu toe: {counter}</div>
      <br />
      <button onClick={nextPage}>Accepteer en ga door met onderzoek</button>
    </>
  );
}
