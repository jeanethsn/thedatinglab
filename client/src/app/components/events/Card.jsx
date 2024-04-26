"use client";

import { formatearFecha, horaFormato, isPastEvent } from "@/app/utils/date.js";
import { useUser } from "@/app/providers/UserProvider";
import Button from "@/app/components/Button.jsx";
import Image from "next/image";

export default function Card({ eventDate }) {
  const { user } = useUser();

  const expiredEvent = isPastEvent(eventDate.date);
  return (
    <div className="max-w-[22rem] min-w-[18rem] w-[25rem]  sm:w-full sm:min-w-[12rem] flex flex-col items-center flex-wrap mx-auto">
      <div
        className={`${expiredEvent ? "opacity-[0.5] " : "opacity-[1]"}
         w-full min-h-[12rem] small:h-[14rem] sm:!h-[12rem] md:!h-[14rem] lg:!h-[12rem] ol:!h-[15rem] rounded-md shadow-md`}
        style={{
          backgroundImage: `url(http://127.0.0.1:8000/storage/${eventDate.image})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p
          className={`${
            expiredEvent
              ? " text-white  bg-gray-600 "
              : " text-white  bg-red-orange "
          } text-[1rem] text-white  bg-red-orange inline py-[0.1rem] pl-[0.5rem] pr-[3rem] rounded-tr-xl absolute`}
        >
          {expiredEvent ? "Evento caducado" : "Evento próximo"}
        </p>
      </div>
      <div
        className="bg-white rounded-md relative bottom-[2rem] w-[90%] h-[12rem] md:h-[14rem] ol:h-[16rem] py-[1rem] px-[0.8rem] shadow-lg ol:px-[1.5rem] ol:py-[2rem]"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px; rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      >
        <div className="mb-2 flex items-center justify-between">
          <p
            className={`${
              expiredEvent ? "text-[#a97e7e] " : "text-primary-color "
            } text-sm break-words font-semibold md:text-[1rem]`}
          >
            {formatearFecha(eventDate.date)} {horaFormato(eventDate.time)}
          </p>
        </div>
        <h2
          className=" text-[0.8rem] font-bold leading-[1rem] mb-[0.5rem] md:text-[1rem] md:leading-[1.1rem] md:mb-[1rem]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {eventDate.title}
        </h2>
        <p
          className="text-[0.8rem] ol:text-[1rem]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {" "}
          {eventDate.shortDescription}
        </p>
        <div className="flex gap-[0.4rem] items-center mt-[0.3rem] mb-[1.2rem] md:mt-[1rem]">
          <Image
            src={"/assets/icon/icon-location.svg"}
            width={15}
            height={15}
            alt="icono de localizacion"
            className={`${
              expiredEvent ? "filter sepia-[1] " : "filter sepia-0 "
            }`}
          />
          <p
            className="break-words text-[1rem] font-bold"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {eventDate.location}
          </p>
        </div>
        <div className="w-[92%] absolute bottom-[1rem] left-1/2  transform -translate-x-1/2 ">
          <Button
            color="primary"
            children={`${expiredEvent ? "Finalizado" : "Ver más"}`}
            as="Link"
            className={`${
              expiredEvent
                ? "pointer-events-none border-2 border-gray-600 bg-inherit opacity-[0.5]"
                : "pointer-events-auto  text-white   opacity-[1]"
            } block text-center  sm:text-[1rem] text-[1rem] font-semibold lg:mt-[1.4rem] lg:py-[0.3rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1rem]`}
            style={{
              transition:
                "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
            }}
            href={`/evento/${eventDate.id}`}
          />
        </div>
      </div>
    </div>
  );
}
