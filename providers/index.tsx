import { ReactNode } from "react";
import FormProvider from "./Form";

interface IProviderProps {
  children: ReactNode;
}

export default function Providers({ children }: IProviderProps) {
  return <FormProvider>{children}</FormProvider>;
}
