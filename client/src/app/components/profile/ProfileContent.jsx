import React, { useState } from "react";
import Button from "../Button";
import ProfileUpdateForm from "../../components/profile/ProfileUpdateForm"; // Importa el componente ProfileUpdateForm
import ProfileUserInfo from "./ProfileUserInfo";

export default function ProfileContent({userData}) {
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar si se está editando el perfil

  const handleEditClick = () => {
    setIsEditing(true); // Cambia el estado a true cuando se hace clic en "Editar perfil"
  };

  return (
    <section className="flex flex-col lg:w-full m-auto py-12 gap-12">
      <ProfileUserInfo userData={userData}/>
      {/* Renderizar el componente ProfileUpdateForm si isEditing es true */}
      {isEditing ? (
        <ProfileUpdateForm />
      ) : (
        <Button
          color="primary"
          children="Editar perfil"
          onClick={handleEditClick} // Llama a la función handleEditClick cuando se hace clic en el botón
          className="sm:text-[1.1rem] w-[18.75rem] m-auto lg:w-[28rem] text-white text-[1rem] font-semibold lg:mt-[1.4rem] lg:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1.2rem]"
          style={{
            transition:
              "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
          }}
        />
      )}
    </section>
  );
}