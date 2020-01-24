import React, { useState } from "react";
import DataContext from "./context";
import PageRouter from "./PageRouter";
import "./App.scss";

function App() {
  const [id] = useState(Date.now()); // in app al laten setten
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [destination, setDestination] = useState("");

  const fakeCounter = 0;
  const [condition] = useState(fakeCounter % 3); // Later vervangen door counter uit config

  const value = {
    id,
    termsAccepted,
    setTermsAccepted,
    destination,
    setDestination,
    condition
  };

  return (
    <DataContext.Provider value={value}>
      <div className="App">
        <PageRouter />
      </div>
    </DataContext.Provider>
  );
}

export default App;
