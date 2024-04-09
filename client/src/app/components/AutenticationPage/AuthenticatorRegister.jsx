"use client";
import { useForm } from "react-hook-form";
import { succesMesage } from "@/app/components/Toast.jsx";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "@/app/providers/UserProvider";
import Button from "@/app/components/Button.jsx";
import { UserService } from "@/app/services/user";
import { useState } from "react";
import InputPassword from "@/app/components/InputPassword.jsx";
import InputText from "@/app/components/InputText.jsx";
import { Checkbox } from "@material-tailwind/react";

const getErrors = (errorsObject) => {
  const arrayOfErrors = Object.keys(errorsObject);

  return arrayOfErrors.map((key) => {
    return errorsObject[key];
  });
};

const REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("El campo nombre es requerido").trim(),
  lastname: Yup.string().required("El campo apellido es requerido").trim(),
  email: Yup.string()
    .required("El campo email es requerido")
    .matches(REGEX_EMAIL, "El email es invalido"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe contener al menos 6 caracteres")
    .max(40, "La contraseña no debe exceder los 40 caracteres"),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Las contraseñas no coinciden"
  ),
  privacyPolicies: Yup.boolean()
    .required("Debe aceptar las políticas de privacidad.")
    .oneOf([true], "Debe aceptar las políticas de privacidad"),
  over18: Yup.boolean()
    .required("Debe confirmar si es mayor de edad")
    .oneOf([true], "Debe confirmar si es mayor de edad"),
});

export default function AuthenticatorRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(validationSchema) });

  const [errorRegister, setErrorRegister] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [formRegisterSuccess, setFormRegisterSuccess] = useState(false);

  const { handleUserLogin } = useUser();

  const onSubmit = async (data) => {
    setIsSubmiting(true);
    try {
      const response = await UserService.registerUser(data);
      handleUserLogin(response?.data?.user);
      localStorage.setItem("user", JSON.stringify(response.data));
      setFormRegisterSuccess(true);
      succesMesage({
        title: "¡Registro exitoso!",
        text: "Bienvenido(a) a DatingLab 🧡",
        icon: "/assets/image/icon-sucessfull.svg",
      });
      setIsSubmiting(false);
    } catch (error) {
      setErrorRegister(error?.response?.data?.validation_errors);
      setIsSubmiting(false);
    }
  };

  return (
    <>
      {!formRegisterSuccess && (
        <>
          <h3 className="pt-[1.2rem] leading-[1rem] mb-[0.8rem] text-[#333333] font-nunito font-semibold text-[1.2rem] ol:text-[1.5rem] ol:mb-[2rem]">
            Únete a Dating Lab
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-[1rem]">
              <InputText
                name="name"
                labelText="Nombre"
                register={register}
                error={!!errors?.name}
                errorText={errors?.name?.message}
                className={`${
                  !errors?.name
                    ? "focus:!border-t-[#212121]"
                    : "focus:!border-t-deep-orange-800"
                } focus:border-[3px]`}
              />
            </div>
            <div className="mb-[1rem]">
              <InputText
                name="lastname"
                labelText="Apellido"
                register={register}
                error={!!errors?.lastname}
                errorText={errors?.lastname?.message}
                className={`${
                  !errors?.lastname
                    ? "focus:!border-t-[#212121]"
                    : "focus:!border-t-deep-orange-800"
                } focus:border-[3px]`}
              />
            </div>
            <div className="mb-[1rem]">
              <InputText
                name="email"
                labelText="Email"
                register={register}
                error={!!errors?.email}
                errorText={errors?.email?.message}
                className={`${
                  !errors?.email
                    ? "focus:!border-t-[#212121]"
                    : "focus:!border-t-deep-orange-800"
                } focus:border-[3px]`}
              />
            </div>
            <div className="mb-[1rem]">
              <InputPassword
                register={register}
                name="password"
                error={!!errors?.password}
                labelText="Contraseña"
                errorText={errors?.password?.message}
                className={`${
                  !errors?.password
                    ? "focus:!border-t-[#212121]"
                    : "focus:!border-t-deep-orange-800"
                } focus:border-[3px]`}
              />
            </div>
            <div className="mb-[1rem]">
              <InputPassword
                register={register}
                name="password_confirmation"
                error={!!errors?.password_confirmation}
                labelText="Confirma contraseña"
                errorText={errors?.password_confirmation?.message}
                className={`${
                  !errors?.password_confirmation
                    ? "focus:!border-t-[#212121]"
                    : "focus:!border-t-deep-orange-800"
                } focus:border-[3px]`}
              />
            </div>
            <div className="text-[0.9rem] leading-[1.1rem] mb-[0.8rem]">
              <Checkbox
                id="privacyPolicies"
                name="privacyPolicies"
                className="w-[1rem] h-[1rem] p-0 ol:w-[1.2rem] ol:h-[1.2rem] ol:!border-[1px] ol:!border-blue-gray-600 ol:!rounded-[2rem]"
                label=" Acepto la política de privacidad"
                containerProps={{
                  className: "p-0",
                }}
                {...register("privacyPolicies")}
                labelProps={{
                  className: "text-[0.9rem] leading-[1.2rem] ml-[0.5rem]",
                }}
              />
            </div>

            {errors?.privacyPolicies && (
              <p className="text-red-600 text-[0.8rem]">
                {" "}
                {errors.privacyPolicies.message}{" "}
              </p>
            )}
            <div className="">
              <Checkbox
                name="over18"
                className="w-[1rem] h-[1rem] p-0 ol:w-[1.2rem] ol:h-[1.2rem] ol:!border-[1px] ol:!border-blue-gray-600 ol:!rounded-[2rem]"
                label="Confirmo que soy mayor de 18 años"
                labelProps={{
                  className: "text-[0.9rem] leading-[1.2rem] ml-[0.5rem]",
                }}
                containerProps={{
                  className: " p-0 ",
                }}
                {...register("over18")}
              />
            </div>

            {errors?.over18 && (
              <p className="text-red-600 text-[0.8rem]">
                {" "}
                {errors.over18.message}{" "}
              </p>
            )}

            {/* Error del backend */}
            {errorRegister &&
              getErrors(errorRegister).map((error) => (
                <p key={error} className="text-red-500">
                  {" "}
                  {error}
                </p>
              ))}

            <Button
              isLoading={isSubmiting}
              color="secondary"
              type="submit"
              children="Crear cuenta"
              className="flex justify-center gap-[0.8rem] text-white text-[0.9rem] py-[0.3rem] font-semibold lg:mt-[1.4rem] lg:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1rem]"
              style={{
                transition:
                  "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
              }}
            >
              Confirmar
            </Button>
          </form>
        </>
      )}
    </>
  );
}
