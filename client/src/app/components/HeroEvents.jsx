import Image from "next/image";
import Button from "@/app/components/Button.jsx";
import CardCurrentEvent from "@/app/components/CarouselCustomArrows.jsx";
export default function HeroEvents() {
  return (
    <>
      <div className="flex flex-col items-center  px-[2.5rem] xxl:mt-[4rem] ">
        <h4 className="font-bold text-[1.3rem] leading-[0.55rem] sm:text-[1.5rem] md:text-[2rem] md:pt-[2rem] xxl:text-[1.8rem]">
          Descubre los próximos
        </h4>
        <div className="flex items-center md:mb-[1rem] lg:mb-[0]">
          <hr className="border-[0.08rem] border-primary-color w-[5rem] md:w-[9rem] xl:w-[12rem]" />
          <span className="text-[3rem] font-madi text-primary-color leading-none px-[0.5rem] md:text-[4rem] xxl:text-[4rem]">
            eventos
          </span>
          <hr className="border-[0.08rem] border-primary-color w-[5rem] md:w-[9rem] xl:w-[12rem]" />
        </div>
        <p className="text-center text-[0.8rem] font-semibold mb-[0.8rem] sm:text-[1rem] lg:w-[50%] xl:w-[30%] xxl:text-[1.1rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore{" "}
        </p>
        <Button
          as="Link"
          href="/eventos"
          children="Ver más eventos"
          color="primary"
          className="text-center mb-[3rem] text-[1rem] font-semibold bg-transparent border-2 border-red-orange text-red-orange md:text-[1.1rem] md:py-[0.5rem] lg:w-[50%] lg:mb-[4rem] xl:w-[30%] xl:rounded-bl-3xl xl:rounded-tr-3xl"
          style={{
            transition:
              "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
          }}
        />
      </div>
      <div className="pb-[4rem] lg:flex lg:px-[2rem] lg:pb-0 lg:mb-0 lg:gap-[1rem] xl:px-[10rem] xl:gap-[2rem] xxl:px-[12rem]">
        <div className="hidden  lg:flex lg:items-end lg:basis-[60%] xl:basis-[70%] xxl:basis-[80%] ">
          <Image
            width={800}
            height={500}
            src={"/assets/image/imagen-events.png"}
            alt="icono flecha"
            className="w-[45rem] h-auto xxl:w-[60rem]"
          />
        </div>
        <CardCurrentEvent />
      </div>
    </>
  );
}
