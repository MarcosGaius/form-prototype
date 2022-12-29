import { ReactNode, useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../providers/DarkMode";
import { FormContext } from "../../providers/Form";

interface IStepIdentifierProps {
  icon: ReactNode;
  stepText: string;
  id: "identity" | "address" | "about" | "confirmation";
  completed?: boolean;
}

type IconColorType = "text-indigo-500" | "text-gray-400" | "text-gray-200" | "text-green-400" | "text-indigo-400";

export default function StepIdentifier({ stepText, icon, id, completed }: IStepIdentifierProps) {
  const { currentFormStep } = useContext(FormContext);
  const { darkMode } = useContext(DarkModeContext);
  const [iconColor, setIconColor] = useState<IconColorType>("text-gray-400");

  useEffect(() => {
    if (currentFormStep === id) {
      setIconColor(darkMode ? "text-indigo-400" : "text-indigo-500");
    } else if (completed) {
      setIconColor("text-green-400");
    } else {
      setIconColor(darkMode ? "text-gray-200" : "text-gray-400");
    }
  }, [currentFormStep, id, completed, darkMode]);

  return (
    <div className="flex items-center flex-grow gap-6 md:flex-grow-0">
      <div className={`flex items-center justify-center p-2 bg-slate-100 dark:bg-zinc-700 rounded-full ${iconColor}`}>{icon}</div>
      <p className="font-medium text-sm">{stepText}</p>
    </div>
  );
}
