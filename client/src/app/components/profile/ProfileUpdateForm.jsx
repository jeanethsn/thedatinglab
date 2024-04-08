"use client"
import React, { useState } from "react";
import { updateProfile } from "../../services/user";
import { useUser } from "@/app/providers/UserProvider";

export default function ProfileUpdateForm({ setIsEditing, updateUserData }){
    const [formData, setFormData] = useState({
      image: "",
      description: "",
      vitalMoment: ""
    });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const { user } = useUser();
    const userId = user.id;
 

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
        const response = await updateProfile(userId, formData);
        const { message } = response.data;
        setSuccessMessage(message);
        setError(null);
        // Aquí actualizamos los datos del usuario después de una actualización exitosa
        updateUserData(response.data.userData);
        setIsEditing(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setSuccessMessage(null);
      }
    };
  
    return (
      <div>
        <h2>Actualizar perfil</h2>
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Imagen:</label>
            <input type="file" name="image" onChange={handleChange} />
          </div>
          <div>
            <label>Descripción:</label>
            <textarea name="description" value={formData.description} onChange={handleChange} />
          </div>
          <div>
            <label>Momento vital:</label>
            <input type="text" name="vitalMoment" value={formData.vitalMoment} onChange={handleChange} />
          </div>
          <button type="submit">Actualizar perfil</button>
        </form>
      </div>
    );
  };