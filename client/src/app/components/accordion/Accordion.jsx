"use client";
import React, { useState } from "react";

export default function Accordion() {
  const [activeSections, setActiveSections] = useState({});

  const handleQuestionClick = (sectionIndex, questionIndex) => {
    setActiveSections((prevActiveSections) => ({
      ...prevActiveSections,
      [sectionIndex]:
        prevActiveSections[sectionIndex] === questionIndex
          ? null
          : questionIndex,
    }));
  };

  const sections = [
    {
      title: "Servicios",
      content: [
        {
          question: "¿Qué es Dating Lab?",
          answer:
            "The Dating Lab es una plataforma de citas que prioriza la compatibilidad emocional sobre la física, ofreciendo una experiencia única para que los usuarios conozcan a sus posibles parejas de una manera diferente.",
        },
        {
          question: "¿Cómo funciona Dating Lab?",
          answer:
            "Funciona mediante un formulario de compatibilidad que los usuarios deben completar. Nuestra plataforma luego les mostrará perfiles de personas con un 70% o más de compatibilidad emocional.",
        },
        {
          question: "¿Cómo puedo resgistrarme en Dating Lab?",
          answer:
            "Para registrarte en Dating Lab, simplemente crea una cuenta con tu información básica y completa el formulario de compatibilidad emocional.",
        },
      ],
    },
    {
      title: "Experiencias",
      content: [
        {
          question: "¿Qué son las experiencias Dating Lab?",
          answer:
            "Las experiencias son oportunidades para que los usuarios se encuentren con sus citas compatibles en persona. Estos eventos se anunciarán en nuestra página principal.",
        },
        {
          question: "¿Cómo puedo asistir a una experiencia?",
          answer:
            "Para asistir a una experiencia, debes abonar el costo correspondiente y elegir la experiencia que más te guste. Luego, recibirás información detallada sobre el evento.",
        },
        {
          question: "¿Dónde se realizan las experiencias?",
          answer:
            "La ubicación de las experiencias puede variar dentro de Barcelona, así que asegúrate de revisar la información proporcionada en la página principal o la invitación al evento.",
        },
      ],
    },
    {
      title: "Pagos y contacto",
      content: [
        {
          question: "¿Qué métodos de pago aceptan para las experiencias?",
          answer:
            "Aceptamos pagos a través de Bizum. Deberás contactarnos principalmente a través del número de móvil: 111111111 para realizar el pago.",
        },
        {
          question:
            "¿Cómo puedo obtener más información sobre una experiencia despues de realizar el pago?",
          answer:
            "Una vez que hayas realizado el pago, te proporcionaremos información detallada sobre la experiencia, incluyendo la ubicación, fecha y hora, y cualquier otra información relevante.",
        },
      ],
    },
    {
      title: "Requisitos de seguridad",
      content: [
        {
          question:
            "¿Por qué se solicita información sobre alergias para asistir a las experiencias?",
          answer:
            "Solicitamos información sobre alergias para garantizar la seguridad de todos los asistentes a nuestros eventos. Algunas experiencias pueden incluir alimentos y bebidas, por lo que es importante conocer las alergias de los participantes.",
        },
        {
          question: "¿Cómo se manejarán mis datos personales en Dating Lab?",
          answer:
            "La privacidad y seguridad de tus datos son una prioridad para nosotros. Puedes consultar nuestra política de privacidad para obtener más información sobre cómo manejamos tus datos.",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4  mb-24 lg:px-16 ol:px-28 ol:mt-[10rem]">
      <h1 className="text-3xl font-bold text-center mb-4  text-red-400 mt-20 ol:text-[3rem]">
        Preguntas Frecuentes{" "}
      </h1>
      <h2 className="text-xl text-center text-red-300 mb-28 ol:text-[1.5rem]">
        Aqui algunas preguntas frecuentes que nos hacen a menudo nuestros
        usuarios
      </h2>
      {sections.map((section, sectionIndex) => (
        <div
          key={section.title}
          className="section border-t-0 border-gray-200 pb-8 "
        >
          <h3 className="flex justify-center text-2xl cursor-pointer mb-4 ease-in-out text-red-900 my-8 font-bold ol:mb-10 ol:text-[2rem]">
            {section.title}
          </h3>
          <ul>
            {section.content.map((item, questionIndex) => (
              <li
                key={item.question}
                className="cursor-pointer hover:bg-gray-100 transition-all duration-300 rounded  border-2 border-red-200 bg-red-50 my-2 lg:py-[0.5rem]"
                onClick={() => handleQuestionClick(sectionIndex, questionIndex)}
              >
                <h4 className="p-4 text-xl text-red-400 font-bold ol:!text-[1.4rem] ol:px-8">
                  {item.question}
                </h4>
                {activeSections[sectionIndex] === questionIndex && (
                  <p className="text-lg p-8">{item.answer}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
