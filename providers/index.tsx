import { ReactNode } from "react";
import DarkModeProvider from "./DarkMode";
import FormProvider from "./Form";

interface IProviderProps {
  children: ReactNode;
}

export default function Providers({ children }: IProviderProps) {
  return (
    <DarkModeProvider>
      <FormProvider>{children}</FormProvider>
    </DarkModeProvider>
  );
}
