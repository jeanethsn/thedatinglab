"use client";
import Button from "@/app/components/Button.jsx";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "@/app/providers/UserProvider";
import { CardFooter, Typography } from "@material-tailwind/react";
import { getLogin } from "@/app/services/user";
import { useState } from "react";
import InputPassword from "@/app/components/InputPassword.jsx";
import InputText from "@/app/components/InputText.jsx";
const REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("El campo email es requerido")
    .matches(REGEX_EMAIL, "El email es invalido"),
  password: Yup.string().required("La contraseña es requerida"),
});

export default function LoginContent({
  handleCloseModalAuth,
  handleOpenRegister,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(validationSchema) });

  const [errorLogin, setErrorLogin] = useState({});
  const { handleUserLogin } = useUser();

  const onSubmit = async (data) => {
    setErrorLogin({});
    try {
      const response = await getLogin(data);
      localStorage.setItem("user", JSON.stringify(response.data));
      handleUserLogin(response?.data?.user);

      handleCloseModalAuth();
    } catch (error) {
      setErrorLogin(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          variant="h4"
          className="text-primary-color text-center font-nunito font-bold text-[1.6rem]"
        >
          Bienvenido
        </Typography>
        <Typography
          className="mb-[0.8rem] text-[#333333] font-nunito font-bold text-[1.4rem]"
          variant="paragraph"
        >
          Iniciar sesion
        </Typography>

        <InputText
          register={register}
          name="email"
          error={errors?.email}
          labelText="Email"
          errorText={errors?.email?.message}
        />

        <InputPassword
          register={register}
          name="password"
          error={errors?.password}
          labelText="Contraseña"
          errorText={errors?.password?.message}
        />

        {/* Error cuando las credenciales no existen o coinciden con la bd */}
        {errorLogin?.response?.data?.msg && (
          <span className="text-red-600">
            {errorLogin?.response?.data?.msg}
          </span>
        )}
        <Typography
          as="a"
          href="#signup"
          variant="small"
          color="blue-gray"
          className="ml-1 font-bold"
        >
          ¿Has olvidado la contraseña?
        </Typography>
        <Button type="submit">Iniciar sesion</Button>

        <CardFooter>
          <Typography variant="small" className="mt-4 flex justify-center">
            Aún no tienes cuenta?
            <Typography
              as="a"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold cursor-pointer"
              onClick={handleOpenRegister}
            >
              Regístrate ahora
            </Typography>
          </Typography>
        </CardFooter>
      </form>
    </>
  );
}
