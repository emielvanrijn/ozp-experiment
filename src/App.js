import React from "react";
import StateContext from "./context";
import PageRouter from "./PageRouter";
import "./App.scss";

function App() {
  return (
    <StateContext.Provider value={0}>
      <div className="App">
        <PageRouter />
      </div>
    </StateContext.Provider>
  );
}

export default App;
