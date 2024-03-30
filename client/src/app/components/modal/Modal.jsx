"use client";
import { Dialog, Card } from "@material-tailwind/react";

export default function Modal({ children }) {
  return (
    <>
      <Dialog
        size="xs"
        open
        // handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card>{children}</Card>
      </Dialog>
    </>
  );
}
