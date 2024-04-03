"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import { getEventById } from '@/services/events';
import Image from "next/image";
import Button from "@/app/components/Button";



function page() {
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
        try {
            const eventId = router.query.id; // Obtener el ID del evento desde params
            if (eventId) {
                const eventData = await EventService.getEvent(eventId);
                console.log("Datos del evento recibidos:", eventData);
                setEvent(eventData);
            }
            setIsLoading(false);
        } catch (error) {
            console.error("No se pudo obtener el evento:", error);
            setIsLoading(false);
        }
    };

    fetchEvent(); 
}, [router.params]); // Utilizar router.params como dependencia

  return (
      <>
<main>
    <div className="lg:bg-red-600 hidden">
    <p> ¿ Y ahora que ?</p>
    <p> ¿ Te hemos preparado distintos eventos para que conozcas a tus mattch! 
        Toca cada evento para ver todos los detalles ¡Suerte!?</p>
          {/* {isLoading ? (
              <p>Cargando...</p>
          ) : (
              <div>
                  {event ? (
                      <>
                          <h1>{event.title}</h1>
                          <p>{event.description}</p>
                          <h1>hola</h1>
                      </>
                  ) : (
                      <p>No se encontró el evento</p>
                  )}
              </div>
          )} */}
 </div>
 <div>
 <Image className=""
  src="/assets/image/Rectangle_exm.png"
  alt="Icono home"
  width={200}
  height={200}
/>
<div className="m-[1rem]">
    <h1 className="font-bold text-[3.125rem] text-left"> Cata de vinos </h1>
    <p className="text-[1.10rem] font-bold text-justify">¡Descubre el poder de la conexión real a través del fascinante mundo de los vinos!</p>
<p className="text-primary-color font-bold text-[1.5rem] ">DOM, 17 SEPT-19:00</p>
<p className="text-[1rem]">¡Sumérgete en la emoción de descubrir nuevos sabores sin prejuicios preconcebidos! En esta experiencia única, te emparejaremos con vinos compatibles con tus gustos emocionales para que disfrutes de una cata a ciegas llena de sorpresas y deleite para tus sentidos. </p>


<p>barcelona</p>
<Button/>
</div>

</div>

      </main>
      </>
  );
}

export default page;