// setup data layer
// track the basket
// track the user
import React, { createContext, useReducer, useContext } from "react";

// the data layer
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// how to use it inside a component
export const useStateValue = () => useContext(StateContext);
