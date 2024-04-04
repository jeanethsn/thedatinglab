import { useState } from "react";
import { Input } from "@material-tailwind/react";
import Image from "next/image";
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
            {showPassword ? (
              <Image
                src={"/assets/icon/icon-invisible.svg"}
                width={20}
                height={20}
                alt="icono para no ver password"
              />
            ) : (
              <Image
                src={"/assets/icon/icon-visible.svg"}
                width={20}
                height={20}
                alt="icono para  ver password"
              />
            )}
          </button>
        }
      />
      {errorText && (
        <p className="text-red-600 text-[0.8rem] md:text-[0.9rem]">
          {" "}
          {errorText}{" "}
        </p>
      )}
    </>
  );
}
