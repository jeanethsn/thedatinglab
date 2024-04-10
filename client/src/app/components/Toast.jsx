"use client";

import toast, { Toaster } from "react-hot-toast";

export const toastMessage = ({ title, text, icon, type = "success" }) => {
  const TEXT_STYLE = {
    success: {
      parrafo: "mt-1 text-[1rem] text-[#1B7947] font-nunito",
      title: "text-[1.1rem]  text-[#134b2d] font-nunito font-bold",
    },
    error: {
      parrafo: "mt-1 text-[1rem] text-[#791b1b] font-nunito",
      title: "text-[1.1rem]  text-[#641515] font-nunito font-bold",
    },
  };

  const BG_STYLE = {
    success: "bg-[#D1FADF]",
    error: " bg-[#fad1d1]",
  };

  const BORDER_STYLE = {
    success: "flex border-l border-[#134b2d]",
    error: " flex border-l border-[#4b1313]",
  };

  return toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full ${
        BG_STYLE[type]
      } shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img className="h-10 w-10 rounded-full" src={icon} alt="" />
          </div>
          <div className="ml-3 flex-1">
            <p className={TEXT_STYLE[type]["title"]}>{title}</p>
            <p className={TEXT_STYLE[type]["parrafo"]}>{text}</p>
          </div>
        </div>
      </div>
      <div className={BORDER_STYLE[type]}>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-[1rem] font-bold text-[#4e4e4e] hover:text-[#505050] focus:outline-none focus:ring-2 focus:ring-offset-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  ));
};

export default function Toast() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: "",
        duration: 5000,
      }}
    />
  );
}
