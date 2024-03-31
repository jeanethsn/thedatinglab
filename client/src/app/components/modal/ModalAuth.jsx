"use client";
import { Dialog, Card, CardBody } from "@material-tailwind/react";
import LoginContent from "@/app/components/modal/LoginContent.jsx";
import RegistroContent from "@/app/components/modal/RegistroContent.jsx";
import { useState } from "react";

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

  const handler = () => setOpen(!openModalAuth);
  return (
    <>
      {renderButtonModal(handleOpenModalAuth)}

      <Dialog
        size="xs"
        open={openModalAuth}
        handler={handler}
        className="bg-transparent shadow-none"
      >
        <Card>
          <CardBody className="flex flex-col gap-4 max-h-[700px] overflow-y-auto">
            <button className="text-right" onClick={handleCloseModalAuth}>
              X
            </button>
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
      </Dialog>
    </>
  );
}
