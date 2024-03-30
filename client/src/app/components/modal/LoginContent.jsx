// "use client"
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

