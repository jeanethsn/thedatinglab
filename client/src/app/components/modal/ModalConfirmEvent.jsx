"use client";
import { Dialog, Card, CardBody } from "@material-tailwind/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button.jsx";
import Image from "next/image";

const WHATSAPP = {
  MESSAGE:
    "Hola, ¡bienvenido a Dating Lab! Estamos emocionados de que estés interesado en nuestros eventos de citas a ciegas. ¿En qué puedo ayudarte hoy? ¿Necesitas información sobre nuestros próximos eventos o ayuda para comprar tus entradas? Estoy aquí para ayudarte en todo lo que necesites. ¡No dudes en preguntar!",
  URL: "https://wa.me",
  MOBILE_NUMBER: "+34613324535",
};

export default function ModalConfirmEvent({ renderModalConfirmEvent }) {
  const router = useRouter();
  const [openModalContact, setOpenModalContact] = useState(false);
  const handler = () => setOpenModalContact(!openModalContact);

  const handleOpenModalConfirmEvent = () => {
    setOpenModalContact(true);
  };
  const handleCloseModalConfirmEvent = () => {
    setOpenModalContact(false);
    router.push("/eventos");
  };
  return (
    <>
      {renderModalConfirmEvent(handleOpenModalConfirmEvent)}
      <Dialog
        size="xs"
        open={openModalContact}
        handler={handler}
        className={` bg-transparent shadow-none sm:!max-w-[60%] sm:!w-[60%] sm:!min-w-[60%] md:!max-w-[45%] md:!w-[45%] md:!min-w-[45%] lg:flex lg:!max-w-[80%] lg:!w-[80%] lg:!min-w-[80%] ol:!max-w-[50%] ol:!w-[50%] ol:!min-w-[50%] xxl:!max-w-[40%] xxl:!w-[40%] xxl:!min-w-[40%]`}
      >
        <Card
          className={` lg:basis-[55%] lg:rounded-l-xl lg:rounded-r-none  overflow-hidden`}
        >
          <CardBody
            className={`font-nunito flex flex-col items-center gap-4 overflow-y-auto scrollbar-thumb:!rounded relative md:px-[2rem] lg:px-[2.5rem] lg:items-start`}
          >
            <Button
              className="!py-0 !w-auto !mt-0 absolute right-[1.5rem] top-[1.2rem] lg:hidden filter invert"
              onClick={handleCloseModalConfirmEvent}
            >
              <Image
                src={"/assets/icon/icon-close.svg"}
                width={18}
                height={18}
                alt="icono cerrar"
                style={{ filter: "invert(1) !important" }}
              />
            </Button>
            <h1 className="text-center text-[1.1rem] font-semibold mt-[2rem] lg:text-[1.3rem] xl:text-[1.5rem]">
              ¡Gracias por registrarte a nuestra LabExperiences! 🧡
            </h1>
            <p className="text-start text-[1rem] leading-[1.3rem] lg:text-[0.9rem] xl:text-[1rem]">
              Recibirás un correo electrónico de confirmación los pasos para
              completar el proceso de pago. Por favor, asegúrate de revisar tu
              bandeja de entrada, incluyendo la carpeta de correo no deseado.
            </p>
            <p className="text-start text-[1rem] leading-[1.3rem] lg:text-[0.9rem] xl:text-[1rem]">
              Si tienes alguna pregunta o necesitas asistencia adicional, no
              dudes en ponerte en contacto:
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
                <p className="text-[0.9rem] font-semibold sm:text-[1rem] lg:text-[1rem] xl:text-[1rem]">
                  +34 669945836
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
                <p className="text-[0.9rem] font-semibold sm:text-[1rem] lg:text-[1rem] xl:text-[1rem]">
                  datinglab.experiences@gmail.com
                </p>
              </Button>
            </div>

            <Button
              color="secondary"
              onClick={handleCloseModalConfirmEvent}
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
              onClick={handleCloseModalConfirmEvent}
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
