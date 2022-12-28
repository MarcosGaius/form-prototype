import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { IAboutData } from "../../components/AboutForm";
import { IAdressData } from "../../components/AddressForm";
import { IIdentityData } from "../../components/IdentityForm";

interface IFormProviderProps {
  children: ReactNode;
}

interface IFormContext {
  currentFormStep: FormStepType;
  setCurrentFormStep: Dispatch<SetStateAction<FormStepType>>;
  completedFormSteps: ICompletedFormSteps;
  setCompletedFormSteps: Dispatch<SetStateAction<ICompletedFormSteps>>;
  identityFormData: IIdentityData | null;
  setIdentityFormData: Dispatch<SetStateAction<IIdentityData | null>>;
  addressFormData: IAdressData | null;
  setAddressFormData: Dispatch<SetStateAction<IAdressData | null>>;
  aboutFormData: IAboutData | null;
  setAboutFormData: Dispatch<SetStateAction<IAboutData | null>>;
}

export type FormStepType = "identity" | "address" | "about" | "confirmation";

interface ICompletedFormSteps {
  identity: boolean;
  address: boolean;
  about: boolean;
}

export const FormContext = createContext({} as IFormContext);

export default function FormProvider({ children }: IFormProviderProps) {
  const [currentFormStep, setCurrentFormStep] = useState<FormStepType>("identity");
  const [completedFormSteps, setCompletedFormSteps] = useState<ICompletedFormSteps>({ identity: false, address: false, about: false });

  const [identityFormData, setIdentityFormData] = useState<IIdentityData | null>(null);
  const [addressFormData, setAddressFormData] = useState<IAdressData | null>(null);
  const [aboutFormData, setAboutFormData] = useState<IAboutData | null>(null);

  return (
    <FormContext.Provider
      value={{
        currentFormStep,
        setCurrentFormStep,
        completedFormSteps,
        setCompletedFormSteps,
        identityFormData,
        setIdentityFormData,
        addressFormData,
        setAddressFormData,
        aboutFormData,
        setAboutFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
