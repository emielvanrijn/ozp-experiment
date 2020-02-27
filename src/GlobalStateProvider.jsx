import React, { useState } from "react";
import GlobalState from "./GlobalState";

export default function GlobalStateProvider({ children }) {
  const [destination, setDestination] = useState(null);
  const [deal, setDeal] = useState(null);
  const [counter, setCounter] = useState(0);
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
    setCounter,
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
    prevPage
  };
  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
}
