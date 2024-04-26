"use client";
import { Dialog, Card, CardBody } from "@material-tailwind/react";
import LoginContent from "@/app/components/modal/LoginContent.jsx";
import RegistroContent from "@/app/components/modal/RegistroContent.jsx";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Button from "@/app/components/Button.jsx";
import { useUser } from "@/app/providers/UserProvider";
import { useRouter } from "next/navigation";

export default function ModalAuth({ renderButtonModal }) {
  const { user } = useUser();
  const [openModalAuth, setOpenModalAuth] = useState(false);
  const [shouldRenderRegister, setShouldRenderRegister] = useState(false);
  const [formRegisterSuccess, setFormRegisterSuccess] = useState(false);
  const router = useRouter();

  const handleOpenModalAuth = () => {
    setFormRegisterSuccess(false);
    setOpenModalAuth(true);
  };
  const handleCloseModalAuth = () => {
    setShouldRenderRegister(false);
    setOpenModalAuth(false);
  };

  const handleOpenRegister = () => {
    setShouldRenderRegister(true);
    setFormRegisterSuccess(false);
  };

  const handleCloseRegister = () => setShouldRenderRegister(false);

  const handler = () => {
    setOpenModalAuth(!openModalAuth);
    router.push("/test-de-compatibilidad");
  };
  return (
    <>
      {!user?.email && renderButtonModal(handleOpenModalAuth)}

      <Dialog
        aria-label="ModalAuth"
        size="xs"
        open={openModalAuth}
        handler={handler}
        className={`modalAuth ${
          formRegisterSuccess
            ? "lg:!block !max-w-[70%] !w-[70%] !min-w-[70%] sm:!max-w-[60%] sm:!w-[60%] sm:!min-w-[60%] md:!max-w-[50%] md:!w-[50%] md:!min-w-[50%] lg:!max-w-[40%] lg:!w-[40%] lg:!min-w-[40%]  xl:!max-w-[30%] xl:!w-[30%] xl:!min-w-[30%]  xxl:!max-w-[25%] xxl:!w-[25%] xxl:!min-w-[25%] xxxl:!max-w-[20%] xxxl:!w-[20%] xxxl:!min-w-[20%]"
            : "lg:flex lg:!max-w-[70%] lg:!w-[70%] lg:!min-w-[70%]  ol:!max-w-[50%] ol:!w-[50%] ol:!min-w-[50%] xxl:!max-w-[45%] xxl:!w-[45%] xxl:!min-w-[45%]"
        } bg-transparent shadow-none sm:!max-w-[60%] sm:!w-[60%] sm:!min-w-[60%] `}
      >
        <Card
          className={` ${
            formRegisterSuccess ? "lg:!rounded-xl" : "lg:rounded-r-none"
          } lg:basis-[50%] lg:rounded-l-xl   overflow-hidden`}
        >
          <CardBody
            className={`${styles.containerScroll} ${
              shouldRenderRegister ? "max-h-[35rem]" : ""
            } flex flex-col gap-4 overflow-y-auto scrollbar-thumb:!rounded relative md:px-[2rem] lg:px-[2.5rem]`}
          >
            <Button
              className={`${
                formRegisterSuccess ? "block" : "lg:hidden"
              } !py-0 !w-auto absolute right-[1.5rem] top-[1.2rem]  filter invert`}
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
                key="loginForm"
                handleCloseModalAuth={handleCloseModalAuth}
                handleOpenRegister={handleOpenRegister}
              />
            )}

            {shouldRenderRegister && (
              <RegistroContent
                key="registerForm"
                handleCloseModalAuth={handleCloseModalAuth}
                handleCloseRegister={handleCloseRegister}
                formRegisterSuccess={formRegisterSuccess}
                setFormRegisterSuccess={setFormRegisterSuccess}
                handler={handler}
              />
            )}
          </CardBody>
        </Card>
        {!formRegisterSuccess && (
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
        )}
      </Dialog>
    </>
  );
}
