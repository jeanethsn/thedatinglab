"use client";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "@/app/providers/UserProvider";
import Button from "@/app/components/Button.jsx";
import { registerUser } from "@/app/services/user";
import { useState } from "react";
import InputPassword from "@/app/components/InputPassword.jsx";
import InputText from "@/app/components/InputText.jsx";
import { Checkbox } from "@material-tailwind/react";
const REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("El campo nombre es requerido").trim("ss"),
  lastname: Yup.string().required("El campo apellido es requerido").trim(),
  email: Yup.string()
    .required("El campo email es requerido")
    .matches(REGEX_EMAIL, "El email es invalido"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe contener al menos 6 caracteres")
    .max(40, "La contraseña no debe exceder los 40 caracteres"),
  passwordConfirmation: Yup.string().oneOf(
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

export default function RegistroContent({ handleCloseRegister }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(validationSchema) });

  const [errorRegister, setErrorRegister] = useState({});
  const { handleUserLogin } = useUser();
  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data);
      handleUserLogin(response?.data?.user);
    } catch (error) {
      setErrorRegister(error);
    }
  };

  return (
    <>
      <h2>Bienvenido</h2>
      <h3>Únete a Dating Lab</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          name="name"
          labelText="Nombre"
          register={register}
          errorText={errors?.name?.message}
        />
        <InputText
          name="lastname"
          labelText="Apellido"
          register={register}
          errorText={errors?.lastname?.message}
        />
        <InputText
          name="email"
          labelText="Email"
          register={register}
          errorText={errors?.email?.message}
        />
        <InputPassword
          register={register}
          name="password"
          error={errors?.password}
          labelText="Contraseña"
          errorText={errors?.password?.message}
        />
        <InputPassword
          register={register}
          name="passwordConfirmation"
          error={errors?.passwordConfirmation}
          labelText="Confirma contraseña"
          errorText={errors?.passwordConfirmation?.message}
        />

        <Checkbox
          name="privacyPolicies"
          label="Acepto la política de privacidad"
          onError
          {...register("privacyPolicies")}
        />
        {errors?.privacyPolicies && (
          <p className="text-red-600"> {errors.privacyPolicies.message} </p>
        )}

        <Checkbox
          name="over18"
          label="Confirmo que soy mayor de 18 años"
          {...register("over18")}
        />

        {errors?.over18 && (
          <p className="text-red-600"> {errors.over18.message} </p>
        )}

        {/* Error del backend */}
        {errorRegister?.response?.data?.msg && (
          <p>Algo ha salido mal vuelve a intentarlo!</p>
        )}

        <Button type="submit">Confirmar</Button>

        <span>
          ¿Ya tienes cuenta?{" "}
          <button onClick={handleCloseRegister}>Iniciar sesión</button>
        </span>
      </form>
      ;
    </>
  );
}
