"use clien";
import Hero from "@/app/components/Hero.jsx";
import StepsInfo from "@/app/components/StepsInfo.jsx";
import HeroEvents from "@/app/components/HeroEvents.jsx";
export default function Home() {
  return (
    <main>
      <section className="relative pb-[3rem] lg:pb-0">
        <div
          className="absolute w-full h-[80%] top-0 left-0 z-0 lg:w-[50%] lg:h-full"
          style={{
            backgroundImage: `url('/assets/image/bg-hero.png')`,
            backgroundPosition: "center center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "contain",
          }}
        ></div>
        <div
          className="absolute w-full h-[80%] top-0 left-0 z-0 xl:h-full"
          style={{
            backgroundImage: `url('/assets/image/bg-corazon.svg')`,
            backgroundPosition: "center center",
            backgroundSize: "contain",
            transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
          }}
        ></div>
        <Hero />
      </section>
      <section className="bg-[#E94444] px-[2rem] py-[4rem] flex flex-col justify-center items-center lg:pb-0 lg:pt-[2rem] ol:px-[4rem] xl:pt-[4rem]">
        <StepsInfo />
      </section>
      <section className="bg-[#F6F4F6] pt-[5rem]">
        <HeroEvents />
      </section>
    </main>
  );
}
