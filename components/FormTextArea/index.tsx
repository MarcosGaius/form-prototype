import { FieldValues, UseFormRegister } from "react-hook-form/dist/types";
import { FieldError, FieldErrorsImpl } from "react-hook-form/dist/types/errors";
import { Merge } from "react-hook-form/dist/types/utils";

interface IFormTextAreaProps {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export default function FormTextArea({ label, name, register, error }: IFormTextAreaProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={name} className="font-medium text-sm">
        {label}
      </label>
      <textarea
        {...register(name)}
        className={`bg-slate-100 p-3 rounded-md border outline-none text-black text-sm resize-none ${
          error ? "border-red-700" : "border-transparent"
        }`}
        rows={10}
      ></textarea>
      {error && <small className="mt-1 text-red-700 font-medium">{`${error.message}`}</small>}
    </div>
  );
}
