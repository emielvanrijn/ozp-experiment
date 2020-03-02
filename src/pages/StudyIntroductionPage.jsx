import React, { useContext } from "react";
import GlobalState from "../GlobalState";

export default function StudyIntroductionPage() {
  const { nextPage, currentRound } = useContext(GlobalState);

  return (
    <div className="intro">
      <div className="flex">
        {currentRound === 1 ? (
          <>
            <center style={{ color: "red" }}>
              <p>Lees a.u.b. de volgende informatie volledig!</p>
            </center>
            <p>
              In dit experiment zul je <em>tweemaal</em> een treinreis boeken
              naar een Europese stad via de website Treinreisstunter.nl. Deze
              website zoekt op basis van twee criteria verschillende websites af
              naar de beste deals, die je ook meteen via de website kunt boeken.
            </p>
            <p>Eerst vragen we je om een treinreis te boeken naar:</p>
            <center>
              <p>
                <strong>Parijs</strong>
              </p>
            </center>
          </>
        ) : (
          <>
            <p>
              We zijn al op de helft! Nu vragen we je om nog een keer een reis
              te boeken, dit keer naar:{" "}
            </p>
            <center>
              <p>
                <strong>Berlijn</strong>
              </p>
            </center>
          </>
        )}
      </div>
      <button onClick={() => nextPage()}>Starten</button>
    </div>
  );
}
