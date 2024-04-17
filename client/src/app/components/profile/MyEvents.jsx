import React from 'react'
import Card from '../events/Card'
import { useState, useEffect } from "react";
import { getEventsbyUser } from "@/app/services/event";
import Pagination from "@/app/components/events/Pagination";
import useBreakpoint from "use-breakpoint";
import { useSearchParams, useRouter } from "next/navigation";
import { sortEventDataByDate } from "@/app/utils/date.js";
import { useUser } from "@/app/providers/UserProvider";

const BREAKPOINTS = { mobile: 0, desktop: 930 };



export default function MyEvents() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [totalPages, setTotalPages] = useState(0);
    const { breakpoint } = useBreakpoint(BREAKPOINTS);
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { user } = useUser();

    useEffect(() => {
        const fetchEventsAll = async () => {
            try {
                const eventData = await getEventsbyUser(user.id); 
                setEvents(eventData.event);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchEventsAll(); 
    }, [user.id]); 

    return (
        <>
            {events.length > 0 ? (
                <section className="w-full max-w-[1200px] xxl:max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mb-[4rem] lg:mb-0 py-12 items-center">
                    {events.map((eventDate) => (
                        <Card key={eventDate.id} eventDate={eventDate} />
                    ))}
                </section>
            ) : (
                <section className="text-red-600 text-[1rem] mt-12 px-[10%] lg:px-0">
                    <p>¡Aún no te has apuntado a ningún evento!</p>
                    <br/>
                    <a href="/eventos">
                        <strong>Haz clic aquí para descubrir eventos disponibles y conocer tus matches.</strong>
                    </a>
                </section>
            )}
        </>
    );
}