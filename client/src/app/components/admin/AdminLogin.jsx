import { Checkbox, Input, Typography } from "@material-tailwind/react";
import Button from "../Button";

export default function AdminLogin() {
    return (
        <form className="p-4 w-[500px] h-[500px] m-auto text-center flex flex-col gap-4 my-[5%]">
            <Typography
                variant="h4"
                className="text-primary-color text-center font-nunito font-bold text-[1.6rem] mt-[0.4rem] lg:text-[1.8rem] lg:mt-[1rem]"
            >
                ¡Bienvenido, admin!
            </Typography>
            <Typography
                className="mt-[0.5rem] mb-[0.8rem] text-[#333333] font-nunito font-semibold text-[1.3rem] text-start"
                variant="paragraph"
            >
                Iniciar sesion
            </Typography>
            
            {/* BORRAR INPUTS */}
            <label
                className="text-[#545454] text-start font-nunito font-bold text-[1rem]">
                Email
            </label>
            <Input
                id="email"
                name="email"
                className="bg-[#FBF6F3]"
            />
            <label
                className="text-[#545454] text-start font-nunito font-bold text-[1rem]">
                Contraseña
            </label>
            <Input
                id="password"
                name="password"
                className="bg-[#FBF6F3]"
            />
            {/* BORRAR INPUTS */}

            <Checkbox
                label="Recordar contraseña"
                labelProps={{
                    className: "text-[0.9rem] leading-[1.2rem] ml-[0.5rem]",
                }}
                className="rounded-none"
            />
            <Button
                color="primary"
                children="Iniciar sesión"
                className="sm:text-[1.1rem] w-[22rem] m-auto text-white text-[1rem] font-semibold lg:mt-[1.4rem] lg:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1.2rem]"
                style={{
                    transition:
                        "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
                }}
            />
        </form>
    );
}
