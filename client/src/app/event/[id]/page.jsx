"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from 'react';
import Image from "next/image";
import Button from "@/app/components/Button.jsx";
import {getEventById} from "@/app/services/event.js";
import Statement from "@/app/components/Statement.jsx";

function page() {
    const params = useParams();
    
    const [event, setEvent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchEvent = async () => {
          try {
  
                  const eventData = await getEventById(params.id);
                  setEvent(eventData);
               
  
          } catch (error) {

          }
      };
  
      fetchEvent(); 
  },[] ); 
  console.log(event)
    return (
        <>
        <Statement/>
    <div className="bg-pink-cream gap-10 flex justify-center items-center flex-col border-t-2 border-primary-color  ">
    <div className=" flex flex-col justify-center mt-[2rem] items-center md:flex md:flex-row w-full md:gap-[8rem]">
    <div className=" md:mb-[2rem] flex justify-center items-center w-[22rem] h-[22rem]  md:w-[25rem] md:h-[25rem]" 
    style={{ backgroundImage: `url(http://localhost:8000/storage/${event.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    </div>
    <div className="m-[1rem] md:w-[45%] md:flex md:flex-col items-center md:items-start max-w-md">
      <h1 className="leading-tight font-bold text-[2rem] text-left mb-[1rem]"> Cata de Vinos</h1>
      <p className="text-[1.10rem] font-bold text-justify mb-[1rem]">¡Descubre el poder de la conexión real a través del fascinante mundo de los vinos!</p>
      <p className="text-primary-color font-bold text-[1.5rem] mb-[1rem] ">DOM, 17 SEPT-19:00</p>
      <p className="text-[1rem] mb-[1rem]">¡Sumérgete en la emoción de descubrir nuevos sabores sin prejuicios preconcebidos! En esta experiencia única, te emparejaremos con vinos compatibles con tus gustos emocionales para que disfrutes de una cata a ciegas llena de sorpresas y deleite para tus sentidos.  </p>
      <p className="text-[1rem] flex items-center gap-[0.5rem]"> <span> <img src="/assets\icon\icon-location.svg" alt="Logo" className="h-4 w-auto" /> </span> Barcelona</p>
    </div>
  </div>
</div>


        </>
    );
  }
  
  export default page;