"use client";
import { useEffect, useState } from "react";
import { Typography, Input, Textarea } from "@material-tailwind/react";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/providers/UserProvider";
import { authHeader, createProfile } from "@/app/services/user";
import { toastMessage } from "@/app/components/Toast";

const ROUTES = {
  MY_ACCOUNT: "/mi-cuenta",
};
export default function CreateForm() {
  const router = useRouter();
  const { user, updateUserData } = useUser();
  const [formData, setFormData] = useState({
    image: null,
    description: "",
    vitalMoment: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user.profile_id) router.push("/mi-cuenta");
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createProfile(formData);
      const profileId = response?.data?.profile_id;
      await updateUserData(profileId);
      toastMessage({
        title: "¡Correcto!",
        text: "❤️Tu perfil se ha creado correctamente",
        icon: "/assets/icon/icon-userlogged.svg",
      });
      window.location.href = `${ROUTES.MY_ACCOUNT}`;
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.validation_errors);
      } else {
        console.error("Error al crear el perfil:", error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Typography variant="h6" color="blue-gray">
            Imagen:
          </Typography>
          <Input
            name="image"
            type="file"
            size="lg"
            className="border-none"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={handleChange}
          />
          {errors && errors.image && (
            <p className="text-red-600 text-[0.8rem] md:text-[0.9rem]">
              {errors.image[0]}
            </p>
          )}
        </div>
        <div className="mb-4">
          <Typography variant="h6" color="blue-gray">
            Descripción:
          </Typography>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors && errors.description && (
            <p className="text-red-600 text-[0.8rem] md:text-[0.9rem]">
              {errors.description[0]}
            </p>
          )}
        </div>
        <div className="mb-4">
          <Typography variant="h6" color="blue-gray">
            Momento vital:
          </Typography>
          <Textarea
            name="vitalMoment"
            value={formData.vitalMoment}
            onChange={handleChange}
          />
          {errors && errors.vitalMoment && (
            <p className="text-red-600 text-[0.8rem] md:text-[0.9rem]">
              {errors.vitalMoment[0]}
            </p>
          )}
        </div>
        <Button
          color="secondary"
          type="submit"
          children="Crear perfil"
          className="text-white text-[0.9rem] w-[18.75rem] py-[0.3rem] font-semibold lg:mt-[1.4rem] lg:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1rem]"
          style={{
            transition:
              "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
          }}
        />
      </form>
    </div>
  );
}
