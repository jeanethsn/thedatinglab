import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

export default function ModalSuccess({ open, handlerModal }) {
  return (
    <>
      <Dialog open={open} handler={handlerModal}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Has completado el test al 100%
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <Typography className="text-center font-normal">
            ¡Enhorabuena! Tu registro se ha completado con éxito. Gracias por
            unirte a nuestra comunidad. Estamos emocionados de tenerte con
            nosotros y esperamos que disfrutes de todas las experiencias que
            tenemos preparadas para ti.
          </Typography>
        </DialogBody>
      </Dialog>
    </>
  );
}
