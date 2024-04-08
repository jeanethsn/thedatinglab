/* Compatibility test */
"use client";

import { createPreferences } from "../services/preferencesService";
import Button from "@/app/components/Button.jsx";
import { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";
import questions from "../utils/questions";
import * as Yup from "yup";
import Link from "next/link";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object().shape({
  birthdate: Yup.date()
    .required("La fecha de nacimiento es obligatoria")
    .test("is-adult", "Tienes que ser mayor de 18 años para ingresar.", function (value) {
      if (!value) return false;
      const birthdate = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - birthdate.getFullYear();
      return age >= 18;
    }),
  gender: Yup.string().required("El género es obligatorio"),
  looksFor: Yup.string().required("Este campo es obligatorio"),
  ageRange: Yup.string().required("El rango de edad es obligatorio"),
  sexoAffective: Yup.string().required("Este campo es obligatorio"),
  heartState: Yup.string().required("Este campo es obligatorio"),
  hasChildren: Yup.string().required("Este campo es obligatorio"),
  datesParents: Yup.string().required("Este campo es obligatorio"),
  values1: Yup.string().required("Tienes que marcar una opción"),
  values2: Yup.string().required("Tienes que marcar una opción"),
  values3: Yup.string().required("Tienes que marcar una opción"),
  prefers1: Yup.string().required("Tienes que marcar una preferencia"),
  prefers2: Yup.string().required("Tienes que marcar una preferencia"),
  rrss: Yup.string().required('Si prefieres no dejar tu Instagram pon simplemente "no" 😉'),
});

const PreferencesForm = () => {
  const [formErrors, setFormErrors] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const totalQuestions = 15;
  const [fieldErrors, setFieldErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [advancedToNext, setAdvancedToNext] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    console.log(formErrors);
  }, [formErrors]);

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

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Valida el campo específico que ha cambiado
    try {
      await validationSchema.validateAt(name, { [name]: value });
      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
        if (e.target.type === "radio") {
          setAdvancedToNext(true);
        }
      }
    }
  };

  const handleBlur = async (fieldName) => {
    // Validar el campo cuando el usuario deja el input
    try {
      const value = formData[fieldName];
      await validationSchema.validateAt(fieldName, { [fieldName]: value });
      setFormErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setFormErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error.message }));
      }
    }
  };

  const formatDate = (dateString) => {
    const parts = dateString.split("-");
    const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    return formattedDate;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });

      const response = await createPreferences(formData);
      const formattedDate = formatDate(formData.birthdate);
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
      setFormErrors({ ...formErrors, birthdate: "" });
      console.log("OK message:", response.message);
      setFormSubmitted(true);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const yupErrors = {};
        error.inner.forEach((err) => {
          yupErrors[err.path] = err.message;
          setTouchedFields((prevTouchedFields) => ({
            ...prevTouchedFields,
            [err.path]: true,
          }));
        });
        setFormErrors({ ...yupErrors, ...formErrors });
      } else {
        console.error("Error:", error?.response?.data?.validation_errors);
      }
    }
  };

  const handleNext = async () => {
    // Validar el campo actual si aún no se ha validado
    const question = questions[currentQuestion];
    if (question.number !== "birthdate" && question.number !== "rrss") {
      const fieldName = question.number;
      try {
        const value = formData[fieldName];
        await validationSchema.validateAt(fieldName, { [fieldName]: value });
        setFormErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          setFormErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error.message }));
          toast.error(error.message, {
            style: {
              fontSize: "1rem",
              backgroundColor: "#FBF6F3",
              border: "1px solid #E27A8C",
            },
          });
          return;
        }
      }
    }
    // Eliminar cualquier error existente de todos los campos
    setFormErrors({});
    setFieldErrors({});

    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const handlePrevious = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const [selectedOption, setSelectedOption] = useState(null);

  // Renderizar la pregunta actual:
  const renderCurrentQuestion = () => {
    const question = questions[currentQuestion];
    const hasMoreThanFiveOptions = question.options.length > 6;
    if (!question) return null;
    if (question.number === "birthdate") {
      // Renderizar input de fecha
      return (
        <div className="mb-[1rem] md:w-[20rem]">
          <label className="mb-6 text-[#545454] font-nunito font-bold text-[1rem] leading-snug">{question.text}</label>
          <Input
            type="date"
            name={question.number}
            value={formData[question.number]}
            onChange={handleChange}
            onBlur={() => handleBlur(question.number)}
            className={
              formErrors[question.number]
                ? "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-red-500 placeholder-shown:border-t-red-500 placeholder-shown:border-red-500 focus:border-red-500 focus:!border-t-deep-orange-800 focus:border-[3px]"
                : ""
            }
          />
          {formErrors[question.number] && (
            <p className=" mt-1 text-red-600 text-[0.8rem] md:text-[0.9rem]">{formErrors[question.number]}</p>
          )}
        </div>
      );
    } else if (question.number === "rrss") {
      // Renderizar input de texto
      return (
        <div className="mb-[1rem] md:w-[20rem]">
          <label className="mb-6 text-[#545454] font-nunito font-bold text-[1rem] leading-snug">{question.text}</label>
          <Input
            type="text"
            name={question.number}
            value={formData[question.number]}
            onChange={handleChange}
            placeholder="Escribe tu perfil de Instagram"
            onBlur={() => handleBlur(question.number)}
            className={
              formErrors[question.number]
                ? "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-red-500 placeholder-shown:border-t-red-500 placeholder-shown:border-red-500 focus:border-red-500 focus:!border-t-deep-orange-800 focus:border-[3px]"
                : ""
            }
          />
          {formErrors[question.number] && (
            <p className=" mt-1 text-red-600 text-[0.8rem] md:text-[0.9rem]">{formErrors[question.number]}</p>
          )}
        </div>
      );
    } else {
      // Renderizar otras preguntas con opciones
      return (
        <div className="mb-[1rem]">
          <label className="pb-6 text-[#545454] font-nunito font-bold text-[1rem] leading-snug">{question.text}</label>
          {hasMoreThanFiveOptions ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {/* Estilo para más de 6 opciones */}
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={`flex align-center relative select-none items-center whitespace-nowrap rounded-full border border-grey-ligth py-1.5 px-3 text-base transition-colors ${
                    selectedOption === option.value ? "text-white bg-grey-dark border-grey-dark" : ""
                  }`}
                  onClick={() => {
                    handleChange({ target: { name: question.number, value: option.value } });
                    setSelectedOption(option.value);
                  }}
                  onMouseEnter={(e) => e.target.classList.add("hover:border-grey-dark")}
                  onMouseLeave={(e) => e.target.classList.remove("hover:border-grey-dark")}
                >
                  {selectedOption === option.value && (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 m-1 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  )}
                  {option.label}
                </button>
              ))}
            </div>
          ) : (
            // Renderizar opciones como radio buttons
            question.options.map((option, index) => (
              <div key={index} className="pt-4 mb-2">
                <div
                  role="button"
                  className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  onClick={() => document.getElementById(`vertical-list-react-${index}`).click()}
                >
                  <label htmlFor="vertical-list-react" className="flex items-center w-full px-3 py-2 cursor-pointer">
                    <div className="grid mr-3 place-items-center">
                      <div className="inline-flex items-center">
                        <label
                          className="relative flex items-center p-0 rounded-full cursor-pointer"
                          htmlFor="vertical-list-react"
                        >
                          <input
                            name={question.number}
                            value={option.value}
                            id={`vertical-list-react-${index}`}
                            type="radio"
                            onChange={handleChange}
                            checked={formData[question.number] === option.value}
                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                            onBlur={() => handleBlur(question.number)}
                          />
                          <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                            </svg>
                          </span>
                        </label>
                        <span className="ml-2 font-sans text-base antialiased font-medium leading-relaxed">
                          {option.label}
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            ))
          )}
          {advancedToNext && formErrors[question.number] && (
            <p className="mt-1 text-red-600 text-[0.8rem] md:text-[0.9rem]">{formErrors[question.number]}</p>
          )}
        </div>
      );
    }
  };

  return (
    <div>
      {formSubmitted ? (
        <div className="mx-4 md:mx-auto max-w-[40rem] rounded-xl bg-white py-12 px-4 md:px-8">
          <h2 className="pb-4 text-center text-primary-color text-center leading-[1.8rem] font-nunito font-bold text-[1.6rem] mt-[0.8rem] lg:text-[1.8rem] lg:mt-[1rem]">
            ¡El test de compatibilidad se ha enviado correctamente!
          </h2>
          <h3 className="pb-12 text-center leading-snug mb-[0.8rem] text-[#333333] font-nunito font-semibold text-[1.2rem]">
            Gracias por completar el formulario.
          </h3>
          <Button color="secondary" className="md:max-w-[12rem] mx-auto block">
            <Link
              href="/mi-cuenta"
              className="flex justify-center text-white text-[0.9rem] font-semibold  lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1rem] text-center"
              style={{
                transition: "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
              }}
            >
              Ir a Mi Cuenta
            </Link>
          </Button>
        </div>
      ) : (
        <div className="mx-4 md:mx-auto max-w-[40rem] rounded-xl bg-white py-12 px-4 md:px-8">
          <h2 className="pb-4 text-center text-primary-color text-center leading-[1.8rem] font-nunito font-bold text-[1.6rem] mt-[0.8rem] lg:text-[1.8rem] lg:mt-[1rem]">
            ¿Quieres conocer a tu pareja ideal?
          </h2>
          <h3 className="pb-12 text-center leading-snug mb-[0.8rem] text-[#333333] font-nunito font-semibold text-[1.2rem]">
            ¡Completa este formulario para conocer a tus matches!
          </h3>
          <form className="md:px-12" onSubmit={handleSubmit}>
            {renderCurrentQuestion()}

            {/* Error del backend */}
            {Object.keys(fieldErrors).map(
              (fieldName) =>
                touchedFields[fieldName] &&
                formErrors[fieldName] && (
                  <p key={fieldName} className="text-red-500">
                    {formErrors[fieldName]}
                  </p>
                )
            )}

            {/* Buttons para moverse entre las preguntas */}
            <div className="flex flex-row justify-between md:justify-start md:gap-8 gap-4 mt-8">
              <Button
                color=""
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`disabled:border-0 disabled:opacity-80 disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed w-full py-[0.2rem] mt-[1rem] rounded-bl-2xl rounded-tr-2xl hover:rounded-full inline-block font-semibold text-[1rem] font-nunito text-primary-color border-[0.15rem] border-primary-color py-[0.5rem] px-[1.6rem] max-w-[130px]`}
              >
                Anterior
              </Button>

              <Button
                color="primary"
                onClick={handleNext}
                disabled={currentQuestion === totalQuestions - 1 || !formData.birthdate}
                className={`disabled:opacity-80 disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed rounded-bl-2xl rounded-tr-2xl hover:rounded-full bg-pink-strong false text-white text-[0.9rem] font-semibold mt-[1rem] py-[0.5rem] rounded-bl-3xl rounded-tr-3xl text-[1rem] max-w-[130px] `}
              >
                Siguiente
              </Button>
            </div>

            {currentQuestion === totalQuestions - 1 && (
              <Button
                color="secondary"
                type="submit"
                children="Enviar"
                className="text-white text-[0.9rem] py-[0.3rem] font-semibold lg:mt-[1.4rem] py-[0.5rem] rounded-bl-3xl lrounded-tr-3xl text-[1rem] mb-[1rem]"
                style={{
                  transition: "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
                }}
              >
                Enviar
              </Button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default PreferencesForm;
