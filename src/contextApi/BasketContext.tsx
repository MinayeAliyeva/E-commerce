import React, { createContext, useContext } from "react";

export const BasketContext = createContext("");

export const BasketContextProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return <BasketContext.Provider value="5">{children}</BasketContext.Provider>;
};

export const useBasketContext = () => {
  const value = useContext(BasketContext);
  return {value};
};
