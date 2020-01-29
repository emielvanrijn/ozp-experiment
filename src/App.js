import React, { useState, useEffect } from "react";
import DataContext from "./context";
import PageRouter from "./PageRouter";
import "./App.scss";
import { getCounter, initDB } from "./stitch";

function App() {
  const [id] = useState(Date.now()); // in app al laten setten
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [destination, setDestination] = useState(null);
  const [counter, setCounter] = useState(null);
  const [condition, setCondition] = useState(null); // Later vervangen door counter uit config

  const value = {
    id,
    termsAccepted,
    setTermsAccepted,
    destination,
    setDestination,
    condition,
    counter
  };

  useEffect(() => {
    const setup = async () => {
      await initDB();
      await getCounter().then(x => {
        setCounter(x - 1); // -1 omdat eerst eigen entry gemaakt wordt
        setCondition((x - 1) % 3);
      });
    };
    setup();
  }, []);

  return (
    <DataContext.Provider value={value}>
      <div className="App">
        <PageRouter />
      </div>
    </DataContext.Provider>
  );
}

export default App;
