/* Compatibility test */
"use client";

import { createPreferences } from "../../services/preferencesService";
import Button from "@/app/components/Button.jsx";
import PreferenceStep from "./PreferenceStep";
import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@material-tailwind/react";
import questions from "../../utils/questions";
import * as Yup from "yup";
import differenceInYears from "date-fns/differenceInYears";
import moment from "moment";

const validationSchema = Yup.object().shape({
  birthdate: Yup.date()
    .nullable()
    .transform((value, originalValue) => {
      if (originalValue === "") return "";
      return value;
    })
    .required("Necesitas seleccionar una fecha")
    .test(
      "isAdult",
      "Tienes que ser mayor de 18 años para ingresar",
      function (value) {
        return differenceInYears(new Date(), new Date(value)) >= 18;
      }
    )
    .test("isOld", "Excedes la edad permitida", function (value) {
      return differenceInYears(new Date(), new Date(value)) <= 95;
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
  rrss: Yup.string().required(
    'Si prefieres no dejar tu Instagram pon simplemente "no" 😉'
  ),
});

const PreferencesForm = () => {
  const [formErrors, setFormErrors] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const totalQuestions = 15;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    control,
    trigger,
    getFieldState,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  useEffect(() => {
    console.log(formErrors);
  }, [formErrors]);

  const onSubmit = async (data) => {
    console.log({ data });
  };

  const handleNext = useCallback(() => {
    // trigger({});
    setCurrentQuestion((prev) => prev + 1);
  }, [currentQuestion]);

  const handlePrevious = useCallback(() => {
    setCurrentQuestion((prev) => prev - 1);
  }, [currentQuestion]);

  const disabledButton = () => {
    const fieldValue = getValues(questions[currentQuestion].type);
    const errorField = getFieldState(questions[currentQuestion].type).error
      ?.message;

    console.log({ fieldValue, errorField });

    if (fieldValue === undefined && errorField === undefined) return true;
    if (!!fieldValue && errorField === undefined) return false;
    if (fieldValue !== "" && errorField === undefined) return false;

    return true;
  };

  return (
    <div>
      <div className="mx-4 md:mx-auto max-w-[40rem] rounded-xl bg-white py-12 px-4 md:px-8">
        <h2 className="pb-4  text-primary-color text-center leading-[1.8rem] font-nunito font-bold text-[1.6rem] mt-[0.8rem] lg:text-[1.8rem] lg:mt-[1rem]">
          ¿Quieres conocer a tu pareja ideal?
        </h2>
        <h3 className="pb-[1rem] text-start leading-snug mb-[0.8rem] text-[#333333] font-nunito font-semibold text-[1rem]">
          ¡Completa este formulario para conocer a tus matches!
        </h3>
        <form className="md:px-12" onSubmit={handleSubmit(onSubmit)}>
          <PreferenceStep
            register={register}
            data={questions[currentQuestion]}
            error={errors[questions[currentQuestion].type]}
            setValue={setValue}
            control={control}
            preferenceButtons={(error) => (
              <div className="flex flex-row justify-between md:justify-start md:gap-8 gap-4 mt-[1rem]">
                <Button
                  color=""
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className={`disabled:border-0 disabled:opacity-80 disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed w-full py-[0.2rem] mt-[1rem] rounded-bl-2xl rounded-tr-2xl hover:rounded-full inline-block font-semibold text-[1rem] font-nunito text-primary-color border-[0.15rem] border-primary-color py-[0.5rem] px-[1.6rem] max-w-[130px]`}
                >
                  Anterior
                </Button>

                <Button
                  type="button"
                  color="primary"
                  disabled={disabledButton()}
                  onClick={handleNext}
                  className={`disabled:opacity-80 disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed rounded-bl-2xl rounded-tr-2xl hover:rounded-full bg-pink-strong false text-white text-[0.9rem] font-semibold mt-[1rem] py-[0.5rem] rounded-bl-3xl rounded-tr-3xl text-[1rem] max-w-[130px] `}
                >
                  Siguiente
                </Button>
              </div>
            )}
          />

          {/* Buttons para moverse entre las preguntas */}
          {/* <div className="flex flex-row justify-between md:justify-start md:gap-8 gap-4 mt-[1rem]">
            <Button
              color=""
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`disabled:border-0 disabled:opacity-80 disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed w-full py-[0.2rem] mt-[1rem] rounded-bl-2xl rounded-tr-2xl hover:rounded-full inline-block font-semibold text-[1rem] font-nunito text-primary-color border-[0.15rem] border-primary-color py-[0.5rem] px-[1.6rem] max-w-[130px]`}
            >
              Anterior
            </Button>

            <Button
              type="button"
              color="primary"
              disabled={!isValid}
              onClick={handleNext}
              // disabled={currentQuestion === totalQuestions - 1}
              className={`disabled:opacity-80 disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed rounded-bl-2xl rounded-tr-2xl hover:rounded-full bg-pink-strong false text-white text-[0.9rem] font-semibold mt-[1rem] py-[0.5rem] rounded-bl-3xl rounded-tr-3xl text-[1rem] max-w-[130px] `}
            >
              Siguiente
            </Button>
          </div> */}

          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default PreferencesForm;
