"use client"
import React, { useState } from 'react';
// import api from './api';

const RegistroContent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await api.post('/register', {
        email,
        password,
      });

      // Redireccionar o mostrar mensaje de éxito
      console.log(response);

    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="text-white text-lg font-bold">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirmar contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegistroContent;
