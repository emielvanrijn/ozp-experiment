import React, { useState } from "react";
import DataContext from "./context";
import PageRouter from "./PageRouter";
import "./App.scss";

function App() {
  const [id, setId] = useState(-1);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [destination, setDestination] = useState("");

  const value = {
    id,
    setId,
    termsAccepted,
    setTermsAccepted,
    destination,
    setDestination
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
