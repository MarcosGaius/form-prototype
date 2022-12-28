import { useContext, useState } from "react";
import AboutForm from "../AboutForm";
import FormHeader from "../FormHeader";
import AddressForm from "../AddressForm";
import IdentityForm from "../IdentityForm";
import { FormContext } from "../../providers/Form";

export default function Form() {
  const { currentFormStep } = useContext(FormContext);

  return (
    <section className="max-w-[1100px] w-3/4 flex flex-col gap-8 bg-white py-10 px-14 rounded-md shadow-lg font-poppins">
      <FormHeader />
      {currentFormStep === "identity" && <IdentityForm />}
      {currentFormStep === "address" && <AddressForm />}
      {currentFormStep === "about" && <AboutForm />}
      {currentFormStep === "confirmation" && <IdentityForm />}
    </section>
  );
}
