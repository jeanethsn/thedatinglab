import Image from "next/image";
import React from 'react';
import Link from "next/link"; 

function Footer() {
  return (
    <footer className="bg-grey-dark  ">
      <Image
        src="/assets/image/Logo_Blanco.svg"
        alt="Icono home"
        width={80}
        height={80}
      />
      <div className="flex  justify-center ">
        <ul >
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/image/icon-wa.svg"
                alt="Icono whastsapp"
                width={20}
                height={20}
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/the.dating.lab/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/image/icon-ig.svg"
                alt="Icono insta"
                width={20}
                height={20}
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/image/icon-tik.svg"
                alt="Icono TIKTOK"
                width={20}
                height={20}
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/datinglab/about/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/image/icon-linkedin.svg"
                alt="Icono TIKTOK"
                width={20}
                height={20}
              />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/contacto">
              Contacto
            </Link> 
          </li>
          <li>
            <Link href="/faqs">
              F.A.Q.s
            </Link> 
          </li>
          <li>
            <Link href="/terminos-de-servicio">
              Términos del servicio
            </Link> 
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
