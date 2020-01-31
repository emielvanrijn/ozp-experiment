import React, { useState, useEffect } from "react";
import DataContext from "./context";
import PageRouter from "./PageRouter";
import "./App.scss";
import { /*getCounter*/ initDB } from "./stitch";

function App() {
  const [destination, setDestination] = useState(null);
  const [counter /*setCounter*/] = useState(0); //TODO: terugzetten naar null
  const [condition /*setCondition*/] = useState(2); //TODO: terugzetten naar null

  const value = {
    destination,
    setDestination,
    condition,
    counter
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
      <div className="app">
        <PageRouter />
      </div>
    </DataContext.Provider>
  );
}

export default App;
