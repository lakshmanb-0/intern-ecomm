import { createContext, useReducer } from "react";
import { initialstate, reducer } from "./Reducer";

export const contextApi = createContext();

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <contextApi.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </contextApi.Provider>
  );
};
