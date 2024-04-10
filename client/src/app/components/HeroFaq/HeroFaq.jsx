"use client";
import Image from "next/image";
import styles from "./styles.module.css";

export const HeroFaq = () => {
  return (
    <>
      <div className=" bg-red-300 flex flex-col items-center justify-center md:h-44 backdrop:shadow-inner lg:flex-row lg:px-20 lg:mx-auto lg:gap-9 lg:items-center lg:py-10 ol:h-80">
        <div className="py-2 h-32 lg:h-40 ol:w-80 ol:h-80">
          <Image
            src={"/assets/image/logo-encabezado-fqa.svg"}
            width={200}
            height={200}
            alt="icono FAQ"
            className="lg:w-[11rem] lg:h-[10rem] ol:w-80 ol:h-80"
          />
        </div>
        <div className="hidden text-white lg:block lg:text-[0.9rem] ol:w-[60%]">
          <h1 className={`${styles.h1} mb-2 ol:!text-[2.5rem]`}>
            No dudes en ponerte en contacto con nosotros
          </h1>
          <p className={`${styles.p} ol:!text-[1.4rem] ol:mt-[1rem]`}>
            Estaremos encantados de ayudarte con cualquier duda que tengas{" "}
            Envianos un mensaje y nos pondremos en conctacto contigo
          </p>
        </div>
      </div>
      <div className="bg-red-200 py-4 text-red-200 flex-shrink-0 md:block h-[2rem] w-full ol:h-[4rem]"></div>
    </>
  );
};
