import Image from "next/image";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-grey-dark pt-[4rem] lg:flex lg:justify-between p-6 lg:p-9 lg:px-[6rem] lg:items-center">
      <div className="flex justify-center items-center mb-8 lg:mb-0  lg:order-1 ">
        <Image
          src="/assets/image/LogoB.svg"
          alt="Icono home"
          width={150}
          height={150}
        />
      </div>
      <div className="flex justify-center items-center mb-8 lg:mb-0 lg:flex lg:order-3">
        <ul className="flex space-x-6 lg:flex">
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/icon/icon-tik.svg"
                alt="Icono TIKTOK"
                width={30}
                height={30}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/the.dating.lab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/icon/icon-ig.svg"
                alt="Icono insta"
                width={30}
                height={30}
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/icon/icon-wa.svg"
                alt="Icono whastsapp"
                width={30}
                height={30}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/datinglab/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/icon/icon-linkedin.svg"
                alt="Icono TIKTOK"
                width={30}
                height={30}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center justify-center items-center lg:order-2">
        <ul className="lg:flex lg:gap-8">
          <li className="mb-4 lg:mb-0">
            <Link className="text-white-text text-[1.2rem]" href="/contacto">
              Contacto
            </Link>
          </li>

          <li className="mb-4 lg:mb-0">
          <Link className="text-white-text text-[1.2rem]" href="../pages/faq/page.jsx">
            F.A.Q.s
          </Link>
        </li>


          <li className="mb-8 lg:mb-0">
            <Link
              className="text-white-text text-[1.2rem]"
              href="/terminos-de-servicio"
            >
              Términos del servicio
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
