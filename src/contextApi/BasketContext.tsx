import React, { createContext, useContext, useState } from "react";
import { Iproduct } from "../components/products/modules";
interface IBasketContext {
  products: Iproduct[];
  addToCard: (product: Iproduct) => void;
  removeProduct: (productId: Iproduct["id"]) => void;
}
const defaulBasketContextValue: IBasketContext = {
  products: [],
  addToCard: () => {},
  removeProduct: () => {},
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
  const removeProduct = (productId: Iproduct["id"]) => {
    console.log("26 productId", productId);
    const updatedProducts = state?.filter(
      (product) => product?.id !== productId
    );
    setState(updatedProducts);
  };
  const value: IBasketContext = {
    products: state,
    addToCard,
    removeProduct,
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
