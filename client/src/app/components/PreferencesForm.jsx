/* Compatibility test */
"use client";

import { createPreferences } from "../services/preferencesService";
import Button from "@/app/components/Button.jsx";
import { useState } from "react";
import { Input } from "@material-tailwind/react";

const PreferencesForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const totalQuestions = 15;

  const [formData, setFormData] = useState({
    birthdate: "",
    gender: "",
    looksFor: "",
    ageRange: "",
    sexoAffective: "",
    heartState: "",
    hasChildren: "",
    datesParents: "",
    values1: "",
    values2: "",
    values3: "",
    prefers1: "",
    prefers2: "",
    catsDogs: "",
    rrss: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formatDate = (dateString) => {
    const parts = dateString.split("-");
    const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    return formattedDate;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createPreferences(formData);
      const formattedDate = formatDate(formData.birthdate);
      //setFormData({ ...response });
      setFormData({
        birthdate: "",
        gender: "",
        looksFor: "",
        ageRange: "",
        sexoAffective: "",
        heartState: "",
        hasChildren: "",
        datesParents: "",
        values1: "",
        values2: "",
        values3: "",
        prefers1: "",
        prefers2: "",
        catsDogs: "",
        rrss: "",
      });
      setCurrentQuestion(0);
      console.log("Preferencia creada correctamente:", response.message);
    } catch (error) {
      console.error("Error:", error.response.data.validation_errors);
    }
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  // Renderizar la pregunta actual
  const renderCurrentQuestion = () => {
    const question = questions[currentQuestion];
    if (!question) return null;
    if (question.number === "birthdate") {
      // Renderizar input de fecha
      return (
        <div className="mb-[1rem]">
          <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">{question.text}</label>
          <Input
            type="date"
            name={question.number}
            value={formData[question.number]}
            onChange={handleChange}
            required
          />
        </div>
      );
    } else if (question.number === "rrss") {
      // Renderizar input de texto
      return (
        <div className="mb-[1rem]">
          <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">{question.text}</label>
          <Input
            type="text"
            name={question.number}
            value={formData[question.number]}
            onChange={handleChange}
            placeholder="Escribe tu perfil de Instagram"
          />
        </div>
      );
    } else {
      // Renderizar otras preguntas con opciones
      return (
        <div className="mb-[1rem]">
          <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">{question.text}</label>
          {question.options.map((option, index) => (
            <div className="w-1/3 px-2 mb-2" key={index}>
              <label>
                <input
                  type="radio"
                  name={question.number}
                  value={option.value}
                  onChange={handleChange}
                  checked={formData[question.number] === option.value}
                  required
                />
                <span className="ml-2">{option.label}</span>
              </label>
            </div>
          ))}
        </div>
      );
    }
  };

  const questions = [
    { number: "birthdate", text: "Introduce tu fecha de nacimiento", options: [] },
    {
      number: "gender",
      text: "¿Con qué género te identificas?",
      options: [
        { value: "mujer", label: "Mujer" },
        { value: "hombre", label: "Hombre" },
        { value: "no binario", label: "No binario" },
      ],
    },
    {
      number: "looksFor",
      text: "Estoy interesada/o en conocer a...",
      options: [
        { value: "mujer", label: "Mujer" },
        { value: "hombre", label: "Hombre" },
        { value: "no binario", label: "No binario" },
        { value: "todo", label: "Todo" },
      ],
    },
    {
      number: "ageRange",
      text: "Rango de edad deseado:",
      options: [
        { value: "20-30", label: "De 20 a 30 años" },
        { value: "25-35", label: "De 25 a 35 años" },
        { value: "35-45", label: "De 35 a 45 años" },
        { value: "no importa", label: "La edad no es un criterio para mí" },
      ],
    },
    {
      number: "sexoAffective",
      text: "¿Qué tipo de relación sexo afectiva te gustaría tener?",
      options: [
        { value: "monogama", label: "Una relación monógama" },
        { value: "explorar", label: "Una relación monógama en la que explorar" },
        { value: "abierta", label: "Una relación abierta, poliamorosa, etc..." },
        { value: "beneficios", label: "Amig@s con beneficios" },
        { value: "abierta", label: "Una relación abierta, poliamorosa, etc..." },
        { value: "casual", label: "Algo totalmente casual" },
      ],
    },
    {
      number: "heartState",
      text: "¿En qué estado se encuentra tu corazón?",
      options: [
        {
          value: "maduro",
          label: "Maduro y sereno y dispuesto a compartirlo. Con alegrías y traumas procesados e integrados",
        },
        { value: "solo", label: "Feliz y palpitante con ganas de conocer a personas" },
        { value: "feliz", label: "Feliz y palpitante con ganas de conocer a personas" },
        { value: "recuperarse", label: "Acabo de salir de una relación y busco recuperarme y distraerme" },
        { value: "despechado", label: "Más despechado que Shakira y Piqué" },
      ],
    },
    {
      number: "hasChildren",
      text: "¿Tienes hijos?",
      options: [
        { value: "si", label: "Sí" },
        { value: "no", label: "no" },
      ],
    },
    {
      number: "datesParents",
      text: "¿Saldrías con alguien que tiene hijos?",
      options: [
        { value: "si", label: "Sí" },
        { value: "no", label: "no" },
        { value: "no sabe", label: "No me lo he planteado" },
      ],
    },
    {
      number: "values1",
      text: "Indica un valor importante para ti:",
      options: [
        { value: "amabilidad", label: "Amabilidad" },
        { value: "amistad", label: "Amistad" },
        { value: "autenticidad", label: "Autenticidad" },
        { value: "aventura", label: "Aventura" },
        { value: "comunicacion", label: "Comunicacion" },
        { value: "conciencia", label: "Conciencia" },
        { value: "creatividad", label: "Creatividad" },
        { value: "cuidado", label: "Cuidado" },
        { value: "desarrollo", label: "Desarrollo" },
      ],
    },
    {
      number: "values2",
      text: "Indica un valor importante para ti:",
      options: [
        { value: "diversion", label: "Diversion" },
        { value: "empatia", label: "Empatia" },
        { value: "familia", label: "Familia" },
        { value: "fidelidad", label: "Fidelidad" },
        { value: "generosidad", label: "Generosidad" },
        { value: "integridad", label: "Integridad" },
        { value: "inteligencia", label: "Inteligencia" },
      ],
    },
    {
      number: "values3",
      text: "Indica un valor importante para ti:",
      options: [
        { value: "lealtad", label: "Lealtad" },
        { value: "libertad", label: "Libertad" },
        { value: "optimismo", label: "Optimismo" },
        { value: "resiliencia", label: "Resiliencia" },
        { value: "responsabilidad", label: "Responsabilidad" },
        { value: "afectiva", label: "Afectiva" },
        { value: "sencillez", label: "Sencillez" },
        { value: "solidaridad", label: "Solidaridad" },
        { value: "humor", label: "Humor" },
        { value: "valentia", label: "Valentia" },
      ],
    },
    {
      number: "prefers1",
      text: "Eres más de...",
      options: [
        { value: "netflix", label: "Netflix" },
        { value: "eventos", label: "Eventos" },
        { value: "gym", label: "Gym" },
        { value: "todas", label: "todas" },
      ],
    },
    {
      number: "prefers2",
      text: "Eres más de...",
      options: [
        { value: "vino", label: "Vino" },
        { value: "cafe", label: "Cafe" },
        { value: "agua", label: "Agua" },
        { value: "segun", label: "Según el momento o casi todas las anteriores" },
      ],
    },
    {
      number: "catsDogs",
      text: "Eres más de...",
      options: [
        { value: "gato", label: "Gato" },
        { value: "perro", label: "Perro" },
        { value: "de amigos", label: "Me gustan los de mis amig@s - chequear: falta todos en el controller" },
      ],
    },
    {
      number: "rrss",
      text: "¿Podrías indicar tu perfil de instagram? Si no quieres, pon simplemente no.",
      options: [],
    },
  ];

  return (
    <div className="max-w-lg">
      <h2 className="text-primary-color text-center leading-[1.8rem] font-nunito font-bold text-[1.6rem] mt-[0.8rem] lg:text-[1.8rem] lg:mt-[1rem]">
        ¿Quieres conocer a tu pareja ideal?
      </h2>
      <h3 className="leading-[1rem] mb-[0.8rem] text-[#333333] font-nunito font-semibold text-[1.2rem]">
        ¡Completa este formulario para conocer a tus matches!
      </h3>
      <form onSubmit={handleSubmit}>
        {renderCurrentQuestion()}
        {/* Buttons para moverse entre las preguntas */}
        <div className="flex justify-between">
          <Button color="primary" onClick={handlePrevious} disabled={currentQuestion === 0}>
            Pregunta Anterior
          </Button>

          <Button color="primary" onClick={handleNext} disabled={currentQuestion === totalQuestions - 1}>
            Siguiente Pregunta
          </Button>
        </div>

        {currentQuestion === totalQuestions - 1 && (
          <Button
            color="secondary"
            type="submit"
            children="Enviar"
            className=" text-white text-[0.9rem] py-[0.3rem] font-semibold lg:mt-[1.4rem] lg:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1rem] mb-[1rem]"
            style={{
              transition: "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
            }}
          >
            Enviar
          </Button>
        )}
      </form>
    </div>
  );
};

export default PreferencesForm;
