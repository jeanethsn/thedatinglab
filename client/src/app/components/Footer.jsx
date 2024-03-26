import Image from "next/image";
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
 <Image
          src="/assets/image/Logo_Blanco.svg"
          alt="Icono home"
          width={80}
          height={80}
        />
   
    </footer>
  );
}

export default Footer;
