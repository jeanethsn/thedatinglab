"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import { getEventsById } from '@/services/events';

function Page() {
    const router = useRouter();
    const [event, setEvent] = useState({});
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        const fetchEvent = async () => {
            try {
                if (router.query && router.query.id) {
                    const eventData = await getEventsById(router.query.id);
                    setEvent(eventData);
                }
                setIsLoading(false);
            } catch (error) {
                console.error("No se pudo obtener el evento:", error);
                setIsLoading(false);
            }
        };
    
        fetchEvent();
    }, []);
  
    return (
        <>
            {isLoading ? (
                <p>Cargando...</p>
            ) : (
   
                    <div>
                        <h1>{event.title}</h1>
                        <p>{event.description}</p>
                    </div>
     
            )}
        </>
    );
}

export default Page;
