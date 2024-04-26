"use client";
import { Dialog, Card, CardBody } from "@material-tailwind/react";
import { useState } from "react";
import Button from "@/app/components/Button.jsx";
import Image from "next/image";

const WHATSAPP = {
  MESSAGE:
    "Hola, ¡bienvenido a Dating Lab! Estamos emocionados de que estés interesado en nuestras experiencias. ¿En qué podemos ayudarte hoy? ¿Necesitas información sobre nuestros próximos eventos o ayuda para comprar tus entradas? Estoy aquí para ayudarte en todo lo que necesites. ¡No dudes en preguntar!",
  URL: "https://wa.me",
  MOBILE_NUMBER: "+34623960450",
};

export default function ModalContact({ renderContactModal }) {
  const [openModalContact, setOpenModalContact] = useState(false);
  const handler = () => setOpenModalContact(!openModalContact);

  const handleOpenModalContact = () => {
    setOpenModalContact(true);
  };
  const handleCloseModalContact = () => {
    setOpenModalContact(false);
  };
  return (
    <>
      {renderContactModal(handleOpenModalContact)}
      <Dialog
        size="xs"
        open={openModalContact}
        handler={handler}
        className={` bg-transparent shadow-none sm:!max-w-[60%] sm:!w-[60%] sm:!min-w-[60%] md:!max-w-[45%] md:!w-[45%] md:!min-w-[45%] lg:flex lg:!max-w-[60%] lg:!w-[60%] lg:!min-w-[60%] ol:!max-w-[45%] ol:!w-[45%] ol:!min-w-[45%] xxl:!max-w-[40%] xxl:!w-[40%] xxl:!min-w-[40%]`}
      >
        <Card
          className={` lg:basis-[55%] lg:rounded-l-xl lg:rounded-r-none  overflow-hidden`}
        >
          <CardBody
            className={`font-nunito flex flex-col items-center gap-4 overflow-y-auto scrollbar-thumb:!rounded relative md:px-[2rem] lg:px-[2.5rem] lg:items-start`}
          >
            <Button
              className="!py-0 !w-auto !mt-0 absolute right-[1.5rem] top-[1.2rem] lg:hidden filter invert"
              onClick={handleCloseModalContact}
            >
              <Image
                src={"/assets/icon/icon-close.svg"}
                width={18}
                height={18}
                alt="icono cerrar"
                style={{ filter: "invert(1) !important" }}
              />
            </Button>
            <h1 className="text-center text-[1.4rem] font-semibold mt-[2rem] lg:text-[1.3rem] xl:text-[1.5rem]">
              ¡Contáctanos!
            </h1>
            <p className="text-start text-[1rem] leading-[1.3rem] lg:text-[0.9rem] xl:text-[1rem]">
              Estaremos encantados de ayudarte con qualquier duda que tengas.
              Envianos un mensaje y nos pondremos en contacto contigo
            </p>
            <div className="text-start">
              <Button
                as="Link"
                target="_blank"
                href={`${WHATSAPP.URL}/${encodeURIComponent(
                  WHATSAPP.MOBILE_NUMBER
                )}?text=${encodeURIComponent(WHATSAPP.MESSAGE)}`}
                className="flex items-center gap-[0.6rem] mb-[1rem]"
              >
                <Image
                  src={"/assets/icon/icon-whassapp-modal.svg"}
                  width={22}
                  height={22}
                  alt="icon de whatsapp"
                />
                <p className="text-[0.9rem] font-semibold sm:text-[1rem] lg:text-[0.8rem] xl:text-[1rem]">
                +34 623 960 450 
                </p>
              </Button>
              <Button
                as="Link"
                target="_blank"
                href="mailto:datinglab.experiences@gmail.com"
                className="flex items-center gap-[0.6rem]"
              >
                <Image
                  src={"/assets/icon/icon-contact-modal.svg"}
                  width={20}
                  height={20}
                  alt="icon de whatsapp"
                />
                <p className="text-[0.9rem] font-semibold sm:text-[1rem] lg:text-[0.8rem] xl:text-[1rem]">
                  datinglab.experiences@gmail.com
                </p>
              </Button>
            </div>

            <Button
              color="secondary"
              onClick={handleCloseModalContact}
              children="Volver"
              className=" text-white text-[0.9rem] py-[0.3rem] font-semibold lg:mt-[1.4rem] lg:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1rem]"
              style={{
                transition:
                  "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
              }}
            />
          </CardBody>
        </Card>
        <div
          className="hidden lg:flex bg-primary-color lg:basis-[45%] lg:rounded-r-xl flex-col lg:items-center lg:justify-center"
          style={{
            backgroundImage: `url('/assets/image/bg-login.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no repeat",
          }}
        >
          <Button className="!py-0 !w-auto hidden absolute right-[1.5rem] top-[1.2rem] lg:block">
            <Image
              src={"/assets/icon/icon-closeB.svg"}
              width={15}
              height={15}
              alt="icono cerrar"
              onClick={handleCloseModalContact}
            />
          </Button>
          <Image
            src={"/assets/image/Logo_Blanco.svg"}
            width={150}
            height={200}
            alt="icono cerrar"
            className="xl:w-[12rem] xl:h-auto"
          />
          <p className="mt-[0.5rem] text-center text-white font-nunito text-[0.9rem] leading-[1.1rem] xl:text-[1rem]">
            La app de citas donde<br></br> no existe el swipe
          </p>
        </div>
      </Dialog>
    </>
  );
}
