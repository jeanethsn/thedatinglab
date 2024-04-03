/* Compatibility test */
"use client";

import { createPreferences } from "../services/preferencesService";
import Button from "@/app/components/Button.jsx";
import { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

const PreferencesForm = () => {
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
    console.log(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createPreferences(formData);
      console.log(response);
      setFormData({
        birthdate: response.birthdate,
        gender: response.gender,
        looksFor: response.looksFor,
        ageRange: response.ageRange,
        sexoAffective: response.sexoAffective,
        heartState: response.heartState,
        hasChildren: response.hasChildren,
        datesParents: response.datesParents,
        values1: response.values1,
        values2: response.values2,
        values3: response.values3,
        prefers1: response.prefers1,
        prefers2: response.prefers2,
        catsDogs: response.prefers2,
        rrss: response.rrss,
      });

      console.log("Preferencia creada correctamente:", response.message);
    } catch (error) {
      console.error("Error:", error.response.data.validation_errors);
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
        <div className="mb-[1rem]">
          <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
            Introduce tu fecha de nacimiento
          </label>
          <Input name="birthdate" type="date" value={formData.birthdate} onChange={handleChange} />
        </div>

        <div className="mb-[1rem]">
          <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
            ¿Con qué género te identificas?
          </label>
          <Select name="gender" label={formData.gender} value={formData.gender} onChange={handleChange} required>
            <Option value="mujer">Mujer</Option>
            <Option value="hombre">Hombre</Option>
            <Option value="no binario">No binario</Option>
          </Select>
        </div>

        <div className="mb-[1rem]">
          <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
            Estoy interesada/o en conocer a...
          </label>
          <Select name="looksFor" label={formData.looksFor} value={formData.looksFor} onChange={handleChange}>
            <Option value="mujer">Mujer</Option>
            <Option value="hombre">Hombre</Option>
            <Option value="no binario">Personas no binarias</Option>
            <Option value="todo">Todo</Option>
          </Select>
        </div>

        <div className="mb-[1rem]">
          <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
            Rango de edad deseado:
          </label>
          <Select name="ageRange" label={formData.ageRange} value={formData.ageRange} onChange={handleChange}>
            <Option value="20-30">De 20 a 30 años</Option>
            <Option value="25-35">De 25 a 35 años</Option>
            <Option value="35-45">De 35 a 45 años</Option>
            <Option value="no importa">La edad no es un criterio para mí</Option>
          </Select>
        </div>

        <div className="mb-[1rem]">
          <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
            ¿Qué tipo de relación sexo afectiva te gustaría tener?
          </label>
          <Select
            name="sexoAffective"
            label={formData.sexoAffective}
            value={formData.sexoAffective}
            onChange={handleChange}
          >
            <Option value="monogama">Una relación monógama</Option>
            <Option value="explorar">Una relación monógama en la que explorar</Option>
            <Option value="abierta">Una relación abierta, poliamorosa, etc...</Option>
            <Option value="beneficios">Amig@s con beneficios</Option>
            <Option value="fluir">Lo que fluya, estoy abiert@ a cualquier formato</Option>
            <Option value="casual">Algo totalmente casual</Option>
          </Select>
        </div>

        <div className="mb-[1rem]">
          <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
            ¿En qué estado se encuentra tu corazón?
          </label>
          <Select name="heartState" label={formData.heartState} value={formData.heartState} onChange={handleChange}>
            <Option value="maduro">
              Maduro y sereno y dispuesto a compartirlo. Con alegrías y traumas procesados e integrados
            </Option>
            <Option value="solo">Un poco solito</Option>
            <Option value="feliz">Feliz y palpitante con ganas de conocer a personas</Option>
            <Option value="recuperarse">Acabo de salir de una relación y busco recuperarme y distraerme</Option>
            <Option value="despechado">Más despechado que Shakira y Piqué</Option>
          </Select>
        </div>

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

        <div className="mb-[1rem]">
          <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">
            Indica un valor importante para ti entre estos:
          </label>
          <Select name="values1" label={formData.values1} value={formData.values1} onChange={handleChange}>
            <Option value="amabilidad">Amabilidad</Option>
            <Option value="amistad">Amistad</Option>
            <Option value="autenticidad">Autenticidad</Option>
            <Option value="aventura">Aventura</Option>
            <Option value="comunicacion">Comunicacion</Option>
            <Option value="conciencia">Conciencia</Option>
            <Option value="confianza">Confianza</Option>
            <Option value="creatividad">Creatividad</Option>
            <Option value="cuidado">Cuidado</Option>
            <Option value="desarrollo">Desarrollo</Option>
          </Select>
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
