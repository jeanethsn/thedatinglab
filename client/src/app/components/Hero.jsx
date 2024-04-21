"use client";
import { useUser } from "@/app/providers/UserProvider";
import Button from "@/app/components/Button.jsx";
import ModalAuth from "@/app/components/modal/ModalAuth.jsx";
import Image from 'next/image';

export default function Hero() {
  const { user } = useUser();

  return (
    <div className="relative w-full h-screen overflow-hidden ">
      <div className="sm:hidden flex flex-col items-center justify-center h-full">
        <div className="w-full mb-8 mt-[-9rem]">
          <Image
            src="/assets/image/portada.jpg"
            alt="Descripción de la imagen"
            width={500}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="w-[20rem] max-w-[33rem] bg-white rounded-lg shadow-lg px-4 py-6">
          {!user?.email ? (
            <>
              <h1 className="font-bold text-[1.5rem] leading-[1.6rem] sm:text-[2rem] sm:leading-[2.2rem] xl:text-[3rem] xl:leading-[3.2rem] xxxl:text-[3.8rem] xxxl:leading-[4.2rem] mb-4">
                Donde los sentidos encuentran el{" "}
                <span className="font-madi text-primary-color text-[2.2rem] sm:text-[2.8rem] xl:text-[3.8rem] xxxl:text-[4.4rem]">
                  Amor
                </span>
              </h1>
              <p className="mb-4 text-start text-[0.8rem] font-semibold leading-[1.1rem] sm:text-[1.1rem] sm:leading-[1.4rem] xl:text-[1.2rem] xl:leading-[1.6rem]">
                Experimenta la esencia de las conexiones auténticas y reales a través de los sentidos y en un entorno de citas seguro.
              </p>
              <ModalAuth
                renderButtonModal={(handleOpenModalAuth) => (
                  <Button
                    color="primary"
                    onClick={handleOpenModalAuth}
                    children="¿Te apuntas?"
                    className="!mb-0 sm:text-[1.1rem] text-white text-[1rem] py-[0.5rem] font-semibold xl:text-[1.2rem]"
                  />
                )}
              />
            </>
          ) : (
            <>
              <h1 className="font-bold text-[1.5rem] leading-[1.6rem] sm:text-[2rem] sm:leading-[2.2rem] xl:text-[3rem] xl:leading-[3.2rem] xxxl:text-[3.8rem] xxxl:leading-[4.2rem] mb-4">
                ¡Nos alegra verte de nuevo! <br />
                <span className="font-madi text-primary-color text-[2.2rem] sm:text-[2.8rem] xl:text-[3.8rem] xxxl:text-[4.4rem]">
                  {user.name}
                </span>
              </h1>
              <p className="mb-4 text-start text-[0.8rem] font-semibold leading-[1.1rem] sm:text-[1.1rem] sm:leading-[1.4rem] xl:text-[1.2rem] xl:leading-[1.6rem]">
                ¿Quieres desafiar tus expectativas?
              </p>
              <p className="text-start text-[0.8rem] font-semibold leading-[1.1rem] sm:text-[1.1rem] sm:leading-[1.4rem] xl:text-[1.2rem] xl:leading-[1.6rem]">
                Únete a nuestros eventos a ciegas y deja que la química hable por sí misma...
              </p>
            </>
          )}
        </div>
      </div>

      <div className="hidden sm:flex justify-center items-center relative w-full h-full lg:!gap-[5rem] lg:flex-row flex-col" style={{ backgroundImage: `url("/assets/image/portada.jpg")`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="h-full lg:basis-[50%] xl:h-full xxl:h-45rem ol:h-full"></div>
        <div className="w-[20rem] max-w-[33rem] mx-auto flex flex-col justify-center items-center px-[2.5rem] py-[3rem] text-center shadow-lg shadow-gray-600/40 sm:w-[30rem] sm:px-[0rem] sm:py-[1.2rem] lg:basis-[50%] lg:mx-0 lg:rounded-none lg:shadow-none lg:bg-inherit xl:px-[2rem] xxxl:max-w-[45rem]">
          {!user?.email ? (
            <>
              <h1 className="font-bold text-[1.5rem] leading-[1.6rem] sm:text-[2rem] sm:leading-[2.2rem] xl:text-[3rem] xl:leading-[3.2rem] xxxl:text-[3.8rem] xxxl:leading-[4.2rem]">
                Donde los sentidos encuentran el{" "}
                <span className="font-madi text-primary-color text-[2.2rem] sm:text-[2.8rem] xl:text-[3.8rem] xxxl:text-[4.4rem]">
                  Amor
                </span>
              </h1>
              <p className="mb-[2.6rem] text-start pt-[0.5rem] text-[0.8rem] font-semibold leading-[1.1rem] sm:text-[1.1rem] sm:leading-[1.4rem] sm:pt-[1rem] xl:text-[1.2rem] xl:leading-[1.6rem] xxxl:w-[80%]">
                Experimenta la esencia de las conexiones auténticas y reales a través de los sentidos y en un entorno de citas seguro.
              </p>
              <ModalAuth
                renderButtonModal={(handleOpenModalAuth) => (
                  <Button
                    color="primary"
                    onClick={handleOpenModalAuth}
                    children="¿Te apuntas?"
                    className="!mb-0 sm:text-[1.1rem] text-white text-[1rem] py-[0.5rem] font-semibold lg:mt-[1.4rem] lg:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1.2rem] xxxl:w-[85%] xxxl:mx-auto"
                  />
                )}
              />
            </>
          ) : (
            <>
              <h1 className="leading-[2.1rem] text-primary-color text-[1.2rem] sm:text-[1.6rem] sm:leading-[2.5rem] lg:leading-[3rem] xl:text-[2.1rem] xl:leading-[3.5rem]">
                ¡Nos alegra verte de nuevo! <br />
                <span className="font-madi text-primary-color text-[2.6rem] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]">
                  {user.name}
                </span>
              </h1>
              <p className="font-bold text-[1.1rem] leading-[1.4rem] pt-[0.5rem] sm:pt-[1rem] sm:text-[1.2rem] sm:leading-[2.2rem] lg:pt-[0.5rem] xl:text-[1.5rem] xl:leading-[3.2rem]">
                ¿Quieres desafiar tus expectativas?{" "}
              </p>
              <p className="text-center pt-[0.5rem] text-[0.8rem] sm:pt-0 font-semibold leading-[1.1rem] sm:text-[1.1rem] sm:leading-[1.4rem] xl:text-[1.2rem] xl:leading-[1.6rem]">
                Únete a nuestros eventos a ciegas y deja que la química hable por sí misma...
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
