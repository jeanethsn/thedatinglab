"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getEventById } from "@/app/services/event.js";
import withAuthentication from "@/app/components/hoc/withAuthentication";
import Statement from "@/app/components/Statement.jsx";
import Button from "@/app/components/Button";
import { formatearFecha, horaFormato } from "@/app/utils/date.js";
import { Loading } from "@/app/components/events/CardList";
import { registerForEvent } from "@/app/services/user";
import ModalConfirmEvent from "@/app/components/modal/ModalConfirmEvent";
import { toastMessage } from "@/app/components/Toast";
import { generateStaticParams } from 'next/dist/shared/lib/utils';



function Page() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  console.log({ params });
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await getEventById(params.id);
        setEvent(eventData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    };
    fetchEvent();
  }, []);

  const handleRegisterForEvent = async (handleOpenModal) => {
    try {
      const response = await registerForEvent(params.id);
      handleOpenModal();
    } catch (error) {
      const status = error.response.status;
      if (status === 422) {
        toastMessage({
          title: "¡Confirmado!",
          text: "❤️Te has apuntado anteriormente a este evento. ¡Nos vemos allí!",
          icon: "/assets/icon/events-user.svg",
        });
      }
      console.log(error.response.data.msg);
    }
  };

  if (isLoading) return <Loading />;
  return (
    <>
      <main className=" bg-pink-grey-bg  border-t-2 border-primary-color ">
        <>
          <div className="">
            <Statement />
          </div>

          <div className="px-[2rem] gap-10  pb-[4rem] lg:px-[4.5rem] lg:pt-[3rem] lg:pb-[5rem] max-w-[1400px] ol:mx-auto ol:px-[8rem] ol:py-[4rem] ol:pb-[8rem]">
            <div className="max-w-[22rem] mx-auto  mt-[4rem]  md:max-w-full w-full  md:mt-[3rem] ">
              <Button
                as="Link"
                href="/eventos"
                className="text-black flex items-center text-[1rem] font-bold gap-[0.5rem] mb-[1rem] ol:text-[1.2rem]"
              >
                <Image
                  src={"/assets/icon/icon-volver.svg"}
                  width={20}
                  height={20}
                  alt="icono de regresar"
                  className="ol:w-[1.5rem]"
                />
                Volver atrás
              </Button>
              <div className="flex justify-center flex-col md:flex-row md:gap-[2rem] ol:gap-[4rem]">
                <div
                  className=" rounded-md flex justify-center items-center w-full h-[18rem] shadow-lg  md:basis-[50%] md:h-[25rem] ol:basis-[60%] ol:h-[30rem]"
                  style={{
                    backgroundImage: `url(http://127.0.0.1:8000/storage/${event.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className=" md:w-[45%] md:flex md:flex-col items-center md:items-start lg:mt-[4rem]">
                  <h1 className="font-nunito leading-tight text-start font-bold text-[2rem] mb-[1rem] mt-[2rem] md:text-[2.2rem] md:mt-0 ol:text-[2.5rem] ol:mb-0">
                    {" "}
                    {event.title}
                  </h1>
                  <p className="text-[0.9rem] font-semibold text-justify mb-[1rem] ol:text-[1.1rem] ol:mb-[1rem]">
                    {event.shortDescription}
                  </p>
                  <p className="text-primary-color font-bold text-[1.2rem] mb-[1rem] md:text-[1rem] ol:text-[1.3rem]">
                    {" "}
                    {formatearFecha(event?.date)} {horaFormato(event?.time)}
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

                  <ModalConfirmEvent
                    renderModalConfirmEvent={(handleOpenModalConfirmEvent) => (
                      <div className="w-full">
                        <Button
                          color="primary"
                          children="Apuntarme"
                          onClick={() =>
                            handleRegisterForEvent(handleOpenModalConfirmEvent)
                          }
                          className="block text-center py-[0.5rem] sm:text-[1rem] text-white text-[1rem] font-semibold lg:mt-[1.4rem] mt-0 lg:py-[0.3rem] ol:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1rem]"
                          style={{
                            transition:
                              "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
                          }}
                        />
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      </main>
    </>
  );
}

export default withAuthentication(Page);
