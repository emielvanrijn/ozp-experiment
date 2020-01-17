import React from "react";
import firestore from "./firestore";

function App() {
  const db = firestore.firestore().collection("data");
  const id = Date.now().toString();
  db.doc(id).set({
    initialized: true
  });
  return <p>Hello World!</p>;
}

export default App;
