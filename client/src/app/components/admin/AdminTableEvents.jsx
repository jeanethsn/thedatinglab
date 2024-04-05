'use client'

import React from 'react'
import { useEffect, useState } from 'react';
import { getAllEvents, deleteEvent } from "@/app/services/event";
import { Card, Typography } from "@material-tailwind/react";
import { useParams, useRouter } from "next/navigation";
import { useUser } from "@/app/providers/UserProvider";

export default function AdminTableEvents() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const [error, setError] = useState(false);
    const { user, isAdmin } = useUser();
  

    useEffect(() => {
        const getEvents = async () => {
            try {
                const response = await getAllEvents();
                setEvents(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log("error");
                setIsLoading(false);
            }
        };

        getEvents();
    }, []);

    const handleDeleteEvent = async (eventId) => {
        try {
            await deleteEvent(eventId);
            // Actualizar la lista de eventos después de eliminar el evento
            const updatedEvents = events.filter(event => event.id !== eventId);
            setEvents(updatedEvents);
            console.log('eliminado')

        } catch (error) {
            console.error("Error al eliminar el evento:", error);
        }
    };


  
  
  return (
          
            <table className="w-full table-auto text-left">
                <thead>
                    <tr>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Titulo</Typography>
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Titular</Typography>
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Descripción</Typography>
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Localización</Typography>
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Fecha</Typography>
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Hora</Typography>
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Editar</Typography>
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Eliminar</Typography>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event, index) => (
                        <tr key={index}>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">{event.title}</Typography>
                            </td>
                            <td className="p-4 w-[200px]">
                                <Typography variant="small" color="blue-gray" className="font-normal">{event.shortDescription}</Typography>
                            </td>
                            <td className="p-4 w-[300px]">
                                <Typography variant="small" color="blue-gray" className="font-normal">{event.description}</Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">{event.location}</Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">{event.date}</Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">{event.time}</Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">icon-edit</Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                {isAdmin && (
                                    <button onClick={() => handleDeleteEvent(event.id)}>
                                        <img src="/assets/icon/icon-delete.svg" alt="Eliminar" />
                                    </button>
                                )}
                                </Typography>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>



  )
}
