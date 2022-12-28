import { HTMLInputTypeAttribute } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form/dist/types";
import { FieldError, FieldErrorsImpl } from "react-hook-form/dist/types/errors";
import { Merge } from "react-hook-form/dist/types/utils";

interface IFormInputProps {
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  register: UseFormRegister<FieldValues>;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  defaultValue?: string | number | ReadonlyArray<string> | undefined;
}

export default function FormInput({ label, type, name, register, error, defaultValue }: IFormInputProps) {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={name} className="font-medium text-sm mb-2">
        {label}
      </label>
      <input
        type={type}
        {...register(name)}
        className={`bg-slate-100 p-3 rounded-md border outline-none text-black text-sm ${error ? "border-red-700" : "border-transparent"}`}
        defaultValue={defaultValue}
      ></input>
      {error && <small className="mt-1 text-red-700 font-medium">{`${error.message}`}</small>}
    </div>
  );
}
