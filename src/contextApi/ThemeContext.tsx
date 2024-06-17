import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
interface ILight {
  width: string;
  padding: string;
  backgroundColor: string;
  border: string;
  height: string;
  color: string;
}

interface IThemeContext {
  light: ILight;
  toggle: boolean;
  setToggle?: Dispatch<SetStateAction<boolean>>;
}
export const light = {
  width: "100%",
  padding: " 25px",
  backgroundColor: "white",
  border: " 1px solid red",
  height: "200px",
  color: "black",
};
export const black = {
  width: "100%",
  padding: " 25px",
  border: " 1px solid red",
  backgroundColor: "black",
  height: "200px",
  color: "white",
};
const defaultThemeContextValue: IThemeContext = {
  light: light,
  toggle: false,
};

export const ThemeContext = createContext<IThemeContext>(
  defaultThemeContextValue
);

export const ThemeContextProvider: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  console.log("context toggle", toggle);
  const value = {
    light,
    toggle,
    setToggle,
  };

  return (
    <ThemeContext.Provider value={value}> {children}</ThemeContext.Provider>
  );
};
