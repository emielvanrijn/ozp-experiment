import React, { useContext, useEffect, useState } from "react";
import GlobalState from "../GlobalState";
import { setId, setSession, getCounter, addData } from "../stitch";
import { deviceDetect } from "react-device-detect";

export default function AcceptTermsPage() {
  const { nextPage, setCounter, setCondition } = useContext(GlobalState);
  const [existsInDB, setExistsInDB] = useState(false);

  useEffect(() => {
    const setup = async () => {
      await setId();
      // setExistsInDB(await setSession());
      getCounter().then(x => {
        setCounter(x);
        setCondition(x % 3);
      });
      const device = deviceDetect();
      addData({ device, isMobile: device.isMobile });
    };
    setup();
    //eslint-disable-next-line
  }, []);

  return existsInDB === false ? (
    <>
      <div className="flex">
        <p>Hey hallo daar!</p>
        <p>
          Dank voor je interesse in dit experiment! Een overweldigende 500(!)
          proefpersonen hebben hieraan deelgenomen! Fantastisch! Middels
          onderstaande buttons kun je nu alle drie de geteste condities
          doorlopen :). Data wordt niet meer gelogd! Binnenkort komen de code
          van dit experiment én de verzamelde data (excl. e-mailadressen)
          publiek beschikbaar!
        </p>
      </div>
      <button
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
      </button>
    </>
  ) : (
    <div>
      Volgens onze gegevens heb je dit experiment al eens gedaan, heel erg
      bedankt hiervoor!
    </div>
  );
}
