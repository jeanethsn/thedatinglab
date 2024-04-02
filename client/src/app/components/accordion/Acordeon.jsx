import React, { useState } from "react";

const Accordion = () => {
  const [activeSections, setActiveSections] = useState({});

  const handleQuestionClick = (sectionIndex, questionIndex) => {
    setActiveSections((prevActiveSections) => ({
      ...prevActiveSections,
      [sectionIndex]: prevActiveSections[sectionIndex] === questionIndex ? null : questionIndex,
    }));
  };

  const sections = [
    {
      title: "Servicios",
      content: [
        {
          question: "¿Qué es Dating Lab?",
          answer: "The Dating Lab es una plataforma de citas que prioriza la compatibilidad emocional sobre la física, ofreciendo una experiencia única para que los usuarios conozcan a sus posibles parejas de una manera diferente.",
        },
        {
          question: "¿Cómo funciona Dating Lab?",
          answer: "Funciona mediante un formulario de compatibilidad que los usuarios deben completar. Nuestra plataforma luego les mostrará perfiles de personas con un 70% o más de compatibilidad emocional.",
        },
        {
          question: "¿Cómo puedo resgistrarme en Dating Lab?",
          answer: "Para registrarte en Dating Lab, simplemente crea una cuenta con tu información básica y completa el formulario de compatibilidad emocional.",
        },
      ],
    },
    {
      title: "Experiencias",
      content: [
        {
          question: "¿Qué son las experiencias Dating Lab?",
          answer: "Las experiencias son oportunidades para que los usuarios se encuentren con sus citas compatibles en persona. Estos eventos se anunciarán en nuestra página principal.",
        },
        {
          question: "¿Cómo puedo asistir a una experiencia?",
          answer: "Para asistir a una experiencia, debes abonar el costo correspondiente y elegir la experiencia que más te guste. Luego, recibirás información detallada sobre el evento.",
        },
        {
          question: "¿Dónde se realizan las experiencias?",
          answer: "La ubicación de las experiencias puede variar dentro de Barcelona, así que asegúrate de revisar la información proporcionada en la página principal o la invitación al evento.",
        },
      ],
    },
    {
      title: "Pagos y contacto",
      content: [
        {
          question: "¿Qué métodos de pago aceptan para las experiencias?",
          answer: "Aceptamos pagos a través de Bizum. Deberás contactarnos principalmente a través del número de móvil: 111111111 para realizar el pago.",
        },
        {
          question: "¿Cómo puedo obtener más información sobre una experiencia despues de realizar el pago?",
          answer: "Una vez que hayas realizado el pago, te proporcionaremos información detallada sobre la experiencia, incluyendo la ubicación, fecha y hora, y cualquier otra información relevante.",
        },
      ],
    },
    {
      title: "Requisitos de seguridad",
      content: [
        {
          question: "¿Por qué se solicita información sobre alergias para asistir a las experiencias?",
          answer: "Solicitamos información sobre alergias para garantizar la seguridad de todos los asistentes a nuestros eventos. Algunas experiencias pueden incluir alimentos y bebidas, por lo que es importante conocer las alergias de los participantes.",
        },
        {
          question: "¿Cómo se manejarán mis datos personales en Dating Lab?",
          answer: "La privacidad y seguridad de tus datos son una prioridad para nosotros. Puedes consultar nuestra política de privacidad para obtener más información sobre cómo manejamos tus datos.",
        },
      ],
    },
  ];

  return (
    <div>
      {sections.map((section, sectionIndex) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
          <ul>
            {section.content.map((item, questionIndex) => (
              <li key={item.question} onClick={() => handleQuestionClick(sectionIndex, questionIndex)}>
                <h3>{item.question}</h3>
                {activeSections[sectionIndex] === questionIndex && <p>{item.answer}</p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
















