"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getEventById } from "@/app/services/event.js";
import Statement from "@/app/components/Statement.jsx";
import Button from "@/app/components/Button";

function page() {
  const params = useParams();
  const [event, setEvent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await getEventById(params.id);
        setEvent(eventData);
      } catch (error) {}
    };

    fetchEvent();
  }, []);

  return (
    <>
      <Statement />
      <div className="bg-pink-cream gap-10 flex justify-center items-center flex-col border-t-2 border-primary-color md:mb-[3rem] ">
        <div className=" flex flex-col justify-center items-center mt-[4rem] md:flex md:flex-row w-full md:gap-[8rem] md:mt-[5rem]">
          <div
            className=" rounded-md flex justify-center items-center w-[22rem] h-[22rem] mb-[2rem] md:w-[25rem] md:h-[22rem] md:mb-[2rem] "
            style={{
              backgroundImage: `url(http://localhost:8000/storage/${event.image})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className=" m-[1rem] md:w-[45%] md:flex md:flex-col items-center md:items-start ">
            <h1 className="leading-tight font-bold text-[2rem] text-left mb-[1rem]">
              {" "}
              {event.title}
            </h1>
            <p className="text-[1.10rem] font-semibold text-justify mb-[1rem] ">
              {event.shortDescription}
            </p>
            <p className="text-primary-color font-bold text-[1.5rem] mb-[1rem]  ">
              {" "}
              {event.date}
            </p>
            <p className="text-[1rem] mb-[1rem]"> {event.description} </p>
            <p className="text-[1rem] flex items-center gap-[0.5rem]">
              {" "}
              <span>
                {" "}
                <img
                  src="/assets\icon\icon-location.svg"
                  alt="Logo"
                  className="h-4 w-auto"
                />{" "}
              </span>{" "}
              {event.location}
            </p>

            <Button />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
