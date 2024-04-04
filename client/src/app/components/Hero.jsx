"use client";
import { useUser } from "@/app/providers/UserProvider";
import Button from "@/app/components/Button.jsx";
import Image from "next/image";
import ModalAuth from "@/app/components/modal/ModalAuth.jsx";
export default function Hero() {
  const { user } = useUser();

  return (
    <div className="flex flex-wrap justify-center z-[1] relative lg:w-full lg:justify-none">
      <div className="h-[20rem] sm:h-[30rem] lg:basis-[50%] lg:h-[30rem] xl:h-[40rem] xl:pt-[2rem] xxl:h-[45rem]">
        <div
          className="bg-top w-[20rem] mt-[2rem] h-full sm:bg-top sm:w-[28rem] lg:mt-0  lg:w-full xl:w-[35rem] "
          style={{
            backgroundImage: `url('/assets/image/imagen-hero.png')`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="w-[20rem] max-w-[33rem] mx-auto bg-white rounded-lg flex flex-col justify-center items-center  px-[2.5rem] py-[2rem] text-center shadow-lg shadow-gray-600/40  sm:w-[30rem] sm:px-[3rem]  sm:py-[3.2rem]  lg:basis-[50%] lg:mx-0 lg:rounded-none lg:shadow-none lg:bg-inherit xl:px-[2rem]">
        {!user?.email ? (
          <>
            <h1 className="font-bold text-[1.5rem] leading-[1.6rem] sm:text-[2rem] sm:leading-[2.2rem] xl:text-[3rem] xl:leading-[3.2rem]">
              Donde los sentidos encuentran el{" "}
              <span className="font-madi text-primary-color  text-[2.2rem] sm:text-[2.8rem] xl:text-[3.8rem]">
                Amor
              </span>
            </h1>
            <p className="text-start pt-[0.5rem] text-[0.8rem] font-semibold leading-[1.1rem] sm:text-[1.1rem] sm:leading-[1.4rem] sm:pt-[1rem] xl:text-[1.2rem] xl:leading-[1.6rem]">
              Creemos en la compatibilidad emocional como la base de relaciones
              solidas
            </p>
            <ModalAuth
              renderButtonModal={(handleOpenModalAuth) => (
                <Button
                  color="primary"
                  onClick={handleOpenModalAuth}
                  children="¿Te apuntas?"
                  className="sm:text-[1.1rem] text-white text-[1rem] font-semibold lg:mt-[1.4rem] lg:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1.2rem]"
                  style={{
                    transition:
                      "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
                  }}
                />
              )}
            />
          </>
        ) : (
          <>
            <Image
              src={"/assets/icon/icon-userlogged.svg"}
              width={80}
              height={50}
              alt="icono de corazones"
              className="sm:w-[5.5rem] h-auto md:w-[6.5rem] lg:w-[7.5rem]"
            />
            <h1 className="leading-[2.1rem] text-primary-color  text-[1.2rem] sm:text-[1.6rem] sm:leading-[2.5rem] lg:leading-[3rem] xl:text-[2.1rem] xl:leading-[3.5rem]">
              ¡Nos alegra verte de nuevo!{" "}
              <span className="font-madi text-primary-color  text-[2.6rem] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]">
                {user.name}
              </span>
            </h1>
            <p className="font-bold text-[1.1rem] leading-[1.4rem] pt-[0.5rem] sm:pt-[1rem] sm:text-[1.2rem] sm:leading-[2.2rem] lg:pt-[0.5rem] xl:text-[1.5rem] xl:leading-[3.2rem]">
              ¿Quieres desafiar tus expectativas?{" "}
            </p>
            <p className="text-center pt-[0.5rem] text-[0.8rem] sm:pt-0 font-semibold leading-[1.1rem] sm:text-[1.1rem] sm:leading-[1.4rem]  xl:text-[1.2rem] xl:leading-[1.6rem]">
              Únete a nuestros eventos a ciegas y deja que la química hable por
              sí misma...
            </p>
          </>
        )}
      </div>
    </div>
  );
}
