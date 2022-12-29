import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useLayoutEffect, useState } from "react";

interface IDarkModeProps {
  children: ReactNode;
}

interface IDarkModeContext {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const DarkModeContext = createContext({} as IDarkModeContext);

export default function DarkModeProvider({ children }: IDarkModeProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("@simple-form:darkmode") === "true") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  return <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>{children}</DarkModeContext.Provider>;
}
