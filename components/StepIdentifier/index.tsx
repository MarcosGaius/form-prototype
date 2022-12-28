import { ReactNode, useContext, useEffect, useState } from "react";
import { FormContext } from "../../providers/Form";

interface IStepIdentifierProps {
  icon: ReactNode;
  stepText: string;
  id: "identity" | "address" | "about" | "confirmation";
  completed?: boolean;
}

type IconColorType = "text-indigo-500" | "text-gray-400" | "text-green-400";

export default function StepIdentifier({ stepText, icon, id, completed }: IStepIdentifierProps) {
  const { currentFormStep } = useContext(FormContext);
  const [iconColor, setIconColor] = useState<IconColorType>("text-gray-400");

  useEffect(() => {
    if (currentFormStep === id) {
      setIconColor("text-indigo-500");
    } else if (completed) {
      setIconColor("text-green-400");
    } else {
      setIconColor("text-gray-400");
    }
  }, [currentFormStep, id, completed]);

  return (
    <div className="flex items-center gap-6">
      <div className={`flex items-center justify-center p-2 bg-slate-100 rounded-full ${iconColor}`}>{icon}</div>
      <p className="font-medium text-sm">{stepText}</p>
    </div>
  );
}
