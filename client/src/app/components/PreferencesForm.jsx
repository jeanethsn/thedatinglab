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
    rrss: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">Fecha de nacimiento</label>
          <Input name="birthdate" type="date" value={formData.birthdate} onChange={handleChange} required />
        </div>

        <div className="mb-[1rem]">
          <label className="text-[#545454] font-nunito font-bold text-[1rem] leading-[0rem]">Género</label>
          <Select name="gender" label={formData.gender} value={formData.gender} onChange={handleChange} required>
            <Option name="gender">mujer</Option>
            <Option name="gender">hombre</Option>
            <Option name="gender">no binario</Option>
            <Option name="gender">todo</Option>
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
