"use client"

import { useState } from 'react';
import { useRouter } from 'next/router';
// import axios from 'axios';
import styles from './style.module.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      //llamada api
    //   const response = await fetch('/api/auth/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email,
    //       password,
    //     }),
    //   });
  

    //verificacion de la validacion de los datos del usuario   
    
    // if (response.ok) {
    //     const user = await response.json();
    //     localStorage.setItem('user', JSON.stringify(user));
    
    //     router.push('/');
    //   } else {
    //     console.log('Error al iniciar sesión');
    //   }
    // };

//TODO  
//COMPROBAR LA VALIDACION COMO HACERLA DESDE EL BACKEN Y TRAERMELA AL FRONT, Y APICAR SI EL USUARIO ESTA BLOQUEADO QUE NO 


      router.push('/');
    };
  
    return (
      <div className="login-container">
        <h1>Bienvenido</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="remember-me">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Recuérdame</label>
          </div>

          <button type="submit">Iniciar sesión</button>
        </form>

        <a href="#">¿Has olvidado la contraseña?</a>
        <p>¿No tienes cuenta? <a href="#">Regístrate ahora</a></p>
      </div>
    );
  };
  
  export default Login;