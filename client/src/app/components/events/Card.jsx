"use client";

import { formatearFecha, isPastEvent } from "@/app/utils/date.js";
import Button from "@/app/components/Button.jsx";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

export default function CardEvent({ eventDate }) {
  return (
    <Card>
      <CardHeader shadow={false} floated={false} className="h-52">
        {/* Como integrar la imagen ? */}
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-primary-color text-sm">
            {formatearFecha(eventDate.date)} <time>{eventDate.time}</time>
          </p>
        </div>
        <h2> {eventDate.title}</h2>
        <p> {eventDate.description}</p>
        {/* Ubicación falta añadir en la data */}
        <p></p>
      </CardBody>
      <CardFooter className="pt-0">
        <Button color="primary" className="text-white">
          Ver más
        </Button>
      </CardFooter>
    </Card>
  );
}
