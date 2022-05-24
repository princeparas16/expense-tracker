import React, { createContext, useReducer } from "react";

/* ------------------------------ Initial state ----------------------------- */

const initialState = {
  transactions: [
    {
      id: 1,
      text: "Grocery",
      amount: -1500,
    },
    {
      id: 2,
      text: "Steamer",
      amount: -3900,
    },
    {
      id: 3,
      text: "clothes",
      amount: -9200,
    },
    {
      id: 4,
      text: "salary",
      amount: 64000,
    },
    {
      id: 5,
      text: "Credit Card Bill",
      amount: 42000,
    },
  ],
};

/* ----------------------------- Create context ----------------------------- */

export const GlobalContext = createContext(initialState);

/* --------------------------- Provider Component --------------------------- */

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
