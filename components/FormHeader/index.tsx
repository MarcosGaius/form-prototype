import { useContext } from "react";
import { RiFileList2Fill, RiHome4Fill, RiUser5Fill } from "react-icons/ri";
import { FormContext } from "../../providers/Form";
import StepIdentifier from "../StepIdentifier";

export default function FormHeader() {
  const { completedFormSteps } = useContext(FormContext);

  return (
    <>
      <h1 className="text-2xl text-center font-medium md:text-left">Criação de usuário</h1>
      <div className="flex flex-wrap gap-8 md:flex-nowrap">
        <StepIdentifier
          icon={<RiUser5Fill className="w-5 h-5" />}
          stepText="Identificação de usuário"
          id="identity"
          completed={completedFormSteps.identity ? true : false}
        />
        <StepIdentifier
          icon={<RiHome4Fill className="w-5 h-5" />}
          stepText="Endereço do usuário"
          id="address"
          completed={completedFormSteps.address ? true : false}
        />
        <StepIdentifier
          icon={<RiFileList2Fill className="w-5 h-5" />}
          stepText="Sobre você"
          id="about"
          completed={completedFormSteps.about ? true : false}
        />
      </div>
    </>
  );
}
