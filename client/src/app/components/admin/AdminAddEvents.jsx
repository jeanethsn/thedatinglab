'use client'

import { addEvent } from "@/app/services/event";
import { authHeader } from "@/app/services/user";
import { useState } from 'react';
import React from 'react'
import {
    Card,
    Input,
    Textarea,
    Button,
    Typography,
  } from "@material-tailwind/react";
  

export default function AdminAddEvents() {
    const [formData, setFormData] = useState({
        title: "",
        shortDescription: "",
        description: "",
        location: "",
        date: "",
        time: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const headers = authHeader(); 
            const response = await addEvent(formData, headers); 
            window.location.reload();

        } catch (error) {
            console.error("Error al añadir el evento:", error);
        }
    };

  return (
    <Card className="w-full text-center">
        <Typography variant="h4" color="blue-gray">
            Añadir un evento
        </Typography>
      <form className="mt-8 mb-2 w-full flex justify-center gap-5" onSubmit={handleSubmit} enctype="multipart/form-data">
        <div className="mb-1 w-[40%] flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
           Titulo del evento
            </Typography>
            <Input
                name="title"
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                className: "before:content-none after:content-none",
                }}
                onChange={handleChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
                Breve Descripción
            </Typography>
            <Input
                name="shortDescription"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                className: "before:content-none after:content-none",
                }}
                onChange={handleChange}          
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
                Descripción
            </Typography>
            <Textarea
                name="description"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                className: "before:content-none after:content-none",
                }}
                onChange={handleChange}          
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
                Localización
            </Typography>
            <Input
                name='location'
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                className: "before:content-none after:content-none",
                }}
                onChange={handleChange}          
            />
            </div>
            <div className="mb-1 w-[40%] flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
                Fecha
            </Typography>
            <Input
                name='date'
                type="date"
                size="lg"     
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                className: "before:content-none after:content-none",
                }}
                onChange={handleChange}          
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
                Hora
            </Typography>
            <Input
                name='time'
                type="time"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                className: "before:content-none after:content-none",
                }}
                onChange={handleChange}          
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
                Imagen
            </Typography>
            <Input
                name='image'
                type="file"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                className: "before:content-none after:content-none",
                }}
                onChange={handleChange}          
            />
        <Button type='submit' className="mt-6" fullWidth>
          Añadir
        </Button>
        <Button type='reset' className="mt-6" fullWidth>
          Cancelar
        </Button>
        </div>
      </form>
    </Card>
  )
}
