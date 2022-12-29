import FormButton from "../FormButton";
import FormInput from "../FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { identityValidator } from "../../validators";
import { FieldValues } from "react-hook-form/dist/types";
import { useContext, useEffect } from "react";
import { FormContext } from "../../providers/Form";

export interface IIdentityData {
  name: string;
  password: string;
  email: string;
  birthdate: string;
  isoBirthdate?: string;
}

export default function IdentityForm() {
  const { setIdentityFormData, setCurrentFormStep, setCompletedFormSteps, identityFormData } = useContext(FormContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(identityValidator),
  });

  const onIdentityFormSubmit = (data: FieldValues) => {
    delete data.confirmPassword;

    setIdentityFormData(data as IIdentityData);
    setCurrentFormStep("address");
    setCompletedFormSteps((currentValue) => {
      return { ...currentValue, identity: true };
    });
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onIdentityFormSubmit)}>
      <FormInput type="text" label="Nome" name="name" register={register} error={errors?.name} defaultValue={identityFormData?.name} />
      <div className="flex flex-wrap gap-10 md:flex-nowrap">
        <FormInput
          type="password"
          label="Senha"
          name="password"
          register={register}
          error={errors?.password}
          defaultValue={identityFormData?.password}
        />
        <FormInput
          type="password"
          label="Confirmar senha"
          name="confirmPassword"
          register={register}
          error={errors?.confirmPassword}
          defaultValue={identityFormData?.password}
        />
      </div>
      <div className="flex flex-wrap gap-10 md:flex-nowrap">
        <FormInput
          type="email"
          label="E-mail"
          name="email"
          register={register}
          error={errors?.email}
          defaultValue={identityFormData?.email}
        />
        <FormInput
          type="date"
          label="Data de nascimento"
          name="birthdate"
          register={register}
          error={errors?.birthdate}
          defaultValue={identityFormData?.isoBirthdate}
        />
      </div>
      <FormButton active={true} type="submit" className="self-end mt-16 w-full min-w-full sm:w-fit sm:min-w-[200px]">
        Próximo passo
      </FormButton>
    </form>
  );
}
