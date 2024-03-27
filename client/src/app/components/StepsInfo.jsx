import Image from "next/image";

export default function StepsInfo() {
  return (
    <div className="lg:flex ol:w-full ol:max-w-[1440px]">
      <div className="flex flex-col justify-center items-center max-w-[20rem] sm:max-w-[30rem] lg:basis-[55%] lg:pt-[2rem] ol:max-w-[45rem] xl:pb-[4rem]">
        <h1 className="font-bold text-white text-[2.2rem] mb-[2rem] ol:text-[2.5rem]">
          ¿Como Funciona?
        </h1>
        <div className="relative">
          <div className="flex gap-[1rem] mb-[2rem] sm:items-center ol:mb-[4rem]">
            <Image
              width={25}
              height={25}
              src={"/assets/icon/icon-one.svg"}
              alt="numero uno"
              className="sm:w-[2rem] lg:w-[1.5rem] ol:w-[1.8rem]"
            />
            <div className="w-[65%] ol:w-[80%]">
              <h3 className="font-semibold text-[1rem] leading-[1.3rem] text-white sm:text-[1.2rem] sm:leading-[1.5rem] lg:text-[1.1rem] ol:text-[1.3rem] ol:leading-[1.5rem] ">
                Registrate y completa el test de compatibilidad emocional
              </h3>
              <p className="text-[0.7rem] text-white font-light sm:text-[1rem] sm:mt-[0.5rem] ol:text-[1.1rem]">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
          <Image
            width={50}
            height={50}
            src={"/assets/image/enlace-arrow1.svg"}
            alt="icono flecha"
            className="absolute top-2 right-0 sm:w-[4rem] sm:right-[4rem] lg:right-[3rem] lg:w-[3.5rem] ol:w-[4.5rem] ol:right-[1rem]"
          />
        </div>
        <div className="relative sm:w-full">
          <div className="flex gap-[1rem] mb-[2rem] justify-end sm:items-center ol:mb-[4rem]">
            <Image
              width={35}
              height={35}
              src={"/assets/icon/icon-two.svg"}
              alt="numero dos"
              className="sm:w-[3rem] lg:w-[2.3rem] ol:w-[2.5rem]"
            />
            <div className="w-[55%] sm:w-[60%] lg:w-[55%]">
              <h3 className="font-semibold text-[1rem] leading-[1.3rem] text-white sm:text-[1.2rem] sm:leading-[1.5rem] lg:text-[1.1rem] ol:text-[1.3rem] ol:leading-[1.5rem]">
                Recibe tus match personalizados
              </h3>
              <p className="text-[0.7rem] text-white font-light sm:text-[1rem] sm:mt-[0.5rem] ol:text-[1.1rem]">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
          <Image
            width={70}
            height={50}
            src={"/assets/image/enlace-arrow2.svg"}
            alt="icono de flecha"
            className="absolute top-6 left-0 sm:w-[6rem] sm:top-[1rem] lg:top-[1rem] lg:w-[5rem] ol:left-[8rem] ol:w-[6rem]"
          />
        </div>
        <div className="flex gap-[1rem] mb-[2rem] sm:items-center lg:pb-[1rem]">
          <Image
            width={35}
            height={35}
            src={"/assets/icon/icon-three.svg"}
            alt="numero tres"
            className="lg:w-[2.3rem] ol:w-[2.5rem]"
          />
          <div className="w-[80%] sm:w-[65%] ol:w-[70%]">
            <h3 className="font-semibold text-[0.9rem] leading-[1.3rem] text-white sm:text-[1.2rem] sm:leading-[1.5rem] lg:text-[1.1rem] ol:text-[1.3rem] ol:leading-[1.5rem]">
              Únete a nuestros emocionantes eventos y ¡ a disfrutar!
            </h3>
            <p className="text-[0.7rem] text-white font-light sm:text-[1rem] sm:mt-[0.5rem] ol:text-[1.1rem]">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex  lg:items-end ">
        <Image
          width={600}
          height={200}
          src={"/assets/image/imagen-steps.png"}
          alt="imagen de una pareja"
        />
      </div>
    </div>
  );
}
