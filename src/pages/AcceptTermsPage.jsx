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
      setExistsInDB(await setSession());
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
        <p>Bedankt dat je deel wilt nemen aan dit experiment!</p>
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
