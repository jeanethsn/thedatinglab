"use client";
import { toastMessage } from "@/app/components/Toast.jsx";
import { createPreferences } from "../../services/preferencesService";
import Button from "@/app/components/Button.jsx";
import PreferenceStep from "./PreferenceStep";
import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import questions from "../../utils/questions";
import * as Yup from "yup";
import differenceInYears from "date-fns/differenceInYears";
import ModalSuccess from "./ModalSuccess";
import { useRouter } from "next/navigation";

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
  rrss: Yup.string().test(
    "instagramUrl",
    'Por favor, introduce una URL de Instagram válida o "NO"',
    (value) => {
      const regex =
        /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9(@.)_]{1,150}\/?$/i;
      return regex.test(value) || value?.toLowerCase() === "no";
    }
  ),
});

const ROUTES = {
  CREATE_PROFILE: "/mi-cuenta/crear-perfil",
};

const PreferencesForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(14);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const handlerModal = () => {
    setOpenModal(!openModal);
    router.push(ROUTES.CREATE_PROFILE);
  };

  const totalQuestions = 15;

  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      rrss: "NO",
      prefers2: "agua",
      prefers1: "eventos",
      values3: "humor",
      values2: "generosidad",
      values1: "desarrollo",
      datesParents: "no sabe",
      hasChildren: "no",
      heartState: "recuperarse",
      sexoAffective: "fluir",
      ageRange: "35-45",
      looksFor: "todo",
      gender: "hombre",
      birthdate: "1990-04-19T22:00:00.000Z",
      catsDogs: "todos",
    },
  });

  const onSubmit = async (data) => {
    try {
      const transformedDate = new Date(data.birthdate)
        .toISOString()
        .split("T")[0];
      const response = await createPreferences({
        ...data,
        birthdate: transformedDate,
      });

      setOpenModal(true);
    } catch (error) {
      toastMessage({
        title: "error",
        text: "Error",
        icon: ".l.",
        type: "error",
      });
      console.log(error);
    }
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  const disabledButton = (error) => {
    const fieldValue = watch(questions[currentQuestion].type);
    const errorField = error;

    if (fieldValue === undefined && errorField === undefined) return true;

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

                {currentQuestion === totalQuestions - 1 ? (
                  <Button
                    color="secondary"
                    type="submit"
                    children="Enviar"
                    className="text-white text-[0.9rem] py-[0.3rem] font-semibold lg:mt-[1.4rem] py-[0.5rem] rounded-bl-3xl lrounded-tr-3xl text-[1rem] mb-[1rem]"
                    style={{
                      transition:
                        "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
                    }}
                  >
                    Enviar
                  </Button>
                ) : (
                  <Button
                    type="button"
                    color="primary"
                    disabled={disabledButton(error)}
                    onClick={handleNext}
                    className={`disabled:opacity-80 disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed rounded-bl-2xl rounded-tr-2xl hover:rounded-full bg-pink-strong false text-white text-[0.9rem] font-semibold mt-[1rem] py-[0.5rem] rounded-bl-3xl rounded-tr-3xl text-[1rem] max-w-[130px] `}
                  >
                    Siguiente
                  </Button>
                )}
              </div>
            )}
          />
        </form>
      </div>
      <ModalSuccess open={openModal} handlerModal={handlerModal} />
    </div>
  );
};

export default PreferencesForm;
