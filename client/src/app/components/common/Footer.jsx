import Image from "next/image";
import React from "react";
import Link from "next/link";
import ModalContact from "@/app/components/modal/ModalContact.jsx";
import Button from "@/app/components/Button.jsx";
const WHATSAPP = {
  MESSAGE:
    "Hola, ¡bienvenido a Dating Lab! Estamos emocionados de que estés interesado en nuestros eventos de citas a ciegas. ¿En qué puedo ayudarte hoy? ¿Necesitas información sobre nuestros próximos eventos o ayuda para comprar tus entradas? Estoy aquí para ayudarte en todo lo que necesites. ¡No dudes en preguntar!",
  URL: "https://wa.me",
  MOBILE_NUMBER: "+34613324535",
};
function Footer() {
  return (
    <footer className="bg-grey-dark pt-[4rem] lg:flex lg:justify-between p-6 lg:p-9 lg:px-[6rem] lg:items-center">
      <div className="flex justify-center items-center mb-8 lg:mb-0  lg:order-1 ">
        <Image
          src="/assets/image/LogoB.svg"
          alt="Icono home"
          width={150}
          height={150}
          className="lg:w-[8rem] lg:h-auto ol:w-[10rem] ol:h-auto"
        />
      </div>
      <div className="flex justify-center items-center mb-8 lg:mb-0 lg:flex lg:order-3">
        <ul className="flex space-x-6 lg:flex">
          <li>
            <a
              href="https://www.tiktok.com/@datinglabexperiences"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/icon/icon-tik.svg"
                alt="Icono TIKTOK"
                width={30}
                height={30}
                className="lg:w-[1.4rem] lg:h-[1.4rem] ol:w-[1.8rem] ol:h-[1.8rem]"
              />
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/playlist/4xkbM6RFRfVFfEAA8eyH9S?si=375431bb005a4de4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/icon/icon-spotify.svg"
                alt="Icono spotify"
                width={30}
                height={30}
                className="lg:w-[1.2rem] lg:h-[1.2rem] ol:w-[1.6rem] ol:h-[1.6rem]"
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
                className="lg:w-[1.4rem] lg:h-[1.4rem] ol:w-[1.8rem] ol:h-[1.8rem]"
              />
            </a>
          </li>
          <li>
            <a
              href={`${WHATSAPP.URL}/${encodeURIComponent(
                WHATSAPP.MOBILE_NUMBER
              )}?text=${encodeURIComponent(WHATSAPP.MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/icon/icon-wa.svg"
                alt="Icono whastsapp"
                width={30}
                height={30}
                className="lg:w-[1.4rem] lg:h-[1.4rem] ol:w-[1.8rem] ol:h-[1.8rem]"
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
                alt="Icono LinkedIn"
                width={30}
                height={30}
                className="lg:w-[1.4rem] lg:h-[1.4rem] ol:w-[1.8rem] ol:h-[1.8rem]"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center flex justify-center items-center lg:order-2 lg:py-[0.4rem]">
        <ul className="lg:flex lg:gap-8">
          <li className="mb-4 lg:mb-0">
            <ModalContact
              renderContactModal={(handleOpenModalMobile) => (
                <Button
                  className="!py-0 !mt-[0rem] text-white-text text-[1.2rem] lg:text-[1rem] ol:text-[1.1rem]"
                  onClick={() => {
                    handleOpenModalMobile();
                  }}
                >
                  Contacto
                </Button>
              )}
            />
          </li>

          <li className="mb-4 lg:mb-0">
            <Link
              className="text-white-text text-[1.2rem] lg:text-[1rem] ol:text-[1.1rem]"
              href="/preguntas"
            >
              F.A.Q.s
            </Link>
          </li>

          <li className="mb-8 lg:mb-0">
            <Link
              className="text-white-text text-[1.2rem] lg:text-[1rem] ol:text-[1.1rem]"
              href="/terminos-servicio"
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
