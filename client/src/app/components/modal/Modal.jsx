"use client";
import { Dialog, Card } from "@material-tailwind/react";

export default function Modal({ children, open, handler, ...props }) {
  console.log({ handler });
  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handler}
        {...props}
        className="bg-transparent shadow-none"
      >
        <Card>{children}</Card>
      </Dialog>
    </>
  );
}
