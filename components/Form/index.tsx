import { useContext, useState } from "react";
import AboutForm from "../AboutForm";
import FormHeader from "../FormHeader";
import AddressForm from "../AddressForm";
import IdentityForm from "../IdentityForm";
import { FormContext } from "../../providers/Form";

export default function Form() {
  const { currentFormStep } = useContext(FormContext);

  return (
    <section className="w-11/12 max-w-none flex flex-col gap-8 bg-white dark:bg-neutral-900 dark:text-white py-10 px-5 rounded-md shadow-lg font-poppins sm:px-10 md:px-14 lg:w-3/4 lg:max-w-[1100px]">
      <FormHeader />
      {currentFormStep === "identity" && <IdentityForm />}
      {currentFormStep === "address" && <AddressForm />}
      {currentFormStep === "about" && <AboutForm />}
      {currentFormStep === "confirmation" && <IdentityForm />}
    </section>
  );
}
