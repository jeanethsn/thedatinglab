import React from "react";
import { Pregunta } from "./Pregunta";

export const Acordeon = ({ preguntas }) => {
  return (
    <div className="acordeon">
      {preguntas.map((pregunta) => (
        <Pregunta key={pregunta.id} pregunta={pregunta.titulo} respuesta={pregunta.respuesta} />
      ))}
    </div>
  );
};
