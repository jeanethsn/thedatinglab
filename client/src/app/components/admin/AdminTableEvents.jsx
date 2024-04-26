'use client'

import React from 'react'
import { useEffect, useState } from 'react';
import { getAllEvents, deleteEvent } from "@/app/services/event";
import { exportAttendance } from "@/app/services/exports";
import { Card, Typography, CardFooter,Button } from "@material-tailwind/react";
import AdminAddEvents from './AdminAddEvents';


export default function AdminTableEvents() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0); 
    const eventsPerPage = 3;
    
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
            const updatedEvents = events.filter(event => event.id !== eventId);
            setEvents(updatedEvents);
            console.log('eliminado')

        } catch (error) {
            console.error("Error al eliminar el evento:", error);
        }
    };

    const indexOfLastEvent = (currentPage + 1) * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleExportAttendance = async (eventId) => {
        try {
            const response = await exportAttendance(eventId);
            const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');

            link.href = url;
            link.setAttribute('download', 'event_attendance.xlsx');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            console.error('Error al exportar la asistencia del evento:', error);
        }
      };

      const [isAddEventOpen, setIsAddEventOpen] = useState(false);
      const handleToggleAddEvent = () => {
        setIsAddEventOpen(!isAddEventOpen); 
    };
    
    
  return ( 
        <>
        <div className='flex gap-4 mb-4'>
        <Button 
                    variant="filled" 
                    size="sm"
                    onClick={handleToggleAddEvent} // Cuando se hace clic, abre o cierra el componente
                >
                    Añadir Evento
                </Button>
        <Button 
            variant="filled"
            className='flex justify-center items-center gap-1' 
            size="sm"
            onClick={() => handleExportAttendance()} 
            >
            <img src="/assets/icon/icon-excel.svg" alt="Excel" /> Descargar Asistencia 
        </Button>
        </div>
        {isAddEventOpen && <AdminAddEvents isOpen={isAddEventOpen} onClose={handleToggleAddEvent} />}
        <Card>
            <table className="w-full table-auto text-left">
                <thead>
                    <tr>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Evento</Typography>
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
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Eliminar</Typography>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentEvents.map((event, index) => (
                        <tr key={index}>
                            <td className="p-4 w-[300px]">
                                <Typography variant="small" color="blue-gray" className="font-normal">{event.title}</Typography>
                            </td>
                            <td className="p-4 w-[300px]">
                                <Typography variant="small" color="blue-gray" className="font-normal">{event.shortDescription}</Typography>
                            </td>
                            <td className="p-4 w-[400px]">
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
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    <button onClick={() => handleDeleteEvent(event.id)}>
                                        <img src="/assets/icon/icon-delete.svg" alt="Eliminar" />
                                    </button>
                                </Typography>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
             <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
             <Typography variant="small" color="blue-gray" className="font-normal">
                Page {currentPage + 1} of {Math.ceil(events.length / eventsPerPage)}
             </Typography>
             <div className="flex gap-2">
             <Button 
                        variant="outlined" 
                        size="sm" 
                        onClick={() => setCurrentPage(currentPage === 0 ? currentPage : currentPage - 1)}
                    >
                        Anterior
                    </Button>
                    <Button 
                        variant="outlined" 
                        size="sm" 
                        onClick={() => setCurrentPage(currentPage === Math.ceil(events.length / eventsPerPage) - 1 ? currentPage : currentPage + 1)}
                    >
                        Siguiente
                    </Button>
             </div>
           </CardFooter>
        </Card>
        </>
  )
}
