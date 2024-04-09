"use client";

import toast, { Toaster } from "react-hot-toast";

export const succesMesage = ({ title, text, icon }) =>
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-[#D1FADF] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img className="h-10 w-10 rounded-full" src={icon} alt="" />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-[1.1rem]  text-[#134b2d] font-nunito font-bold">
              {title}
            </p>
            <p className="mt-1 text-[1rem] text-[#1B7947] font-nunito">
              {text}
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-[#134b2d]">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-[1rem] font-bold text-[#4e4e4e] hover:text-[#505050] focus:outline-none focus:ring-2 focus:ring-offset-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  ));

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
