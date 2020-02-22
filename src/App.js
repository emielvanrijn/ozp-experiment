import React, { useState } from "react";
import DataContext from "./context";
import PageRouter from "./PageRouter";
import "./App.scss";

function App() {
  const [id, setId] = useState(null);
  const [destination, setDestination] = useState(null);
  const [deal, setDeal] = useState(null);
  const [counter /*setCounter*/] = useState(null);
  const [condition, setCondition] = useState(0);
  const [occupation, setOccupation] = useState(null);
  const [preference, setPreference] = useState(null);
  const [startDrawing, setStartDrawing] = useState(null);
  const [finishDrawing, setFinishDrawing] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const value = {
    currentPage,
    setCurrentPage,
    destination,
    setDestination,
    deal,
    setDeal,
    condition,
    counter,
    occupation,
    setOccupation,
    preference,
    setPreference,
    startDrawing,
    setStartDrawing,
    finishDrawing,
    setFinishDrawing,
    setCondition,
    currentRound,
    setCurrentRound,
    nextPage,
    prevPage,
    id,
    setId
  };

  return (
    <DataContext.Provider value={value}>
      <div className={currentPage <= 1 ? "intro" : "app"}>
        <PageRouter />
      </div>
    </DataContext.Provider>
  );
}

export default App;
