import { useState } from "react";
import { Input } from "@material-tailwind/react";
export default function InputPassword({
  errorText,
  register,
  labelText,
  name,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <label
        className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]"
        htmlFor={name}
      >
        {labelText}
      </label>
      <Input
        id={name}
        name={name}
        type={showPassword ? "text" : "password"}
        {...register(name)}
        {...props}
        icon={
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "hide" : "show"}
          </button>
        }
      />
      {errorText && <p className="text-red-600"> {errorText} </p>}
    </>
  );
}
