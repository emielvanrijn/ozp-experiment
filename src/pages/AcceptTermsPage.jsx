import React, { useContext, useEffect, useState } from "react";
import GlobalState from "../GlobalState";
import { setId, addData, setSession, getCounter } from "../stitch";

export default function AcceptTermsPage() {
  const { setCondition, nextPage, counter, setCounter } = useContext(
    GlobalState
  );
  const [existsInDB, setExistsInDB] = useState(false);

  useEffect(() => {
    const setup = async () => {
      await setId();
      addData({ accept_terms: Date.now() });
      setExistsInDB(await setSession());
      await getCounter().then(x => {
        setCounter(x - 1); // -1 omdat eerst eigen entry gemaakt wordt
        setCondition((x - 1) % 3);
      });
    };
    setup();
    //eslint-disable-next-line
  }, []);

  return existsInDB === false ? (
    <>
      <div className="flex">
        <p>Bedankt dat je deel wilt nemen aan dit experiment!</p>
        <p>
          Er zijn al {counter.toString()} mensen die dit onderzoek hebben
          gedaan!
        </p>
        <p>
          Het onderzoek zal maximaal 3 minuten in beslag nemen. We vragen je om
          alle informatie die tijdens het experiment gevraagd wordt naar{" "}
          <em>waarheid</em> in te vullen
        </p>
      </div>
      <button
        onClick={() => {
          nextPage();
        }}
      >
        Ga door
      </button>
      {/* <button
        onClick={() => {
          setCondition(0);
          nextPage();
        }}
      >
        Controle
      </button>
      <button
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
      </button> */}
    </>
  ) : (
    <div>
      Volgens onze gegevens heb je dit experiment al eens gedaan, heel erg
      bedankt hiervoor!
    </div>
  );
}
