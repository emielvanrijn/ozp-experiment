import React, { useState, useEffect } from "react";
import DataContext from "./context";
import PageRouter from "./PageRouter";
import "./App.scss";
import { /*getCounter*/ initDB } from "./stitch";

function App() {
  const [destination, setDestination] = useState(null);
  const [counter /*setCounter*/] = useState(12); //TODO: terugzetten naar null
  const [condition /*setCondition*/] = useState(2); //TODO: terugzetten naar null
  const [occupation, setOccupation] = useState(null);
  const [preference, setPreference] = useState(null);
  const [startDrawing, setStartDrawing] = useState(null);
  const [finishDrawing, setFinishDrawing] = useState(null);
  const [currentPage, setPage] = useState(0);

  const value = {
    currentPage,
    setPage,
    destination,
    setDestination,
    condition,
    counter,
    occupation,
    setOccupation,
    preference,
    setPreference,
    startDrawing,
    setStartDrawing,
    finishDrawing,
    setFinishDrawing
  };

  useEffect(() => {
    const setup = async () => {
      await initDB();
      // TODO: terugzetten naar dynamisch
      // await getCounter().then(x => {
      //   setCounter(x - 1); // -1 omdat eerst eigen entry gemaakt wordt
      //   setCondition((x - 1) % 3);
      // });
    };
    setup();
  }, []);

  return (
    <DataContext.Provider value={value}>
      <div className={currentPage === 0 ? "intro" : "app"}>
        <PageRouter />
      </div>
    </DataContext.Provider>
  );
}

export default App;
