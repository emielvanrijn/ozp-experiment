import React from "react";

const DataContext = React.createContext({
  id: -1,
  initialized: true,
  termsAccepted: false
});

export default DataContext;
