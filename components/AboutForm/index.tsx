import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContext } from "../../providers/Form";
import FormButton from "../FormButton";
import FormTextArea from "../FormTextArea";
import { aboutValidator } from "../../validators/aboutValidator";

export interface IAboutData {
  about: string;
}

export default function AboutForm() {
  const { setAboutFormData, setCurrentFormStep, setCompletedFormSteps } = useContext(FormContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(aboutValidator),
  });

  const handlePreviousForm = () => {
    setCurrentFormStep("address");
    setCompletedFormSteps((currentValue) => {
      return { ...currentValue, address: false };
    });
  };

  const onAboutFormSubmit = (data: FieldValues) => {
    setAboutFormData(data as IAboutData);
    setCurrentFormStep("confirmation");
    setCompletedFormSteps((currentValue) => {
      return { ...currentValue, about: true };
    });
  };

  return (
    <form className=" flex flex-col gap-5" onSubmit={handleSubmit(onAboutFormSubmit)}>
      <FormTextArea label="Nos conte mais sobre você" name="about" register={register} error={errors.about} />
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
