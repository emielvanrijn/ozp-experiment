import React from "react";
import PageRouter from "./PageRouter";
import GlobalStateProvider from "./GlobalStateProvider.jsx";
import "./App.scss";

function App() {
  return (
    <GlobalStateProvider>
      <PageRouter />
    </GlobalStateProvider>
  );
}

export default App;
