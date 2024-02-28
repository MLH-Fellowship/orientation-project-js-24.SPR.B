import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const initialData = {
  education: [],
  experience: [],
  skills: [],
};

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
