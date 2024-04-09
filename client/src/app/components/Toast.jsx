"use client";
import toast, { Toaster } from "react-hot-toast";

export const succesMesage = () =>
  toast.success("Te registraste correctamente!");

export default function Toast() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: "",
        duration: 5000,
        style: {
          background: "#363636",
          color: "#fff",
        },
      }}
    />
  );
}
