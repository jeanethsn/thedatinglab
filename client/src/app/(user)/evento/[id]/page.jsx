"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getEventById } from "@/app/services/event.js";
import Statement from "@/app/components/Statement.jsx";
import Button from "@/app/components/Button";
import { formatearFecha, horaFormato } from "@/app/utils/date.js";
import { useUser } from "@/app/providers/UserProvider";
import { Loading } from "@/app/components/events/CardList";

function page() {
  const params = useParams();
  const [event, setEvent] = useState([]);
  const { user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // if (!user?.email) router.push("/");

    const fetchEvent = async () => {
      try {
        const eventData = await getEventById(params.id);
        setEvent(eventData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchEvent();
    // [user.email]
  }, []);

  if (isLoading) return <Loading />;

  return (
    <main className=" bg-pink-grey-bg  border-t-2 border-primary-color ">
      <div className="">
        <Statement />
      </div>

      <div className="px-[2rem] gap-10 flex justify-center flex-col pb-[4rem] lg:px-[4.5rem] lg:py-[3rem] max-w-[1400px] ol:mx-auto ol:px-[8rem] ol:py-[4rem] ol:pb-[8rem]">
        <div className="max-w-[22rem] mx-auto flex flex-col justify-center items-center mt-[4rem] md:flex md:flex-row md:max-w-full w-full md:gap-[2rem] md:mt-[3rem] ol:gap-[4rem]">
          <Button
            as="Link"
            href="/eventos"
            className="text-black flex items-center text-[1rem] font-bold"
          >
            <Image
              src={"/assets/icon/icon-volver.svg"}
              width={20}
              height={20}
              alt="icono de regresar"
            />
            Volver atrás
          </Button>
          <div
            className=" rounded-md flex justify-center items-center w-full h-[18rem] shadow-lg  md:basis-[50%] md:h-[25rem] ol:basis-[60%] ol:h-[30rem]"
            style={{
              backgroundImage: `url(http://localhost:8000/storage/${event.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className=" md:w-[45%] md:flex md:flex-col items-center md:items-start ">
            <h1 className="font-nunito leading-tight text-start font-bold text-[2rem] mb-[1rem] mt-[2rem] md:text-[2.2rem] md:mt-0 ol:text-[2.5rem] ol:mb-0">
              {" "}
              {event.title}
            </h1>
            {/* <h1 className="font-madi leading-tight text-center font-bold text-[2.8rem] mb-[1rem] mt-[2rem] md:text-[1rem]">
              {" "}
              {event.title}
            </h1> */}
            <p className="text-[0.9rem] font-semibold text-justify mb-[1rem] ol:text-[1.1rem] ol:mb-[1rem]">
              {event.shortDescription}
            </p>
            <p className="text-primary-color font-bold text-[1.2rem] mb-[1rem] md:text-[1rem] ol:text-[1.3rem]">
              {" "}
              {formatearFecha(event.date)} {horaFormato(event.time)}
            </p>
            <p className="text-[1rem]"> {event.description} </p>
            <div className="flex gap-[0.4rem] items-center mt-[0.3rem] mb-[1.2rem] md:mt-[1rem]">
              <Image
                src={"/assets/icon/icon-location.svg"}
                width={15}
                height={15}
                alt="icono de localizacion"
              />
              <p className="break-words text-[1rem] font-bold ol:text-[1.1rem]">
                {event.location}
              </p>
            </div>
            <div className="w-full">
              <Button
                color="primary"
                children="Apuntarme"
                className="block text-center py-[0.5rem] sm:text-[1rem] text-white text-[1rem] font-semibold lg:mt-[1.4rem] mt-0 lg:py-[0.3rem] ol:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1rem]"
                style={{
                  transition:
                    "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
