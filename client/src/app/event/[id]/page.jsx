"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import { EventService } from '@/services/events';


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
          {isLoading ? (
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
          )}
      </>
  );
}

export default page;