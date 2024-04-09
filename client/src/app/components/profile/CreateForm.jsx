"use client"
import { useUser } from "@/app/providers/UserProvider";
import { updateProfile } from "@/app/services/user";
import { Textarea, Input, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "../Button";


export default function CreateForm(){
  
    return (
        <div>
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
          <Typography variant="h6" color="blue-gray">
          Imagen:
          </Typography>
            <Input
                name='image'
                type="file"
                size="lg"
                className="border-none"
                labelProps={{
                className: "before:content-none after:content-none ",
                }}
                onChange={handleChange}          
            />
          </div>
          <div className="mb-4">
          <Typography variant="h6" color="blue-gray">
          Descripción:
          </Typography>
            <Textarea name="description" value={formData.description} onChange={handleChange} />
          </div>
          <div className="mb-4">
          <Typography variant="h6" color="blue-gray">
          Momento vital:
          </Typography>
            <Textarea type="text" name="vitalMoment" value={formData.vitalMoment} onChange={handleChange} />
          </div>
          <Button
          color="secondary"
          type="submit"
          children="Crear perfil"
          className=" text-white text-[0.9rem] w-[18.75rem] py-[0.3rem] font-semibold lg:mt-[1.4rem] lg:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1rem]"
          style={{
            transition:
              "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
          }}
        />
        </form>
      </div>
    );
  };