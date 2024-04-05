// En EventDetails.jsx
import React, { useState, useEffect } from "react";
import { getEventsById } from "@/services/events";

function EventDetails({ eventId }) {
  const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        if (eventId) {
          const eventData = await getEventsById(eventId);
          setEvent(eventData);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  return (
    <main>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
        </div>
      )}
    </main>
  );
}

export default EventDetails;
