import React from "react";

import { createContext, useState } from "react";
const MainContext = createContext();

const MainProvider = ({ children }) => {

  let [primaryNav, setPrimaryNav] = useState(true);

  return (
    <MainContext.Provider
      value={{
        primaryNav,
        setPrimaryNav
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainProvider, MainContext };
