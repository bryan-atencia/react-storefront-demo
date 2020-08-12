import React, { useEffect, useState, useReducer, createContext } from "react";

export const HomeContext = createContext();

export const HomeContextProvider = (props) => {

  const initialState = {}

  const reducer = (state, action) => {
    switch(action.type) {
      case "create":
        return action.payload
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <HomeContext.Provider value={[state, dispatch]}>
      {props.children}
    </HomeContext.Provider>
  );
};
