"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from 'react';
import Button from "@/app/components/Button";
import {getEventById} from "@/app/services/event.js";
import Statement from "@/app/components/Statement.jsx";

function page() {
    const params = useParams();
    
    const [event, setEvent] = useState([]);

    useEffect(() => {
      const fetchEvent = async () => {
          try {
  
                  const eventData = await getEventById(params.id);
                  setEvent(eventData);
  
          } catch (error) {
              console.error("No se pudo obtener el evento:", error);

          }
      };
  
      fetchEvent(); 
  },[] ); 
  
    return (
        <>
<Statement/>
    
   <div>
   <Image className=""
    src={event.image}
    alt="Icono home"
    width={200}
    height={200}
  />
  <div className="m-[1rem]">
      <h1 className="leading-tight font-bold text-[2rem] text-left"> {event.title} </h1>
      <p className="text-[1.10rem] font-bold text-justify">{event.description}</p>
  <p className="text-primary-color font-bold text-[1.5rem]">{event.date}</p>
  <p className="text-[1rem]">¡Sumérgete en la emoción de descubrir nuevos sabores sin prejuicios preconcebidos! En esta experiencia única, te emparejaremos con vinos compatibles con tus gustos emocionales para que disfrutes de una cata a ciegas llena de sorpresas y deleite para tus sentidos. </p>
  
  
  <p>barcelona</p>
  <Button/>
  </div>
  
  </div>
  
        </>
    );
  }
  
  export default page;