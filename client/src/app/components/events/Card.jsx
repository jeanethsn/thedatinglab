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
        <img src={``} alt="card-image" className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-primary-color text-sm">
            {formatearFecha(eventDate.date)} <time>{eventDate.time}</time>
          </p>
        </div>
        <h2> {eventDate.title}</h2>
        <p> {eventDate.description}</p>
        <p>{eventDate.location}</p>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          color="primary"
          as="Link"
          className="text-white"
          href={`/event/${eventDate.id}`}
        >
          Ver más
        </Button>
      </CardFooter>
    </Card>
  );
}
