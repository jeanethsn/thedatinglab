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
    <main className="px-[2rem] bg-pink-grey-bg  border-t-2 border-primary-color">
      <div className="hidden md:block">
        <Statement />
      </div>

      <div className=" gap-10 flex justify-center items-center flex-col md:mb-[3rem] ">
        <div className=" flex flex-col justify-center items-center mt-[4rem] md:flex md:flex-row w-full md:gap-[8rem] md:mt-[5rem]">
          <div
            className=" rounded-md flex justify-center items-center w-full h-[18rem] shadow-lg mb-[2rem] md:w-[25rem] md:h-[22rem] md:mb-[2rem] "
            style={{
              backgroundImage: `url(http://localhost:8000/storage/${event.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className=" md:w-[45%] md:flex md:flex-col items-center md:items-start ">
            <h1 className="leading-tight font-bold text-[1.4rem] text-left mb-[1rem]">
              {" "}
              {event.title}
            </h1>
            <p className="text-[0.9rem] font-semibold text-justify mb-[1rem] ">
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
    </main>
  );
}

export default page;
