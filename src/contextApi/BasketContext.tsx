import React, { createContext, useContext, useState } from "react";
import { Iproduct } from "../components/products/modules";
interface IBasketContext {
  products: Iproduct[];
  addToCard: (product: Iproduct) => void;
}
const defaulBasketContextValue: IBasketContext = {
  products: [],
  addToCard: () => {},
};
export const BasketContext = createContext<IBasketContext>(
  defaulBasketContextValue
);

export const BasketContextProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  //state ,setState=useState(0)
  const [state, setState] = useState<Iproduct[]>([]);
  const addToCard = (product: Iproduct) => {
    setState((prevs) => [...prevs, product]);
  };
  const value: IBasketContext = {
    products: state,
    addToCard,
  };

  console.log("28 basket context", state);

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

export const useBasketContext = () => {
  return useContext(BasketContext);
  //{state,setIncriment,setDecriment}
};

//method click edende arraye pushlayacaq state ,
