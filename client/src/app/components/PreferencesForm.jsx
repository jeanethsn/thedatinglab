/* Compatibility test */
"use client";

import { createPreferences } from "../services/preferencesService";
import Button from "@/app/components/Button.jsx";
import { useState } from "react";
import { Input } from "@material-tailwind/react";

const PreferencesForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const totalQuestions = 13;

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
    console.log(e); // <-- recordar sacar esto!
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
      console.log(response); // <-- recordar sacar esto!
      setFormData({ ...response });
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

  // Renderizar cada pregunta
  const renderQuestion = (questionNumber, questionText, options) => {
    if (questionNumber === "birthdate") {
      return (
        <div className="mb-[1rem]">
          <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">{questionText}</label>
          <Input type="date" name={questionNumber} value={formData[questionNumber]} onChange={handleChange} required />
        </div>
      );
    } else if (questionNumber === "rrss") {
      return (
        <div className="mb-[1rem]">
          <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">{questionText}</label>
          <Input
            type="text"
            name={questionNumber}
            value={formData[questionNumber]}
            onChange={handleChange}
            placeholder="Escribe tu perfil de Instagram"
          />
        </div>
      );
    } else {
      return (
        <div className="mb-[1rem]">
          <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">{questionText}</label>
          <div className="flex flex-wrap -mx-2 mb-2">
            {options.map((option, index) => (
              <div className="w-1/3 px-2 mb-2" key={index}>
                <label>
                  <input
                    type="radio"
                    name={questionNumber}
                    value={option.value}
                    onChange={handleChange}
                    checked={formData[questionNumber] === option.value}
                    required
                  />
                  <span className="ml-2">{option.label}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="max-w-lg">
      <h2 className="text-primary-color text-center leading-[1.8rem] font-nunito font-bold text-[1.6rem] mt-[0.8rem] lg:text-[1.8rem] lg:mt-[1rem]">
        ¿Quieres conocer a tu pareja ideal?
      </h2>
      <h3 className="leading-[1rem] mb-[0.8rem] text-[#333333] font-nunito font-semibold text-[1.2rem]">
        ¡Completa este formulario para conocer a tus matches!
      </h3>
      <form onSubmit={handleSubmit}>
        {/* Renderizar cada pregunta */}
        {renderQuestion("birthdate", "Introduce tu fecha de nacimiento", [])}
        {renderQuestion("gender", "¿Con qué género te identificas?", [
          { value: "mujer", label: "Mujer" },
          { value: "hombre", label: "Hombre" },
          { value: "no binario", label: "No binario" },
        ])}
        {renderQuestion("looksFor", "Estoy interesada/o en conocer a...", [
          { value: "mujer", label: "Mujer" },
          { value: "hombre", label: "Hombre" },
          { value: "no binario", label: "No binario" },
          { value: "todo", label: "Todo" },
        ])}
        {renderQuestion("ageRange", "Rango de edad deseado:", [
          { value: "20-30", label: "De 20 a 30 años" },
          { value: "25-35", label: "De 25 a 35 años" },
          { value: "35-45", label: "De 35 a 45 años" },
          { value: "no importa", label: "La edad no es un criterio para mí" },
        ])}
        {renderQuestion("sexoAffective", "¿Qué tipo de relación sexo afectiva te gustaría tener?", [
          { value: "monogama", label: "Una relación monógama" },
          { value: "explorar", label: "Una relación monógama en la que explorar" },
          { value: "abierta", label: "Una relación abierta, poliamorosa, etc..." },
          { value: "beneficios", label: "Amig@s con beneficios" },
          { value: "abierta", label: "Una relación abierta, poliamorosa, etc..." },
          { value: "casual", label: "Algo totalmente casual" },
        ])}
        {renderQuestion("heartState", "¿En qué estado se encuentra tu corazón?", [
          {
            value: "maduro",
            label: "Maduro y sereno y dispuesto a compartirlo. Con alegrías y traumas procesados e integrados",
          },
          { value: "explorar", label: "Una relación monógama en la que explorar" },
          { value: "solo", label: "Un poco solito" },
          { value: "feliz", label: "Feliz y palpitante con ganas de conocer a personas" },
          { value: "recuperarse", label: "Acabo de salir de una relación y busco recuperarme y distraerme" },
          { value: "despechado", label: "Más despechado que Shakira y Piqué" },
        ])}
        {renderQuestion("hasChildren", "¿Tienes hijos?", [
          { value: "si", label: "Sí" },
          { value: "no", label: "No" },
        ])}
        {renderQuestion("datesParents", "¿Saldrías con alguien que tiene hijos?", [
          { value: "si", label: "Sí" },
          { value: "no", label: "No" },
          { value: "no sabe", label: "No me lo he planteado" },
        ])}
        {renderQuestion("values1", "Indica un valor importante para ti:", [
          { value: "amabilidad", label: "Amabilidad" },
          { value: "amistad", label: "Amistad" },
          { value: "autenticidad", label: "Autenticidad" },
          { value: "aventura", label: "Aventura" },
          { value: "comunicacion", label: "Comunicacion" },
          { value: "conciencia", label: "Conciencia" },
          { value: "creatividad", label: "Creatividad" },
          { value: "cuidado", label: "Cuidado" },
          { value: "desarrollo", label: "Desarrollo" },
        ])}
        {renderQuestion("values2", "Indica un valor importante para ti:", [
          { value: "diversion", label: "Diversion" },
          { value: "empatia", label: "Empatia" },
          { value: "familia", label: "Familia" },
          { value: "fidelidad", label: "Fidelidad" },
          { value: "generosidad", label: "Generosidad" },
          { value: "integridad", label: "Integridad" },
          { value: "inteligencia", label: "Inteligencia" },
        ])}
        {renderQuestion("values3", "Indica un valor importante para ti:", [
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
        ])}
        {renderQuestion("prefers1", "Eres más de...", [
          { value: "netflix", label: "Netflix" },
          { value: "eventos", label: "Eventos" },
          { value: "gym", label: "Gym" },
          { value: "todas", label: "todas" },
        ])}
        {renderQuestion("prefers2", "Eres más de...", [
          { value: "vino", label: "Vino" },
          { value: "cafe", label: "Cafe" },
          { value: "agua", label: "Agua" },
          { value: "segun", label: "Según el momento o casi todas las anteriores" },
        ])}
        {renderQuestion("catsDogs", "Eres más de...", [
          { value: "gato", label: "Gato" },
          { value: "perro", label: "Perro" },
          { value: "de amigos", label: "Me gustan los de mis amig@s - chequear: falta todos en el controller" },
        ])}
        {renderQuestion("rrss", "¿Podrías indicar tu perfil de instagram? Si no quieres, pon simplemente no.", [])}

        {/* Buttons para moverse entre las preguntas */}
        <div className="flex justify-between">
          <Button color="primary" onClick={handlePrevious}>
            Pregunta Anterior
          </Button>

          <Button color="primary" onClick={handleNext}>
            Siguiente Pregunta
          </Button>
        </div>

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
      </form>
    </div>
  );
};

export default PreferencesForm;
