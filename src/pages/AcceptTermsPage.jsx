import React, { useContext, useEffect } from "react";
import DataContext from "../context";
import { initDB } from "../stitch";

export default function AcceptTermsPage() {
  const { setCondition, nextPage, setId } = useContext(DataContext);

  useEffect(() => {
    const setup = async () => {
      const tempId = Date.now();
      await initDB(tempId);
      setId(tempId);
      // await getCounter().then(x => {
      //   setCounter(x - 1); // -1 omdat eerst eigen entry gemaakt wordt
      //   setCondition((x - 1) % 3);
      // });
    };
    setup();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="flex">
        <p>Bedankt dat je mij wilt helpen met mijn experiment!</p>
        <p>
          In dit experiment zul je <strong>tweemaal</strong> (fictief) een
          treinreis boeken naar een europese stad.
        </p>
      </div>
      <p>
        <strong>N.B.: </strong>Indien er bovenin geen adresbalk zichtbaar is (en
        hierdoor onderin nu een gele balk zichtbaar is), swipe een paar keer op
        en neer totdat de adresbalk verschijnt en de gele balk verdwijnt. Hierna
        zou scrollen niet meer mogelijk moeten zijn.
      </p>
      <button
        style={{ marginBottom: "0.5rem" }}
        onClick={() => {
          setCondition(0);
          nextPage();
        }}
      >
        Controle
      </button>
      <button
        style={{ marginBottom: "0.5rem" }}
        onClick={() => {
          setCondition(1);
          nextPage();
        }}
      >
        Passief
      </button>
      <button
        onClick={() => {
          setCondition(2);
          nextPage();
        }}
      >
        Actief
      </button>
    </>
  );
}
