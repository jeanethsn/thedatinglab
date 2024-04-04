import CardList from "@/app/components/events/CardList.jsx";
import Image from "next/image";

export default function Events() {
  return (
    <main className="flex flex-col justify-center items-center pt-[4rem] px-[2rem] bg-pink-grey-bg lg:pt-[6rem]">
      <div className="flex flex-row-reverse items-center mb-[2rem] sm:mb-[3rem] ol:gap-[0.4rem]">
        <Image
          src={"/assets/icon/corazon-icon-evento.svg"}
          width={30}
          height={30}
          alt="icon corazon evento"
          className="ol:w-[3rem] ol:h-auto"
        />
        <h1 className="text-[1.2rem] font-bold md:text-[1.5rem] lg:text-[1.8rem]">
          Todos los eventos
        </h1>
      </div>

      <CardList />
    </main>
  );
}
