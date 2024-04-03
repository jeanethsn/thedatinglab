import { useState } from "react";
import { Input } from "@material-tailwind/react";
import Image from "next/image";
import Button from "@/app/components/Button.jsx";
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
          <Button
            className="!py-0 !rounded-none !w-auto !mt-0"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
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
          </Button>
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
