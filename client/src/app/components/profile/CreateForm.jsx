"use client"
import { useState } from "react";
import { Typography, Input, Textarea } from "@material-tailwind/react";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/providers/UserProvider";
import { authHeader, createProfile } from "@/app/services/user";

export default function CreateForm() {
  const router = useRouter();
  const { user } = useUser();
  const [formData, setFormData] = useState({
    image: null,
    description: "",
    vitalMoment: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const headers = authHeader();
      const response = await createProfile(formData, headers);
      router.push(`/mi-cuenta/${user.id}/`);
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
            <p className="text-red-600 text-[0.8rem] md:text-[0.9rem]">{errors.image[0]}</p>
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
            <p className="text-red-600 text-[0.8rem] md:text-[0.9rem]">{errors.description[0]}</p>
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
            <p className="text-red-600 text-[0.8rem] md:text-[0.9rem]">{errors.vitalMoment[0]}</p>
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