"use client";
import { Dialog, Card, CardBody } from "@material-tailwind/react";
import LoginContent from "@/app/components/modal/LoginContent.jsx";
import RegistroContent from "@/app/components/modal/RegistroContent.jsx";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Button from "@/app/components/Button.jsx";

export default function ModalAuth({ renderButtonModal }) {
  const [openModalAuth, setOpenModalAuth] = useState(false);
  const [shouldRenderRegister, setShouldRenderRegister] = useState(false);

  const handleOpenModalAuth = () => setOpenModalAuth(true);

  const handleCloseModalAuth = () => {
    setShouldRenderRegister(false);
    setOpenModalAuth(false);
  };

  const handleOpenRegister = () => setShouldRenderRegister(true);

  const handleCloseRegister = () => setShouldRenderRegister(false);

  const handler = () => setOpenModalAuth(!openModalAuth);
  return (
    <>
      {renderButtonModal(handleOpenModalAuth)}

      <Dialog
        size="xs"
        open={openModalAuth}
        handler={handler}
        className={` bg-transparent shadow-none sm:!max-w-[50%] sm:!w-[50%] sm:!min-w-[50%] lg:!max-w-[70%] lg:!w-[70%] lg:!min-w-[70%] lg:flex  ol:!max-w-[50%] ol:!w-[50%] ol:!min-w-[50%] xxl:!max-w-[45%] xxl:!w-[45%] xxl:!min-w-[45%]`}
      >
        <Card className="lg:basis-[50%] lg:rounded-l-xl  lg:rounded-r-none">
          <CardBody
            className={`${styles.containerScroll} ${
              shouldRenderRegister ? "h-[35rem]" : ""
            } flex flex-col gap-4 overflow-y-auto scrollbar-thumb:!rounded relative md:px-[2rem] lg:px-[2.5rem]`}
          >
            <Button
              className="!py-0 !w-auto absolute right-[1.5rem] top-[1.2rem] lg:hidden filter invert"
              onClick={handleCloseModalAuth}
            >
              <Image
                src={"/assets/icon/icon-close.svg"}
                width={18}
                height={18}
                alt="icono cerrar"
                style={{ filter: "invert(1) !important" }}
              />
            </Button>
            {!shouldRenderRegister && (
              <LoginContent
                handleCloseModalAuth={handleCloseModalAuth}
                handleOpenRegister={handleOpenRegister}
              />
            )}

            {shouldRenderRegister && (
              <RegistroContent handleCloseRegister={handleCloseRegister} />
            )}
          </CardBody>
        </Card>
        <div
          className="hidden lg:flex bg-primary-color lg:basis-[50%] lg:rounded-r-xl flex-col lg:items-center lg:justify-center"
          style={{
            backgroundImage: `url('/assets/image/bg-login.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no repeat",
          }}
        >
          <Button
            className="!py-0 !w-auto hidden absolute right-[1.5rem] top-[1.2rem] lg:block"
            onClick={handleCloseModalAuth}
          >
            <Image
              src={"/assets/icon/icon-closeB.svg"}
              width={20}
              height={20}
              alt="icono cerrar"
            />
          </Button>
          <Image
            src={"/assets/image/Logo_Blanco.svg"}
            width={250}
            height={200}
            alt="icono cerrar"
          />
          <p className="text-white font-nunito text-[1.2rem] leading-[1.4rem]">
            La app de citas donde<br></br> no existe el swipe
          </p>
        </div>
      </Dialog>
    </>
  );
}
