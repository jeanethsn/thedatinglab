
"use client";
import Button from "@/app/components/Button.jsx";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "@/app/providers/UserProvider";
import { CardFooter, Typography } from "@material-tailwind/react";
import { UserService } from "@/app/services/user";
import { useState } from "react";
import InputPassword from "@/app/components/InputPassword.jsx";
import InputText from "@/app/components/InputText.jsx";
import { useRouter } from "next/navigation";
const REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("El campo email es requerido")
    .matches(REGEX_EMAIL, "El email es invalido"),
  password: Yup.string().required("La contraseña es requerida"),
});

export default function AdminLogin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ resolver: yupResolver(validationSchema) });
    
      const [errorLogin, setErrorLogin] = useState({});
      const { handleUserLogin } = useUser();
      const router = useRouter();
    
      const onSubmit = async (data) => {
        setErrorLogin({});
        try {
          const response = await UserService.getLogin(data);
          localStorage.setItem("user", JSON.stringify(response.data));
          handleUserLogin(response?.data?.user);
          
          // Verificar si el usuario es administrador antes de redirigirlo
          if (response?.data?.user?.isAdmin) {
            router.push("/dashboard/eventos");
          } else {
            // No es un administrador, puedes mostrar un mensaje de error o redirigirlo a otra página
            console.log("No tienes permiso para acceder a esta página");
          }
        } catch (error) {
          setErrorLogin(error);
        }
      };
  return (
    <main className="p-4 w-[600px] m-auto text-center flex flex-col justify-center gap-4 my-[5%]">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <Typography
          variant="h4"
          className="text-primary-color text-center font-nunito font-bold text-[1.6rem] mt-[0.4rem] lg:text-[1.8rem] lg:mt-[1rem]"
        >
          Bienvenido Admin
        </Typography>
        <Typography
          className="mt-[0.5rem] mb-[0.8rem] text-[#333333] font-nunito font-semibold text-[1.3rem]"
          variant="paragraph"
        >
          Iniciar sesion
        </Typography>
        <div className="mb-[1rem] lg:mb-[1.5rem]">
          <InputText
            register={register}
            name="email"
            error={!!errors?.email}
            labelText="Email"
            errorText={errors?.email?.message}
            className={`${
              !errors?.email
                ? "focus:!border-t-[#212121]"
                : "focus:!border-t-deep-orange-800"
            } focus:border-[3px]`}
          />
        </div>
        <div className="mb-[1.1rem]">
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

        {/* Error cuando las credenciales no existen o coinciden con la bd */}
        {errorLogin?.response?.data?.msg && (
          <span className="text-red-600">
            {errorLogin?.response?.data?.msg}
          </span>
        )}
        
        <Button
          color="secondary"
          type="submit"
          children=" Iniciar sesion"
          className=" text-white text-[0.9rem] py-[0.3rem] font-semibold lg:mt-[1.4rem] lg:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1rem]"
          style={{
            transition:
              "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
          }}
        />

        <CardFooter className="p-0 pt-[0.5rem] pb-[1rem]">
        </CardFooter>
      </form>
    </main>
  );
}
