import { useContext } from "react";
import { useReducer } from "react";
import { initialState, reducer } from "../reducer";
import { createContext } from "react";

// Box for Data
const DataContext = createContext();

// export hook to grab all data form context
export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sharedData = {
    state,
    dispatch,
  };

  // wrap provider around app and provide DATA to it (= data is in value)
  return (
    <DataContext.Provider value={sharedData}>
      {/* <App /> */}
      {children}
    </DataContext.Provider>
  );
};
