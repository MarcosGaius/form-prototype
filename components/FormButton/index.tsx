import { MouseEventHandler, ReactNode } from "react";

interface IFormButtonProps {
  children: ReactNode;
  active: boolean;
  className?: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler;
}

export default function FormButton({ children, active, className, type, onClick }: IFormButtonProps) {
  return (
    <button
      type={type}
      className={`${
        active ? "bg-indigo-500 hover:bg-transparent hover:text-indigo-500 hover:outline-1 hover:outline" : "bg-gray-400 hover:bg-gray-500"
      } text-white text-sm min-w-[200px] w-fit p-3 rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
