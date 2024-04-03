import { useState } from "react";
import { Input } from "@material-tailwind/react";
export default function InputText({
  errorText,
  labelText,
  register,
  name,
  ...props
}) {
  return (
    <>
      <label
        className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]"
        htmlFor={name}
      >
        {labelText}
      </label>
      <Input type="text" id={name} name={name} {...register(name)} {...props} />
      {errorText && (
        <p className="text-red-600 text-[0.8rem] md:text-[0.9rem]">
          {" "}
          {errorText}{" "}
        </p>
      )}
    </>
  );
}
