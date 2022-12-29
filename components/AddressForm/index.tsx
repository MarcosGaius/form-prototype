import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContext } from "../../providers/Form";
import FormButton from "../FormButton";
import FormInput from "../FormInput";
import { addressValidator } from "../../validators/addressValidator";
import { FieldValues } from "react-hook-form";
import { IIdentityData } from "../IdentityForm";

export interface IAdressData {
  cep: string;
  street: string;
  number: string;
  district: string;
  city: string;
  landmark?: string;
}

export default function AddressForm() {
  const { setAddressFormData, setCurrentFormStep, setCompletedFormSteps, identityFormData, setIdentityFormData, addressFormData } =
    useContext(FormContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addressValidator),
  });

  const handlePreviousForm = () => {
    const birthdate = new Date(identityFormData!.birthdate);
    const isoBirthdate = birthdate.toISOString().slice(0, 10);
    setIdentityFormData((currentValue) => {
      return { ...currentValue, isoBirthdate: isoBirthdate } as IIdentityData;
    });

    setCurrentFormStep("identity");
    setCompletedFormSteps((currentValue) => {
      return { ...currentValue, identity: false };
    });
  };

  const onAddressFormSubmit = (data: FieldValues) => {
    setAddressFormData(data as IAdressData);
    setCurrentFormStep("about");
    setCompletedFormSteps((currentValue) => {
      return { ...currentValue, address: true };
    });
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onAddressFormSubmit)}>
      <div className="flex flex-wrap gap-10 md:flex-nowrap">
        <FormInput type="text" label="CEP" name="cep" register={register} error={errors.cep} defaultValue={addressFormData?.cep} />
        <FormInput type="text" label="Rua" name="street" register={register} error={errors.street} defaultValue={addressFormData?.street} />
      </div>
      <div className="flex flex-wrap gap-10 w-full md:flex-nowrap">
        <div className="flex flex-wrap gap-4 w-full sm:flex-nowrap md:w-1/2">
          <FormInput
            type="text"
            label="Número"
            name="number"
            register={register}
            error={errors.number}
            defaultValue={addressFormData?.number}
          />
          <FormInput
            type="text"
            label="Bairro"
            name="district"
            register={register}
            error={errors.district}
            defaultValue={addressFormData?.district}
          />
        </div>
        <div className="flex w-full md:w-1/2">
          <FormInput type="text" label="Cidade" name="city" register={register} error={errors.city} defaultValue={addressFormData?.city} />
        </div>
      </div>
      <FormInput
        type="text"
        label="Ponto de referência"
        name="landmark"
        register={register}
        error={errors.landmark}
        defaultValue={addressFormData?.landmark}
      />
      <div className="flex flex-wrap-reverse justify-end gap-5 mt-16 md:flex-nowrap">
        <FormButton active={false} type="button" onClick={handlePreviousForm} className="!w-full sm:!w-fit">
          Anterior
        </FormButton>
        <FormButton active={true} type="submit" className="!w-full sm:!w-fit">
          Próximo passo
        </FormButton>
      </div>
    </form>
  );
}
