"use client"

import React, { useState } from "react";
import { Modal, Button } from "tailwindcss-react-ui";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Button onClick={handleOpenModal}>Acceder</Button>

      <Modal
        isOpen={showModal}
        onClose={handleCloseModal}
        title="Iniciar sesión"
      >
        <form>
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" />

          <Button type="submit">Iniciar sesión</Button>
        </form>
      </Modal>
    </div>
  );
};

export default App;





// import React, { useState } from 'react';
// // import api from './api';

// const LoginContent = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await api.post('/login', {
//         email,
//         password,
//       });

//       //mostrar mensaje de éxito
//       console.log(response);

//     } catch (error) {
//       setError(error.response.data.message);
//     }
//   };

//   return (
//     <div className="login-content">
//       <form onSubmit={handleSubmit}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <br />
//         <br />
//         <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
//         {error && <p className="error-message">{error}</p>}

//         <br />
//         <br />

//         <button type="submit">Iniciar sesión</button>
       
//       </form>
//     </div>
//   );
// };

