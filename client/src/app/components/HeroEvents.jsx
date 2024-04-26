import Image from "next/image";
import Button from "@/app/components/Button.jsx";
import CardCurrentEvent from "@/app/components/CarouselCustomArrows.jsx";
export default function HeroEvents() {
  return (
    <>
      <div className="flex flex-col items-center  px-[2.5rem] md:w-[70%] md:mx-auto lg:w-full xl:mt-[2rem] ol:mt-[1rem] xxl:mb-0 xxxl:!mt-[3rem]">
        <h4 className="font-bold text-[1.3rem] mb-[0.5rem] leading-[0.55rem] sm:text-[2rem] sm:mb-[1rem] md:text-[2rem]  xl:text-[2.2rem] md:pt-[2rem] ol:text-[2.2rem] xxxl:text-[2.8rem] ">
          Descubre nuestras próximas
        </h4>
        <div className="flex items-center md:mb-[1rem] lg:mb-[0]">
          <hr className="border-[0.08rem] border-primary-color w-[5rem] md:w-[9rem] xl:w-[12rem]" />
          <span className="text-[2.5rem] font-madi text-primary-color leading-none px-[0.5rem] mb-[0.5rem] sm:text-[3rem] lg:text-[3rem] xl:text-[4rem] ol:text-[4rem] xxl:text-[4rem]">
            LabExperiences
          </span>
          <hr className="border-[0.08rem] border-primary-color w-[5rem] md:w-[9rem] xl:w-[12rem]" />
        </div>
        <p className="text-center text-[0.8rem] font-semibold mb-[0.8rem] sm:text-[1rem] lg:w-[50%] lg:text-[0.9rem] xl:text-[1rem] ol:!w-[40%] ol:text-[1.1rem] 2xl:!w-[35%]">
          Hemos diseñado una manera diferente de conectar con personas de forma
          divertida y auténtica a través de los sentidos.
        </p>
        <Button
          as="Link"
          href="/eventos"
          children="
          Ver LabExperiences"
          color="primary"
          className="text-center mb-[3rem] text-[1rem] font-semibold bg-transparent border-2 border-red-orange text-red-orange md:text-[1.1rem] md:py-[0.5rem] lg:w-[30%] lg:mb-[-0.5rem] lg:z-[1] lg:mt-0 xl:w-[30%] xl:rounded-bl-3xl xl:rounded-tr-3xl 2xl:w-[25%]"
          style={{
            transition:
              "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
          }}
        />
      </div>
      <div className="pb-[4rem] lg:flex lg:relative  lg:px-[2rem] lg:!pb-0 lg:mb-0 lg:gap-[1rem] lg:h-full xl:gap-[2rem] ol:px-[8rem]">
        <div className="hidden  lg:flex  lg:basis-[60%]  xxl:items-end xxl:mt-0">
          <Image
            width={1400}
            height={1200}
            src={"/assets/image/bicicleta.svg"}
            alt="pareja bicicleta"
            className=" lg:absolute lg:w-[38rem] lg:left-[-7rem] lg:bottom-0 h-auto xl:w-[41rem] ol:!w-[42rem] 2xl:!w-[40rem] 2xl:left-[2rem] xxxl:!w-[55rem] xxxl:left-[7rem]"
          />
        </div>
        <CardCurrentEvent />
      </div>
    </>
  );
}
