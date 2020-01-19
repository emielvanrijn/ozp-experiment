import React from "react";
import StateContext from "./context";
import PageRouter from "./PageRouter";

function App() {
  return (
    <StateContext.Provider value={0}>
      <PageRouter />
    </StateContext.Provider>
  );
}

export default App;
