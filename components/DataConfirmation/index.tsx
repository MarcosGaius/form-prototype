import { useContext } from "react";
import { FormContext } from "../../providers/Form";
import DataParagraph from "../DataParagraph";
import FormButton from "../FormButton";

export default function DataConfirmation() {
  const {
    addressFormData,
    identityFormData,
    setCurrentFormStep,
    setAddressFormData,
    setAboutFormData,
    setIdentityFormData,
    setCompletedFormSteps,
  } = useContext(FormContext);

  const handleNewUserCreation = () => {
    setAboutFormData(null);
    setIdentityFormData(null);
    setAddressFormData(null);
    setCompletedFormSteps({ about: false, address: false, identity: false });
    setCurrentFormStep("identity");
  };

  return (
    <section className="w-full flex flex-col gap-8 bg-white py-10 px-8 rounded-md shadow-lg font-poppins sm:px-14 sm:w-[450px]">
      <h1 className="text-2xl font-semibold text-center self-center">Usuário criado!</h1>
      <div className="flex flex-col gap-4">
        <DataParagraph label="Nome" data={identityFormData!.name} />
        <DataParagraph label="Email" data={identityFormData!.email} />
        <hr className="m-4"></hr>
        <div className="flex flex-wrap justify-between gap-3 w-full">
          <DataParagraph label="Rua" data={addressFormData!.street} className="flex-grow" />
          <DataParagraph label="Número" data={addressFormData!.number} />
        </div>
        <DataParagraph label="CEP" data={addressFormData!.cep} />
      </div>
      <div className="flex w-full flex-grow mt-10">
        <FormButton active={true} type="button" className="!w-full" onClick={handleNewUserCreation}>
          Novo usuário
        </FormButton>
      </div>
    </section>
  );
}
