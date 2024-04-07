"use client";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

export function ModalUserLogged({ open, handler }) {
  return (
    <>
      <Dialog open={open} handler={handler}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Your Attention is Required!
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handler}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
          <Typography color="red" variant="h4">
            You should read this!
          </Typography>
          <Typography className="text-center font-normal">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </Typography>
        </DialogBody>
      </Dialog>
    </>
  );
}
