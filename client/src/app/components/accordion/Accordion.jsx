"use client";
import React, { useState } from "react";


 export default function Accordion(){
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
      title: 'Servicios',
      content: [
        {
          question: '¿Qué es Dating Lab?',
          answer:
            'The Dating Lab es una plataforma diferente que prioriza la conexión entre las personas. Ofreciendo una experiencia única para que los usuarios conozcan a otras personas de una manera diferente y divertida en la vida real. Nuestro objetivo es generar espacios y ambientes seguros que propicien la generación de conexiones entre personas reales.  A través de nuestra plataforma, los usuarios pueden reservar un espacio en nuestras experiencias, conocer 3 personas compatibles - o como diríamos en lenguaje dating posibles matches ;) - y disfrutar de una experiencia diferente.',
        },
        {
          question: '¿Cómo funciona Dating Lab?',
          answer:
            'Funciona mediante un formulario de compatibilidad que los usuarios deben completar, previo registro en nuestra plataforma. Después deberás seleccionar la o las actividades  en las que quieras participar, inscribirte,  esperar el envío de link de compra, y, posteriormente realizar el pago.   Queremos que tu experiencia en DatingLab sea la mejor, por eso intentamos que en nuestros eventos haya el mayor número de personas compatibles posibles. Además nuestra plataforma te mostrará perfiles de personas reales con un 70% o más de compatibilidad, con las que podrás coincidir y disfrutar en los eventos en los que te inscribas.',
            
        },
        {
          question: '¿Cómo puedo resgistrarme en Dating Lab?',
          answer:
            'Para registrarte en Dating Lab, simplemente crea una cuenta con tu información básica y completa el formulario de compatibilidad emocional.',
        },
      ],
    },
    {
      title: 'Experiencias',
      content: [
        {
          question: '¿Qué son las experiencias Dating Lab?',
          answer:
            'Las experiencias son oportunidades para que los usuarios se encuentren con sus citas compatibles en persona. Estos eventos se anunciarán en nuestra página principal.',
        },
        {
          question: '¿Cómo puedo asistir a una experiencia?',
          answer:
            'Para asistir a una experiencia, debes abonar el costo correspondiente y elegir la experiencia que más te guste. Luego, recibirás información detallada sobre el evento.',
        },
        {
          question: '¿Dónde se realizan las experiencias?',
          answer:
            'La ubicación de las experiencias puede variar dentro de Barcelona, así que asegúrate de revisar la información proporcionada en la página principal o la invitación al evento.',
        },
      ],
    },
    {
      title: 'Pagos y contacto',
      content: [
        {
          question: '¿Qué métodos de pago aceptan para las experiencias?',
          answer:
            'Aceptamos pagos a través de Bizum. Deberás contactarnos principalmente a través del número de móvil: 111111111 para realizar el pago.',
        },
        {
          question:
            '¿Cómo puedo obtener más información sobre una experiencia despues de realizar el pago?',
          answer:
            'Una vez que hayas realizado el pago, te proporcionaremos información detallada sobre la experiencia, incluyendo la ubicación, fecha y hora, y cualquier otra información relevante.',
        },
      ],
    },
    {
      title: 'Requisitos de seguridad',
      content: [
        {
          question:
            '¿Por qué se solicita información sobre alergias para asistir a las experiencias?',
          answer:
            'Solicitamos información sobre alergias para garantizar la seguridad de todos los asistentes a nuestros eventos. Algunas experiencias pueden incluir alimentos y bebidas, por lo que es importante conocer las alergias de los participantes.',
        },
        {
          question: '¿Cómo se manejarán mis datos personales en Dating Lab?',
          answer:
            'La privacidad y seguridad de tus datos son una prioridad para nosotros. Puedes consultar nuestra política de privacidad para obtener más información sobre cómo manejamos tus datos.',
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 mb-16">
      <h1 className="text-3xl font-bold text-center mb-4  text-red-400 mt-20">Preguntas Frecuentes </h1>
      <h2 className="text-xl text-center mb-8  text-red-300 ">
        Aqui algunas preguntas frecuentes que nos hacen a menudo nuestros
        usuarios
      </h2>
      {sections.map((section, sectionIndex) => (
        <div
          key={section.title}
          className="section border-t-0 border-gray-200 pb-4 "
        >
          <h3 className="flex justify-center text-2xl cursor-pointer mb-2 ease-in-out text-red-900 my-8 font-bold">{section.title}</h3>
          <ul>
            {section.content.map((item, questionIndex) => (
              <li
                key={item.question}
                className="cursor-pointer hover:bg-gray-100 transition-all duration-300 rounded  border-2 border-red-200 bg-red-50 my-2"
                onClick={() => handleQuestionClick(sectionIndex, questionIndex)}
              >
                <h4 className="p-4 text-xl text-red-400 font-bold">{item.question}</h4>
                {activeSections[sectionIndex] === questionIndex && (
                  <p className="text-lg p-5">{item.answer}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};



