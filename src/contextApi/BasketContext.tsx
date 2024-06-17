import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
const defaulBasketContextValue = {
  count: 0,
  setCount: () => {},
};
interface IBasketContext {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}
export const BasketContext = createContext<IBasketContext>(
  defaulBasketContextValue
);

export const BasketContextProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  //state ,setState=useState(0)
  const [count, setCount] = useState(1);
  const value = { count, setCount };
  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

export const useBasketContext = () => {
  return useContext(BasketContext);
  //{state,setIncriment,setDecriment}
};
