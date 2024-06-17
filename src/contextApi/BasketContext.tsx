import React, { createContext, useContext } from "react";

export const BasketContext = createContext<string | null>(null);

export const BasketContextProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  //state ,setState=useState(0)
  return <BasketContext.Provider value="5">{children}</BasketContext.Provider>;
};

export const useBasketContext = () => {
  const value = useContext(BasketContext);
  return { value };
  //{state,setIncriment,setDecriment}
};
