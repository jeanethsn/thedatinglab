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

  const isLastQuestion = currentQuestion === totalQuestions - 1;
  const isFirstQuestion = currentQuestion === 0;

  return (
    <div className="max-w-lg">
      <h2 className="text-primary-color text-center leading-[1.8rem] font-nunito font-bold text-[1.6rem] mt-[0.8rem] lg:text-[1.8rem] lg:mt-[1rem]">
        ¿Quieres conocer a tu pareja ideal?
      </h2>
      <h3 className="leading-[1rem] mb-[0.8rem] text-[#333333] font-nunito font-semibold text-[1.2rem]">
        ¡Completa este formulario para conocer a tus matches!
      </h3>
      <form onSubmit={handleSubmit}>
        {currentQuestion === 0 && (
          <div className="mb-[1rem]">
            <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
              Introduce tu fecha de nacimiento
            </label>
            <Input name="birthdate" type="date" value={formData.birthdate} onChange={handleChange} />
          </div>
        )}
        {currentQuestion === 1 && (
          <div className="mb-[1rem]">
            <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
              ¿Con qué género te identificas?
            </label>
            <div className="flex flex-wrap -mx-2 mb-2">
              <div className="w-1/3 px-2 mb-2">
                <label>
                  <input type="radio" name="gender" value="mujer" onChange={handleChange} required />
                  <span className="ml-2">Mujer</span>
                </label>
              </div>
              <div className="w-1/3 px-2 mb-2">
                <label>
                  <input type="radio" name="gender" value="hombre" onChange={handleChange} required />
                  <span className="ml-2">Hombre</span>
                </label>
              </div>
              <div className="w-1/3 px-2 mb-2">
                <label>
                  <input type="radio" name="gender" value="no binario" onChange={handleChange} required />
                  <span className="ml-2">No binario</span>
                </label>
              </div>
            </div>
          </div>
        )}
        {currentQuestion === 2 && (
          <div className="mb-[1rem]">
            <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
              Estoy interesada/o en conocer a...
            </label>
            <div className="flex flex-wrap -mx-2 mb-2">
              <div className="w-1/3 px-2 mb-2">
                <label>
                  <input type="radio" name="looksFor" value="mujer" onChange={handleChange} required />
                  <span className="ml-2">Mujer</span>
                </label>
              </div>
              <div className="w-1/3 px-2 mb-2">
                <label>
                  <input type="radio" name="looksFor" value="hombre" onChange={handleChange} required />
                  <span className="ml-2">Hombre</span>
                </label>
              </div>
              <div className="w-1/3 px-2 mb-2">
                <label>
                  <input type="radio" name="looksFor" value="no binario" onChange={handleChange} required />
                  <span className="ml-2">No binario</span>
                </label>
              </div>
              <div className="w-1/3 px-2 mb-2">
                <label>
                  <input type="radio" name="looksFor" value="todo" onChange={handleChange} required />
                  <span className="ml-2">Todo</span>
                </label>
              </div>
            </div>
          </div>
        )}
        {currentQuestion === 3 && (
          <div className="mb-[1rem]">
            <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
              Rango de edad deseado:
            </label>
            <div className="w-1/3 px-2 mb-2">
              <label>
                <input type="radio" name="ageRange" value="20-30" onChange={handleChange} required />
                <span className="ml-2">De 20 a 30 años</span>
              </label>
            </div>
            <div className="w-1/3 px-2 mb-2">
              <label>
                <input type="radio" name="ageRange" value="25-35" onChange={handleChange} required />
                <span className="ml-2">De 25 a 35 años</span>
              </label>
            </div>
            <div className="w-1/3 px-2 mb-2">
              <label>
                <input type="radio" name="ageRange" value="35-45" onChange={handleChange} required />
                <span className="ml-2">De 35 a 45 años</span>
              </label>
            </div>
            <div className="w-1/3 px-2 mb-2">
              <label>
                <input type="radio" name="ageRange" value="35-45" onChange={handleChange} required />
                <span className="ml-2">La edad no es un criterio para mí</span>
              </label>
            </div>
          </div>
        )}
        {currentQuestion === 4 && (
          <div className="mb-[1rem]">
            <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
              ¿Qué tipo de relación sexo afectiva te gustaría tener?
            </label>
            <div className="w-1/3 px-2 mb-2">
              <label>
                <input type="radio" name="sexoAffective" value="monogama" onChange={handleChange} required />
                <span className="ml-2">Una relación monógama</span>
              </label>
            </div>
            <div className="w-1/3 px-2 mb-2">
              <label>
                <input type="radio" name="sexoAffective" value="explorar" onChange={handleChange} required />
                <span className="ml-2">Una relación monógama en la que explorar</span>
              </label>
            </div>
            <div className="w-1/3 px-2 mb-2">
              <label>
                <input type="radio" name="sexoAffective" value="abierta" onChange={handleChange} required />
                <span className="ml-2">Una relación abierta, poliamorosa, etc...</span>
              </label>
            </div>
            <div className="w-1/3 px-2 mb-2">
              <label>
                <input type="radio" name="sexoAffective" value="beneficios" onChange={handleChange} required />
                <span className="ml-2">Amig@s con beneficios</span>
              </label>
            </div>
            <div className="w-1/3 px-2 mb-2">
              <label>
                <input type="radio" name="sexoAffective" value="fluir" onChange={handleChange} required />
                <span className="ml-2">Lo que fluya, estoy abiert@ a cualquier formato</span>
              </label>
            </div>
            <div className="w-1/3 px-2 mb-2">
              <label>
                <input type="radio" name="sexoAffective" value="casual" onChange={handleChange} required />
                <span className="ml-2">Algo totalmente casual</span>
              </label>
            </div>
          </div>
        )}
        {currentQuestion === 5 && (
          <div className="mb-[1rem]">
            <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
              ¿En qué estado se encuentra tu corazón?
            </label>
            <div className="w-1/3 px-2 mb-2">
              <label>
                <input type="radio" name="heartState" value="maduro" onChange={handleChange} required />
                <span className="ml-2">
                  Maduro y sereno y dispuesto a compartirlo. Con alegrías y traumas procesados e integrados
                </span>
              </label>
            </div>
            <div className="w-1/3 px-2 mb-2">
              <label>
                <input type="radio" name="heartState" value="solo" onChange={handleChange} required />
                <span className="ml-2">Un poco solito</span>
              </label>
            </div>
            <div className="w-1/3 px-2 mb-2">
              <label>
                <input type="radio" name="heartState" value="feliz" onChange={handleChange} required />
                <span className="ml-2">Feliz y palpitante con ganas de conocer a personas</span>
              </label>
            </div>
            <div className="w-1/3 px-2 mb-2">
              <label>
                <input type="radio" name="heartState" value="recuperarse" onChange={handleChange} required />
                <span className="ml-2">Acabo de salir de una relación y busco recuperarme y distraerme</span>
              </label>
            </div>
            <div className="w-1/3 px-2 mb-2">
              <label>
                <input type="radio" name="heartState" value="despechado" onChange={handleChange} required />
                <span className="ml-2">Más despechado que Shakira y Piqué</span>
              </label>
            </div>
          </div>
        )}
        {currentQuestion === 6 && (
          <div className="mb-[1rem]">
            <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">¿Tienes hijos?</label>
            <div className="flex flex-wrap -mx-2 mb-2">
              <div className="w-1/2 px-2 mb-2">
                <label>
                  <input type="radio" name="hasChildren" value="si" onChange={handleChange} required />
                  <span className="ml-2">Sí</span>
                </label>
              </div>
              <div className="w-1/2 px-2 mb-2">
                <label>
                  <input type="radio" name="hasChildren" value="no" onChange={handleChange} required />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
          </div>
        )}
        {currentQuestion === 7 && (
          <div className="mb-[1rem]">
            <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
              ¿Saldrías con alguien que tiene hijos?
            </label>
            <div className="flex flex-wrap -mx-2 mb-2">
              <div className="w-1/2 px-2 mb-2">
                <label>
                  <input type="radio" name="datesParents" value="si" onChange={handleChange} required />
                  <span className="ml-2">Sí</span>
                </label>
              </div>
              <div className="w-1/2 px-2 mb-2">
                <label>
                  <input type="radio" name="datesParents" value="no" onChange={handleChange} required />
                  <span className="ml-2">No</span>
                </label>
              </div>
              <div className="w-1/2 px-2 mb-2">
                <label>
                  <input type="radio" name="datesParents" value="no sabe" onChange={handleChange} required />
                  <span className="ml-2">No me lo he planteado</span>
                </label>
              </div>
            </div>
          </div>
        )}
        {currentQuestion === 8 && (
          <div className="mb-[1rem]">
            <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
              Indica un valor importante para ti:
            </label>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values1" value="amabilidad" onChange={handleChange} required />
                <span className="ml-2">Amabilidad</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values1" value="amistad" onChange={handleChange} required />
                <span className="ml-2">Amistad</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values1" value="autenticidad" onChange={handleChange} required />
                <span className="ml-2">Autenticidad</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values1" value="aventura" onChange={handleChange} required />
                <span className="ml-2">Aventura</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values1" value="comunicacion" onChange={handleChange} required />
                <span className="ml-2">Comunicacion</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values1" value="conciencia" onChange={handleChange} required />
                <span className="ml-2">Conciencia</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values1" value="creatividad" onChange={handleChange} required />
                <span className="ml-2">Creatividad</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values1" value="cuidado" onChange={handleChange} required />
                <span className="ml-2">Cuidado</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values1" value="desarrollo" onChange={handleChange} required />
                <span className="ml-2">Desarrollo</span>
              </label>
            </div>
          </div>
        )}
        {currentQuestion === 9 && (
          <div className="mb-[1rem]">
            <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
              Indica un valor importante para ti:
            </label>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values2" value="diversion" onChange={handleChange} required />
                <span className="ml-2">Diversion</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values2" value="empatia" onChange={handleChange} required />
                <span className="ml-2">Empatia</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values2" value="familia" onChange={handleChange} required />
                <span className="ml-2">Familia</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values2" value="fidelidad" onChange={handleChange} required />
                <span className="ml-2">Fidelidad</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values2" value="generosidad" onChange={handleChange} required />
                <span className="ml-2">Generosidad</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values2" value="gratitud" onChange={handleChange} required />
                <span className="ml-2">Gratitud</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values2" value="humildad" onChange={handleChange} required />
                <span className="ml-2">Humildad</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values2" value="integridad" onChange={handleChange} required />
                <span className="ml-2">Integridad</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values2" value="inteligencia" onChange={handleChange} required />
                <span className="ml-2">Inteligencia</span>
              </label>
            </div>
          </div>
        )}
        {currentQuestion === 10 && (
          <div className="mb-[1rem]">
            <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
              Indica un valor importante para ti:
            </label>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values3" value="lealtad" onChange={handleChange} required />
                <span className="ml-2">Lealtad</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values3" value="libertad" onChange={handleChange} required />
                <span className="ml-2">Libertad</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values3" value="optimismo" onChange={handleChange} required />
                <span className="ml-2">Optimismo</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values3" value="resiliencia" onChange={handleChange} required />
                <span className="ml-2">Resiliencia</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values3" value="respeto" onChange={handleChange} required />
                <span className="ml-2">Respeto</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values3" value="responsabilidad" onChange={handleChange} required />
                <span className="ml-2">Responsabilidad</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values3" value="afectiva" onChange={handleChange} required />
                <span className="ml-2">Afectiva</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values3" value="sencillez" onChange={handleChange} required />
                <span className="ml-2">Sencillez</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values3" value="solidaridad" onChange={handleChange} required />
                <span className="ml-2">Solidaridad</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values3" value="humor" onChange={handleChange} required />
                <span className="ml-2">Humor</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="values3" value="valentia" onChange={handleChange} required />
                <span className="ml-2">Valentia</span>
              </label>
            </div>
          </div>
        )}
        {currentQuestion === 11 && (
          <div className="mb-[1rem]">
            <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">Eres más de...</label>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="prefers1" value="netflix" onChange={handleChange} required />
                <span className="ml-2">Netflix</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="prefers1" value="eventos" onChange={handleChange} required />
                <span className="ml-2">Eventos</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="prefers1" value="gym" onChange={handleChange} required />
                <span className="ml-2">Gym</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="prefers1" value="todas" onChange={handleChange} required />
                <span className="ml-2">Todas</span>
              </label>
            </div>
          </div>
        )}
        {currentQuestion === 12 && (
          <div className="mb-[1rem]">
            <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">Eres más de...</label>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="prefers2" value="vino" onChange={handleChange} required />
                <span className="ml-2">Vino</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="prefers2" value="cafe" onChange={handleChange} required />
                <span className="ml-2">Cafe</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="prefers2" value="agua" onChange={handleChange} required />
                <span className="ml-2">Agua</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="prefers2" value="segun" onChange={handleChange} required />
                <span className="ml-2">Según el momento o casi todas las anteriores</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="prefers2" value="ninguna" onChange={handleChange} required />
                <span className="ml-2">Ninguna</span>
              </label>
            </div>
          </div>
        )}
        {currentQuestion === 13 && (
          <div className="mb-[1rem]">
            <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">Eres más de...</label>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="catsDogs" value="gato" onChange={handleChange} required />
                <span className="ml-2">Gato</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="catsDogs" value="perro" onChange={handleChange} required />
                <span className="ml-2">Perro</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-2">
              <label>
                <input type="radio" name="catsDogs" value="de amigos" onChange={handleChange} required />
                <span className="ml-2">Me gustan los de mis amig@s - chequear: falta "todos" en el controller</span>
              </label>
            </div>
          </div>
        )}
        {currentQuestion === 14 && (
          <div className="mb-[1rem]">
            <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
              ¿Podrías indicar tu perfil de instagram? Si no quieres, pon simplemente "no".
            </label>
            <Input name="rrss" type="text" value={formData.rrss} onChange={handleChange} />
          </div>
        )}

        {/* Buttons para moverse entre las preguntas */}
        <div className="flex justify-between">
          {!isFirstQuestion && (
            <Button color="primary" onClick={handlePrevious}>
              Pregunta Anterior
            </Button>
          )}
          {!isLastQuestion && (
            <Button color="primary" onClick={handleNext}>
              Siguiente Pregunta
            </Button>
          )}
        </div>

        {isLastQuestion && (
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
