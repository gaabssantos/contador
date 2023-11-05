import { createContext, useState } from "react";

const CountdownContext = createContext(null);

const CountdownProvider = ({ children }) => {
  const [informations, setInformations] = useState(null);

  return (
    <CountdownContext.Provider value={{ informations, setInformations }}>
      {children}
    </CountdownContext.Provider>
  );
};

export { CountdownContext, CountdownProvider };
