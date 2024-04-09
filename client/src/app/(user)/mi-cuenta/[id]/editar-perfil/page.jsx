"use client"
import Button from "@/app/components/Button";
import { useUser } from "@/app/providers/UserProvider";
import { updateProfile } from "@/app/services/user";
import { Typography, Input, Textarea} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


export default function ProfileUpdateForm(){
  const router = useRouter()
    const [formData, setFormData] = useState({
      image: "",
      description: "",
      vitalMoment: ""
    });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const { user } = useUser();
    const profileId = user.profile_id;
 

    const handleChange = (e) => {
      if (e.target.type === "file") {
        setFormData({
          ...formData,
          [e.target.name]: e.target.files[0]
        });
      } else {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await updateProfile(profileId, formData);
        const { message } = response.data;
        setSuccessMessage(message);
        router.push(`/mi-cuenta/${user.id}/`)
        setError(null);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setSuccessMessage(null);
      }
    };
  
    return (
      <main className="bg-pink-grey-bg md:min-h-screen pt-16">
        <div className="bg-white w-2/4 p-[2%] m-auto rounded-xl ">
        <Typography
          variant="h4"
          className="text-primary-color font-nunito font-bold text-[1.6rem] mt-[0.4rem] lg:text-[1.8rem] lg:mt-[1rem]"
        >
          Actualizar perfil
        </Typography>
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-between">
          <div>
            <label>Imagen:</label>
            <input  type="file" name="image" onChange={handleChange} />
          </div>
          <div>
            <label>Descripción:</label>
            <Textarea name="description" value={formData.description} onChange={handleChange} />
          </div>
          <div>
            <label>Momento vital:</label>
            <Textarea type="text" name="vitalMoment" value={formData.vitalMoment} onChange={handleChange} />
          </div>
          <Button
          color="secondary"
          type="submit"
          children="Actualizar perfil"
          className=" text-white text-[0.9rem] py-[0.3rem] font-semibold lg:mt-[1.4rem] lg:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1rem]"
          style={{
            transition:
              "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
          }}
        />
        </form>
        </div>
      </main>
    );
  };